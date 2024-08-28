import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import SuccesAlert from "../../../assets/components/Alerts/SuccesAlert";
import FailAlert from "../../../assets/components/Alerts/FailAlert";
import { useForgotPassword } from "../../../services/auth/forgot-password";

export const InputUsernamePage = ({ onNext }) => {
	// const navigate = useNavigate();
	// const { login, isLoading: isLoadingLogin, isSuccess: isSuccessLogin, error: errorLogin } = useAuthContext();
	const mutateForgotPassword = useForgotPassword();

	const formik = useFormik({
		initialValues: {
			username: "",
		},
		validationSchema: Yup.object({
			username: Yup.string().required("Username harus diisi"),
		}),
		onSubmit: async (values) => {
			try {
				await mutateForgotPassword.mutateAsync(values);
				onNext(values);
			} catch (error) {
				return error;
			}
		},
	});

	return (
		<>
			<Paper
				elevation={5}
				square={false}
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					my: "auto",
					py: 5,
					px: 4,
				}}
			>
				<Typography
					// component="h1"
					variant="h4"
					sx={{
						fontWeight: "bold",
						// fontSize: "32px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						mb: 4,
					}}
				>
					Lupa Password
				</Typography>
				<Typography sx={{ mb: 1 }}>
					Silakan masukkan username Anda, kami akan mengirimkan Kode OTP untuk membuat password baru.
				</Typography>
				<Box
					component="form"
					onSubmit={formik.handleSubmit}
					sx={{
						my: 1,
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
						placeholder="Masukkan Username"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.username}
						InputProps={{
							style: { borderRadius: "8px", height: "3rem" },
						}}
						autoFocus
						aria-required="true"
						aria-invalid={formik.touched.username && formik.errors.username ? "true" : "false"}
						aria-describedby="username-error"
						aria-label="Masukkan username"
					/>
					{formik.touched.username && formik.errors.username ? (
						<Typography id="username-error" variant="body2" sx={{ color: "red" }}>
							{formik.errors.username}
						</Typography>
					) : null}

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 2, py: 1.5, borderRadius: "8px", textTransform: "capitalize" }}
						disabled={mutateForgotPassword.isLoading}
						aria-label="Kirim laporan forgot password"
					>
						{mutateForgotPassword.isLoading ? "Logging in..." : "Kirim"}
					</Button>
					<Grid container>
						<Grid item xs sx={{ mt: 3, mb: 1, display: "flex", justifyContent: "center" }}>
							<Link
								to="/login"
								variant="body2"
								style={{ textDecoration: "none" }}
								role="button"
								aria-label="link untuk kembali ke halaman login"
							>
								Kembali Ke Login?
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Paper>
			{mutateForgotPassword.isError && (
				<FailAlert
					message={
						mutateForgotPassword.error?.response?.data?.message || mutateForgotPassword.error?.message
					}
					title="Pengiriman OTP Gagal"
				/>
			)}
			{mutateForgotPassword.isSuccess && (
				<SuccesAlert message="periksa WhatsApp mu" title="OTP Sudah Dikirim" />
			)}
		</>
	);
};
