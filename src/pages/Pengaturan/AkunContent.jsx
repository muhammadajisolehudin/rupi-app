import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetUserProfile } from "../../services/user/get-user-profile";
import { useEffect } from "react";

export const AkunContent = ({ onNext }) => {

	const { data: dataProfile } = useGetUserProfile() 
	console.log("pengaturan data:", dataProfile?.email)

	const formik = useFormik({
		initialValues: {
			username: "",
			name: "",
			email: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Nama Panggilan diperlukan").max(15, "Max 15 Karakter"),
			email: Yup.string().email("Email tidak valid").required("Email diperlukan"),
		}),
		onSubmit: async (values) => {
			const updatedValues = {};

			// Membandingkan nilai saat ini dengan nilai awal, dan hanya menyimpan nilai yang berubah
			if (values.name !== formik.initialValues.name) {
				updatedValues.name = values.name;
			}
			if (values.email !== formik.initialValues.email) {
				updatedValues.email = values.email;
			}
			console.log("submitted ", updatedValues);
		},
	});

	useEffect(() => {
		if (dataProfile ) {
			formik.setValues({
				username: dataProfile?.username || "",
				name: dataProfile?.name || "",
				email: dataProfile?.email || "",
			});
		}
	}, [dataProfile]);

	console.log("Initial Values:", formik.initialValues);

	// Reset form values to initial values
	const handleReset = () => {
		formik.resetForm({ values: formik.initialValues });
	};

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
								Nama Panggilan
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
		</Container>
	);
};
