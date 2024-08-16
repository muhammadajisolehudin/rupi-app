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
import { useChangeUserPassword } from "../../../services/user/change-user-password";
import FailAlert from "../../../assets/components/Alerts/FailAlert";
import SuccesAlert from "../../../assets/components/Alerts/SuccesAlert";
import { useTransferContext } from "../../../context/TransferContext";

export const UbahPasswordContent = ({ onSubmit }) => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setshowConfirmPassword] = useState(false);

	const mutateChangePassword = useChangeUserPassword()
	const { formData } = useTransferContext()
	const headers = {
		"X-SIGNATURE": formData.signature,
	};

	console.log("data baru ini lihat :", formData.signature)

	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleClickShowConfirmPassword = () => setshowConfirmPassword(!showConfirmPassword);

	const formik = useFormik({
		initialValues: {
			Password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			Password: Yup.string().required("Password Diperlukan").min(8, "Minimal harus 8 karakter"),
			confirmPassword: Yup.string()
				.required("Password Konfirmasi Diperlukan")
				.oneOf([Yup.ref("Password"), null], "Kedua Password Harus Cocok"),
		}),
		onSubmit: async (values) => {
			try {
				await mutateChangePassword.mutateAsync({ input: values, headers: headers })
			} catch (error) {
				return error
			}
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
								<Typography id="Password" variant="body1" sx={{ width: "230px", fontSize: "15px" }}>
									Password Baru
								</Typography>
								<TextField
									type={showPassword ? "text" : "password"}
									placeholder="Masukkan Password Baru Anda"
									fullWidth
									name="Password"
									value={formik.values.Password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.Password && Boolean(formik.errors.Password)}
									helperText={formik.touched.Password && formik.errors.Password}
									aria-labelledby="Password"
									aria-describedby="Password-helper-text"
									FormHelperTextProps={{
										id: "Password-helper-text",
									}}
									InputProps={{
										style: { borderRadius: "8px", height: "3rem" },
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="Button tampilkan password"
													onClick={handleClickShowPassword}
												>
													{showPassword ? <VisibilityOff /> : <Visibility />}
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
									id="confirmPassword"
									variant="body1"
									sx={{ width: "230px", fontSize: "15px" }}
								>
									Konfirmasi Password
								</Typography>
								<TextField
									type={showConfirmPassword ? "text" : "password"}
									placeholder="Masukkan Konfirmasi Password"
									fullWidth
									name="confirmPassword"
									value={formik.values.confirmPassword}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
									helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
									aria-labelledby="confirmPassword"
									aria-describedby="confirmPassword-helper-text"
									FormHelperTextProps={{
										id: "confirmPassword-helper-text",
									}}
									InputProps={{
										style: { borderRadius: "8px", height: "3rem" },
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="Button tampilkan password"
													onClick={handleClickShowConfirmPassword}
												>
													{showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
			{mutateChangePassword.isError && (
				<FailAlert message={mutateChangePassword?.response?.data?.message || mutateChangePassword?.message} title="Password Gagal Diubah" />
			)}
			{mutateChangePassword.isSuccess && (
				<SuccesAlert message="silahkan gunakan password baru" title="Password Baru Berhasil Dibuat" />
			)}
		</Container>
	);
};
