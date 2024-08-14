import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Box,
	Button,
	Container,
	Grid,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export const InputPasswordForm = ({ onNext }) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const formik = useFormik({
		initialValues: {
			password: "",
		},
		validationSchema: Yup.object({
			password: Yup.string().required("Password Diperlukan"),
		}),
		onSubmit: async (values) => {
			console.log("Form Submitted", values);
			onNext(values);
		},
	});

	// Reset form values to initial values
	const handleReset = () => {
		formik.resetForm({ values: formik.initialValues });
	};

	return (
		<Container>
			<Grid
				container
				spacing={5}
				sx={{
					py: 6,
					px: 4,
					my: 2,
					mx: 2,
				}}
			>
				<FormikProvider value={formik}>
					<Typography variant="h4" sx={{ fontWeight: "bold", fontSize: "30px" }}>
						Ubah Password
					</Typography>

					<Grid
						xs={12}
						sx={{
							py: 8,
							px: 8,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 5,
						}}
					>
						<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
							<Typography id="password" variant="body1" sx={{ fontWeight: 400, mb: 8 }}>
								Masukkan Password
							</Typography>
							<TextField
								type={showPassword ? "text" : "password"}
								placeholder="Masukkan Password Anda"
								fullWidth
								name="password"
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}
								aria-labelledby="password"
								aria-describedby="password-helper-text"
								FormHelperTextProps={{
									id: "password-helper-text",
								}}
								InputProps={{
									style: { borderRadius: "8px", height: "4rem" },
									endAdornment: (
										<InputAdornment position="end">
											<IconButton aria-label="Button tampilkan password" onClick={handleClickShowPassword}>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
								sx={{ width: "596px" }}
							/>
						</Box>
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
								onClick={formik.handleSubmit}
								sx={{
									py: 1,
									px: 7,
									borderRadius: 2,
									mr: 2,
									borderColor: "#B3B3B3",
									color: formik.dirty && formik.isValid ? "#white" : "#000",
									backgroundColor: formik.dirty && formik.isValid ? "#0066AE" : "#B3B3B3",
								}}
								disabled={!(formik.dirty && formik.isValid)}
								aria-label={
									formik.dirty && formik.isValid ? "Lanjut Ganti Password" : "Password Tidak Valid"
								}
							>
								Lanjutkan
							</Button>
						</Box>
					</Grid>
				</FormikProvider>
			</Grid>
		</Container>
	);
};
