import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetUserProfile } from "../../services/user/get-user-profile";
import { useEffect, useRef, useState } from "react";
import { useChangeUserProfile } from "../../services/user/change-user-profile";
import FailAlert from "../../assets/components/Alerts/FailAlert";
import SuccesAlert from "../../assets/components/Alerts/SuccesAlert";
import { useChangeUserEmail } from "../../services/user/change-user-email";
import { ModalOtp } from "../../assets/components/Modals/ModalOtp";

export const AkunContent = ({ onNext }) => {

	const { data: dataProfile, refetch: refetchProfile } = useGetUserProfile() 
	const [modalOpen, setModalOpen] = useState(false);
	const changeUserProfile = useChangeUserProfile()
	const changeUserEmail = useChangeUserEmail()
	const [verificationSuccess, setVerificationSuccess] = useState(false);

	const initialValuesRef = useRef({
		username: "",
		name: "",
		avatar: "",
		email: "",
	});

	const formik = useFormik({
		initialValues: {
			username: "",
			name: "",
			avatar: "",
			email: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Nama Panggilan diperlukan").max(15, "Nama Panggilan tidak boleh lebih dari 15 karakter"),
			email: Yup.string().email("Email tidak valid").required("Email diperlukan"),
		}),
		onSubmit: async (values) => {
			const formData = new FormData();

			if (values.name !== initialValuesRef.current.name) {
				formData.append('name', values.name);
				// formData.append('avatar', values.avatar);
				await changeUserProfile.mutateAsync(formData);
				console.log("ini data isSucces: ",changeUserProfile.isSuccess)
			}

			if (values.email !== initialValuesRef.current.email) {
				await changeUserEmail.mutateAsync({ email: values.email });
				setModalOpen(true);
			}
		},
	});

	useEffect(() => {
		if (dataProfile ) {
			formik.setValues({
				username: dataProfile?.username || "",
				name: dataProfile?.name || "",
				avatar: dataProfile?.avatar || "",
				email: dataProfile?.email || "",
			});
			initialValuesRef.current = {
				username: dataProfile?.username || "",
				name: dataProfile?.name || "",
				avatar: dataProfile?.avatar || "",
				email: dataProfile?.email || "",
			};
		}

		if (changeUserProfile.isSuccess || verificationSuccess || (changeUserProfile.isSuccess && verificationSuccess) ){
			refetchProfile()
		}

	}, [dataProfile, changeUserProfile.isSuccess, verificationSuccess]);


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

	// const handleOtpVerified = async (values) => {
	// 	// setModalOpen(false)


	// };

	return (
		<Container>
			<Box sx={{ my: 8, mx: 4 }}>
				<Typography variant="h4" sx={{ fontWeight: "bold", fontSize: "30px" }}>
					Akun Saya
				</Typography>

				<form onSubmit={formik.handleSubmit}>
					<Grid item xs={12} sx={{ my: 4 }}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Typography id="username" variant="body1" sx={{ width: "230px" }}>
								Username
							</Typography>
							<TextField
								type="text"
								sx={{ bgcolor: "#EFEFEF" }}
								value={formik.values.username}
								fullWidth
								disabled
								aria-labelledby="username"
							></TextField>
						</Box>
					</Grid>
					<Grid item xs={12} sx={{ my: 4 }}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Typography id="name" variant="body1" sx={{ width: "230px" }}>
								Nama
							</Typography>
							<TextField
								type="text"
								placeholder="Masukkan Nama Panggilan"
								fullWidth
								name="name"
								value={formik.values.name}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.name && Boolean(formik.errors.name)}
								helperText={formik.touched.name && formik.errors.name}
								aria-labelledby="name"
								aria-describedby="name-helper-text"
								FormHelperTextProps={{
									id: "name-helper-text",
								}}
							></TextField>
						</Box>
					</Grid>
					<Grid item xs={12} sx={{ my: 4 }}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Typography id="email" variant="body1" sx={{ width: "230px" }}>
								Email
							</Typography>
							<TextField
								type="text"
								placeholder="Masukkan Email Anda"
								fullWidth
								name="email"
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
								aria-labelledby="email"
								aria-describedby="email-helper-text"
								FormHelperTextProps={{
									id: "email-helper-text",
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
				type="email"
				onSuccess={handleOtpVerified}
				// onOtpVerified={handleOtpVerified(formik.values)}
			/>
			{(changeUserProfile.isError || changeUserEmail.isError) && (
				<FailAlert message={changeUserProfile.isError ? changeUserProfile?.error.response?.data?.message || changeUserProfile?.message : changeUserEmail?.error.response?.data?.message || changeUserEmail?.message } title={changeUserProfile.isError ? "Nama Panggilan Gagal Diubah" : "Email Gagal Diubah"} />
			)}
			{(changeUserProfile.isSuccess || verificationSuccess) &&  (
				<SuccesAlert message="" title={changeUserProfile.isSuccess ? "Nama Panggilan Berhasil Diubah" : "Email Berhasil Diubah"} />
			)}
		</Container>
	);
};
