import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useMutation } from "@tanstack/react-query";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton, InputAdornment } from "@mui/material";
// import { Navigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const defaultTheme = createTheme();

export default function SignInSide() {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: Yup.object({
			username: Yup.string().required("Required"),
			password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline>
				{/* Login konten */}
				<Container>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							component={Paper}
							elevation={5}
							square={false}
							sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "452px" }}
						>
							<Typography
								component="h1"
								variant="h4"
								sx={{ fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center", my: 5 }}
							>
								Login
							</Typography>
							<Box
								component="form"
								onSubmit={formik.handleSubmit}
								sx={{
									my: 1,
									mx: 8,
									display: "flex",
									flexDirection: "column",
								}}
							>
								<label htmlFor="username" style={{ justifyContent: "flex-start" }}>
									Username
								</label>
								<TextField
									margin="normal"
									required
									fullWidth
									id="username"
									name="username"
									type="text"
									autoComplete="username"
									placeholder="Masukkan Rupiah Id"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.username}
									InputProps={{
										style: { borderRadius: '8px', height:'3rem' }
									}}
									autoFocus
								/>
								{formik.touched.username && formik.errors.username ? (
									<Typography sx={{ fontSize: 10, color: "red" }}>{formik.errors.username}</Typography>
								) : null}
								<label htmlFor="password" style={{ justifyContent: "flex-start" }}>
									Password
								</label>
								<TextField
									margin="normal"
									required
									fullWidth
									name="password"
									type={showPassword ? "text" : "password"}
									id="password"
									placeholder="Masukkan Password"
									autoComplete="current-password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
									// belum muncul handle show pwd icon
									InputProps={{
										style: { borderRadius: '8px', height:'3rem' },
										endAdornment: (
											<InputAdornment position="end">
												<IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
													{showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										),
									}}
								/>
								{formik.touched.password && formik.errors.password ? (
									<Typography sx={{ fontSize: 10, color: "red" }}>{formik.errors.password}</Typography>
								) : null}
								<Grid container>
									<Grid item xs sx={{ mt: 1, mb: 2 }}>
										<Link href="#" variant="body2" style={{ textDecoration: "none" }}>
											Lupa ID/Password?
										</Link>
									</Grid>
								</Grid>
								<Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 5, py: 1.5, borderRadius:"8px" }}>
									Masuk
								</Button>
							</Box>
						</Box>
					</Box>
				</Container>
			</CssBaseline>
		</ThemeProvider>
	);
}
