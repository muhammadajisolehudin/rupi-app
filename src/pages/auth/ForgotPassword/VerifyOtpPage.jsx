import { useRef } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useVerifyOtpResend } from "../../../services/auth/verify-resend";
import { useAuthContext } from "../../../context/AuthContext";

export const VerifyOtpPage = ({ onNext }) => {
	const { formData } = useAuthContext();
	const inputRefs = useRef([]);
	const { user } = useAuthContext();
	const resendOtp = useVerifyOtpResend();

	const formik = useFormik({
		initialValues: {
			type: "FORGOT_PASSWORD",
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
				...values,
				otp: otpString,
			};

			try {
				onNext(payload);
				// await otp.mutateAsync(payload);
				// const previousPath = location.state?.from?.pathname || '/login';
				// navigate(previousPath === '/forgot-password' ? '/set-password' : '/');
				// navigate("/")
			} catch (error) {
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
			if (value === "" && index > 0) {
				inputRefs.current[index - 1].focus();
			} else if (index < formik.values.otp.length - 1) {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	const handleResendOtp = async () => {
		try {
			await resendOtp.mutateAsync(user);
		} catch (error) {
			console.error("Resend OTP failed:", error);
		}
	};

	return (
		<>
			<Paper
				// component={Paper}
				elevation={5}
				square={false}
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					my: "auto",
					py: 8,
					px: 4,
				}}
			>
				<Typography variant="h5" sx={{ fontWeight: "bold", mx: "auto" }}>
					Masukkan Kode Verifikasi
				</Typography>
				<Typography variant="body1" sx={{ mx: "auto", mt: 7, textAlign: "center" }}>
					Kami telah mengirimkan kode verifikasi 6 digit melalui WhatsApp ke nomor yang terdaftar
				</Typography>
				<form onSubmit={formik.handleSubmit}>
					<Box
						marginTop={4}
						justifyContent="center"
						display="flex"
						flexDirection="column"
						justifyItems="center"
						alignItems="center"
						gap={4}
					>
						<Typography variant="body1" fontWeight="bold" mr="auto">
							Kode OTP
						</Typography>
						<Box display="flex" gap={3}>
							{formik.values.otp.map((digit, index) => (
								<Box key={index}>
									<TextField
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
										autoComplete="off"
										onChange={(e) => handleChange(index, e)}
										onKeyDown={(e) => {
											if (e.key === "Backspace" && index > 0 && !digit) {
												inputRefs.current[index - 1].focus();
											}
										}}
										// onPaste={handlePaste}
										inputProps={{
											maxLength: 1,
											style: { textAlign: "center" },
										}}
										inputRef={(el) => (inputRefs.current[index] = el)}
										aria-required="true"
										aria-label="Input enam Digit Kode OTP"
									/>
								</Box>
							))}
						</Box>
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
							aria-label="Button request kode otp baru"
						>
							Kirim Kode Baru{" "}
						</Typography>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ py: 1.5, borderRadius: "8px", textTransform: "capitalize" }}
							disabled={formik.isSubmitting || !formik.isValid}
							role="button"
							aria-label="Button lanjutkan verifikasi kode otp lupa password"
						>
							Lanjutkan
						</Button>
					</Box>
				</form>
			</Paper>
			{/* <SuccesAlert message="" title="Login Berhasil"/> */}
		</>
	);
};

// export default VerifyOtpPage;
