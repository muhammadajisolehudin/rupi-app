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

export const UbahPasswordContent = ({ onSubmit }) => {
	const [showPasswordBaru, setShowPasswordBaru] = useState(false);
	const [showPasswordKonfirmasi, setShowPasswordKonfirmasi] = useState(false);

	const handleClickShowPasswordBaru = () => setShowPasswordBaru(!showPasswordBaru);
	const handleClickShowPasswordKonfirmasi = () => setShowPasswordKonfirmasi(!showPasswordKonfirmasi);

	const formik = useFormik({
		initialValues: {
			passwordBaru: "",
			passwordKonfirmasi: "",
		},
		validationSchema: Yup.object({
			passwordBaru: Yup.string().required("Password Diperlukan").min(8, "Minimal harus 8 karakter"),
			passwordKonfirmasi: Yup.string()
				.required("Password Konfirmasi Diperlukan")
				.oneOf([Yup.ref("passwordBaru"), null], "Kedua Password Harus Cocok"),
		}),
		onSubmit: async (values) => {
			console.log("Form Submitted", values);
			onSubmit(values);
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
				}}
			>
				<FormikProvider value={formik}>
					<Box sx={{ mx: 7 }}>
						<Typography variant="h4" sx={{ fontWeight: "bold", fontSize: "30px" }}>
							Ubah Password
						</Typography>
						<Grid item xs={12} sx={{ my: 4 }}>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Typography id="passwordBaru" variant="body1" sx={{ width: "230px", fontSize: "15px" }}>
									Password Baru
								</Typography>
								<TextField
									type={showPasswordBaru ? "text" : "password"}
									placeholder="Masukkan Password Baru Anda"
									fullWidth
									name="passwordBaru"
									value={formik.values.passwordBaru}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.passwordBaru && Boolean(formik.errors.passwordBaru)}
									helperText={formik.touched.passwordBaru && formik.errors.passwordBaru}
									aria-labelledby="passwordBaru"
									aria-describedby="passwordBaru-helper-text"
									FormHelperTextProps={{
										id: "passwordBaru-helper-text",
									}}
									InputProps={{
										style: { borderRadius: "8px", height: "3rem" },
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="Button tampilkan password"
													onClick={handleClickShowPasswordBaru}
												>
													{showPasswordBaru ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										),
									}}
									sx={{ width: "30em" }}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} sx={{ my: 4 }}>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Typography
									id="passwordKonfirmasi"
									variant="body1"
									sx={{ width: "230px", fontSize: "15px" }}
								>
									Konfirmasi Password
								</Typography>
								<TextField
									type={showPasswordKonfirmasi ? "text" : "password"}
									placeholder="Masukkan Konfirmasi Password"
									fullWidth
									name="passwordKonfirmasi"
									value={formik.values.passwordKonfirmasi}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.passwordKonfirmasi && Boolean(formik.errors.passwordKonfirmasi)}
									helperText={formik.touched.passwordKonfirmasi && formik.errors.passwordKonfirmasi}
									aria-labelledby="passwordKonfirmasi"
									aria-describedby="passwordKonfirmasi-helper-text"
									FormHelperTextProps={{
										id: "passwordKonfirmasi-helper-text",
									}}
									InputProps={{
										style: { borderRadius: "8px", height: "3rem" },
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="Button tampilkan password"
													onClick={handleClickShowPasswordKonfirmasi}
												>
													{showPasswordKonfirmasi ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										),
									}}
									sx={{ width: "30em" }}
								/>
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
								onClick={formik.handleSubmit}
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
									formik.dirty && formik.isValid ? "Lanjut Ganti Password" : "Password Tidak Valid"
								}
							>
								Lanjutkan
							</Button>
						</Box>
					</Box>
				</FormikProvider>
			</Grid>
		</Container>
	);
};
