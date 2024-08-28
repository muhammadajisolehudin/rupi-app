import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetUserProfile } from "../../services/user/get-user-profile";
import { useEffect, useState } from "react";
import { ModalOtp } from "../../assets/components/Modals/ModalOtp";
import { useChangeUserPhone } from "../../services/user/change-user-phone";
import FailAlert from "../../assets/components/Alerts/FailAlert";
import SuccesAlert from "../../assets/components/Alerts/SuccesAlert";

export const UbahNoHandphoneContent = () => {
	const { data: dataProfile, refetch: refetchProfile } = useGetUserProfile();
	const [modalOpen, setModalOpen] = useState(false);
	const mutateChangePhone = useChangeUserPhone();
	const [verificationSuccess, setVerificationSuccess] = useState(false);

	const formik = useFormik({
		initialValues: {
			phone: "",
		},
		validationSchema: Yup.object({
			phone: Yup.number()
				.required("No Handphone Baru Diperlukan")
				.notOneOf(
					[Yup.ref(dataProfile?.phone)],
					"No Handphone Baru tidak boleh sama dengan No Handphone Saat Ini"
				),
		}),
		onSubmit: async (values) => {
			try {
				await mutateChangePhone.mutateAsync(values);
				setModalOpen(true);
			} catch (error) {
				return error;
			}
		},
	});

	// Reset form values to initial values
	const handleReset = () => {
		formik.resetForm({ values: formik.initialValues });
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const handleOtpVerified = () => {
		setVerificationSuccess(true);
		// Lakukan tindakan lain jika perlu, seperti menampilkan notifikasi
	};

	useEffect(() => {
		refetchProfile();
	}, [verificationSuccess]);

	return (
		<Container>
			<Box sx={{ my: 8, mx: 4 }}>
				<Typography variant="h4" sx={{ fontSize: "30px", fontWeight: 700 }}>
					Ubah No. Handphone
				</Typography>

				<form onSubmit={formik.handleSubmit}>
					<Grid item xs={12} sx={{ my: 4 }}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Typography id="" variant="body1" sx={{ width: "230px", mr: 2, fontSize: "15px" }}>
								No. Handphone Saat Ini
							</Typography>
							<TextField
								type="text"
								sx={{ bgcolor: "#EFEFEF" }}
								value={dataProfile?.phone}
								fullWidth
								disabled
								aria-labelledby=""
							></TextField>
						</Box>
					</Grid>
					<Grid item xs={12} sx={{ my: 4 }}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Typography id="phone" variant="body1" sx={{ width: "230px", mr: 2, fontSize: "15px" }}>
								No. Handphone Baru
							</Typography>
							<TextField
								type="text"
								placeholder="Masukkan Nomor Baru Anda"
								fullWidth
								name="phone"
								value={formik.values.phone}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.phone && Boolean(formik.errors.phone)}
								helperText={formik.touched.phone && formik.errors.phone}
								aria-labelledby="phone"
								aria-describedby="phone-helper-text"
								FormHelperTextProps={{
									id: "phone-helper-text",
								}}
							></TextField>
						</Box>
					</Grid>
					<Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", my: 3 }}>
						<Button
							type="reset"
							variant="outlined"
							onClick={handleReset}
							sx={{ py: 1, px: 4, borderRadius: 2, mr: 2, borderColor: "#B3B3B3", color: "#000" }}
							aria-label="Reset Form Button"
						>
							Batal
						</Button>
						<Button
							type="submit"
							variant="contained"
							sx={{
								py: 1,
								px: 7,
								borderRadius: 2,

								borderColor: "#B3B3B3",
								color: formik.dirty && formik.isValid ? "#white" : "#000",
								backgroundColor: formik.dirty && formik.isValid ? "#0066AE" : "#B3B3B3",
							}}
							disabled={!(formik.dirty && formik.isValid)}
							aria-label={
								formik.dirty && formik.isValid ? "Simpan Perubahan Form" : "Disabled Form Button"
							}
						>
							Simpan
						</Button>
					</Box>
				</form>
			</Box>
			<ModalOtp
				open={modalOpen}
				onClose={handleCloseModal}
				type="phone"
				onSuccess={handleOtpVerified}
			/>
			{mutateChangePhone.isError && (
				<FailAlert
					message={mutateChangePhone.error?.response?.data?.message || mutateChangePhone.error?.message}
					title="No Baru Gagal Didaftarkan"
				/>
			)}
			{verificationSuccess && <SuccesAlert message="" title="No Phone Berhasil Diganti" />}
		</Container>
	);
};
