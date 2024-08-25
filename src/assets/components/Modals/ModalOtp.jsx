import PropTypes from "prop-types";
import { Box, IconButton, Modal, Paper, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";
import { useFormik } from "formik";
import { useAuthContext } from "../../../context/AuthContext";
import { useVerifyUserPhone } from "../../../services/user/verify-phone-otp";
import { useVerifyUserEmail } from "../../../services/user/verify-email-otp";
import { useResendPhoneVerificationOtp } from "../../../services/user/resend-phone-verification-otp";
import { useResendEmailVerificationOtp } from "../../../services/user/resend-email-verification-otp";

export const ModalOtp = ({ open, onClose, type, onSuccess }) => {
	const inputRefs = useRef([]);
	const { user } = useAuthContext();
	const mutateVerifiedPhone = useVerifyUserPhone();
	const mutateVerifiedEmail = useVerifyUserEmail();
	const resendPhoneOtp = useResendPhoneVerificationOtp();
	const resendEmailOtp = useResendEmailVerificationOtp();
	// const [errorMessage, setErrorMessage] = useState(null)

	const formik = useFormik({
		initialValues: {
			otp: ["", "", "", "", "", ""],
		},
		validationSchema: Yup.object().shape({
			otp: Yup.array()
				.of(
					Yup.string()
						.matches(/^[0-9]+$/, "Harus angka")
						.length(1, "Harus 1 digit")
				)
				.required("Kode OTP harus diisi"),
		}),
		onSubmit: async (values) => {
			const otpString = values.otp.join("");

			const payload = {
				otp: otpString,
			};

			try {
				if (type === "phone") {
					await mutateVerifiedPhone.mutateAsync(payload);
				} else {
					console.log("ok masuk ");
					await mutateVerifiedEmail.mutateAsync(payload);
				}
				formik.resetForm();
				onClose();
				if (onSuccess) {
					onSuccess(); // Panggil callback ketika OTP berhasil diverifikasi
				}
			} catch (error) {
				// setErrorMessage(error?.response.data.message || "Terjadi kesalahan");
				return error;
			}
		},
	});

	const handleChange = (index, event) => {
		const { value } = event.target;
		if (!isNaN(value) && value.length <= 1) {
			const newOtp = [...formik.values.otp];
			newOtp[index] = value;
			formik.setFieldValue("otp", newOtp);

			// Automatically focus on the next input or submit if all inputs are filled
			if (index < formik.values.otp.length - 1 && value !== "") {
				inputRefs.current[index + 1].focus();
			} else if (newOtp.every((digit) => digit.length === 1)) {
				formik.handleSubmit(); // Automatically submit if all fields are filled
			}
		}
	};

	const handleResendOtp = async () => {
		try {
			if (type === "phone") {
				await resendPhoneOtp.mutateAsync();
			} else {
				await resendEmailOtp.mutateAsync();
			}
		} catch (error) {
			console.error("Resend OTP failed:", error);
		}
	};

	return (
		<Modal open={open} onClose={onClose} style={{ marginTop: "10rem" }}>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Paper
					elevation={5}
					square={false}
					sx={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						width: "30%",
						py: 5,
						px: 4,
					}}
				>
					<IconButton aria-label="button close" onClick={onClose} sx={{ ml: "auto", mb: 2 }}>
						<CloseIcon />
					</IconButton>
					<Typography variant="h5" sx={{ fontWeight: "bold", mx: "auto" }}>
						Masukkan Kode Verifikasi
					</Typography>
					<Typography variant="body1" sx={{ mx: "auto", mt: 2, textAlign: "center" }}>
						Kami telah mengirimkan kode verifikasi 6 digit melalui WhatsApp ke nomor yang terdaftar
					</Typography>
					<form onSubmit={formik.handleSubmit}>
						<Typography variant="body1" fontWeight="bold" marginTop={4}>
							Kode OTP
						</Typography>
						<Box
							marginTop={2}
							justifyContent="center"
							display="flex"
							flexDirection="column"
							alignItems="center"
							gap={4}
						>
							<Box display="flex" gap={3}>
								{formik.values.otp.map((digit, index) => (
									<TextField
										key={index}
										style={{
											width: 38,
											height: 38,
											textAlign: "center",
											fontSize: 14,
										}}
										variant="outlined"
										size="small"
										name={`otp[${index}]`}
										value={digit}
										onChange={(e) => handleChange(index, e)}
										onKeyDown={(e) => {
											if (e.key === "Backspace" && index > 0 && !digit) {
												inputRefs.current[index - 1].focus();
											}
										}}
										inputProps={{
											maxLength: 1,
											style: { textAlign: "center" },
										}}
										inputRef={(el) => (inputRefs.current[index] = el)}
										aria-required="true"
										aria-label="Input enam Digit Kode OTP"
									/>
								))}
							</Box>
							{(mutateVerifiedPhone?.isError || mutateVerifiedEmail?.isError) && (
								<Typography sx={{ color: "red" }}>
									{mutateVerifiedPhone?.error
										? mutateVerifiedPhone.error?.response?.data?.message ||
										  mutateVerifiedPhone?.error?.message
										: mutateVerifiedEmail?.error?.response?.data?.message ||
										  mutateVerifiedEmail?.error?.message}
								</Typography>
							)}
							{(resendPhoneOtp?.isSuccess || resendEmailOtp?.isSuccess) && (
								<Typography sx={{ color: "red" }}>
									{resendPhoneOtp?.isSuccess
										? "kode Otp sudah dikirim ulang periksa whatsapp anda"
										: "kode Otp sudah dikirim ulang periksa email baru anda"}
								</Typography>
							)}
							{(resendPhoneOtp?.isError || resendEmailOtp?.isError) && (
								<Typography sx={{ color: "red" }}>
									{resendPhoneOtp?.isError
										? resendPhoneOtp.error?.response.data.message || resendPhoneOtp?.error?.message
										: resendEmailOtp?.error.response.data.message || resendEmailOtp?.error?.message}
								</Typography>
							)}
							<Typography
								onClick={handleResendOtp}
								sx={{
									color: "#B3B3B3",
									cursor: "pointer",
									"&:hover": {
										color: "#1976d2",
									},
								}}
								variant="body1"
								role="button"
								aria-label="Button untuk kirim kode otp baru"
							>
								Kirim Kode Baru
							</Typography>
						</Box>
					</form>
				</Paper>
			</Box>

			{/* {mutateChangePhone.isSuccess && (
                <SuccesAlert message="silahkan masukan kode OTP untuk verifikasi" title="No Baru Sedang Didaftarkan" />
            )} */}
		</Modal>
	);
};

ModalOtp.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	onSuccess: PropTypes.func,
};
