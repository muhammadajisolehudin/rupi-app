import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { useVerifyOtp } from "../../../services/auth/verify";
import FailAlert from "../../../assets/components/Alerts/FailAlert";
import SuccesAlert from "../../../assets/components/Alerts/SuccesAlert";

export const SetPasswordPage = () => {
	const { formData } = useAuthContext();
	const navigate = useNavigate();
	const verifyForgotPassword = useVerifyOtp();

	const formik = useFormik({
		initialValues: {
			type: formData.type,
			otp: formData.otp,
			username: formData.username,
			password: "",
			confirm_password: "",
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.min(8, "Minimal harus 8 karakter")
				.matches(/[a-z]/, "Kata sandi harus mengandung setidaknya satu huruf kecil")
				.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
				.matches(/[0-9]/, "Kata sandi harus mengandung setidaknya satu huruf besar")
				.matches(/[@$!%*?&#]/, "Kata sandi harus mengandung setidaknya satu karakter khusus")
				.required("Required"),
			confirm_password: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords harus cocok")
				.required("Required"),
		}),
		onSubmit: async (values) => {
			try {
				await verifyForgotPassword.mutateAsync(values);
				navigate("/login");
			} catch (error) {
				console.error("Login failed, error:", error); // Debug log
			}
		},
	});

	return (
		<>
			<Paper
				elevation={5}
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					gap: 2,
					alignItems: "center",
					flexDirection: "column",
					my: "auto",
					py: 6,
					px: 4,
				}}
			>
				{/* {!isPasswordCompleted ? ( */}
				{/* <> */}
				<Typography variant="h4" sx={{ fontWeight: 600, mx: "auto" }}>
					Buat Password Baru
				</Typography>
				<Typography variant="body1" sx={{ mx: "auto", mt: 2, textAlign: "center" }}>
					Password baru Anda harus berbeda dengan password yang digunakan sebelumnya.
				</Typography>
				<Box
					component="form"
					onSubmit={formik.handleSubmit}
					sx={{
						my: 1,
						mx: 1,
						// display: "flex",
						// flexDirection: "column",
					}}
				>
					<label htmlFor="password" style={{ justifyContent: "flex-start" }}>
						Password
					</label>
					<TextField
						margin="normal"
						required
						fullWidth
						id="password"
						name="password"
						type="password"
						autoComplete="new-password"
						placeholder="Masukan password baru"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						aria-label="Masukkan password baru"
						aria-required="true"
						aria-invalid={formik.touched.password && formik.errors.password ? "true" : "false"}
						aria-describedby="password-error"
						InputProps={{
							style: { borderRadius: "8px", height: "3rem" },
						}}
						autoFocus
					/>
					{formik.touched.password && formik.errors.password ? (
						<Typography id="password-error" variant="body2" sx={{ color: "red" }}>
							{formik.errors.password}
						</Typography>
					) : null}
					<label htmlFor="confirm_password" style={{ justifyContent: "flex-start" }}>
						Confirm Password
					</label>
					<TextField
						margin="normal"
						required
						fullWidth
						name="confirm_password"
						type="password"
						// type={showconfirm_password ? "text" : "confirm_password"}
						id="confirm_password"
						placeholder="Masuksn ulang password"
						autoComplete="current-confirm_password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.confirm_password}
						aria-label="Masukkan ulang password baru"
						aria-required="true"
						aria-invalid={
							formik.touched.confirm_password && formik.errors.confirm_password ? "true" : "false"
						}
						aria-describedby="confirm_password-error"
						InputProps={{
							style: { borderRadius: "8px", height: "3rem" },
						}}
						autoFocus
					/>
					{formik.touched.confirm_password && formik.errors.confirm_password ? (
						<Typography id="confirm_password-error" variant="body2" sx={{ color: "red" }}>
							{formik.errors.confirm_password}
						</Typography>
					) : null}

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 4, py: 1.5, borderRadius: "8px", textTransform: "capitalize" }}
						// disabled={mutation.isLoading}
						aria-label="Button lanjutkan buat password baru"
					>
						Lanjutkan
					</Button>
				</Box>
				{verifyForgotPassword.isError && (
					<FailAlert
						message={
							verifyForgotPassword?.error?.response?.data.message || verifyForgotPassword?.error.message
						}
						title="Login Gagal"
					/>
				)}
				{verifyForgotPassword.isSuccess && (
					<SuccesAlert message="" title="Password Baru Berhasil Dibuat" />
				)}
			</Paper>
		</>
	);
};
