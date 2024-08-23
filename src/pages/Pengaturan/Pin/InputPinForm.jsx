import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
// import PinInput from "../../../assets/components/Inputs/PinInput";
import PinInput from "../../../assets/components/Inputs/PinInput";
import FailAlert from "../../../assets/components/Alerts/FailAlert";
import SuccesAlert from "../../../assets/components/Alerts/SuccesAlert";
import { useVerifyUserPin } from "../../../services/user/verify-user-pin";

export const InputPinForm = ({ onNext }) => {
	
	const mutateVerifyPin = useVerifyUserPin()

	const formik = useFormik({
		initialValues: {
			pin: "",
		},
		validationSchema: Yup.object({
			pin: Yup.string()
				.length(6, "PIN harus terdiri dari 6 digit")
				.matches(/^\d+$/, "PIN harus berisi angka saja")
				.required("PIN diperlukan"),
		}),
		onSubmit: async (values) => {
			try {
				const result = await mutateVerifyPin.mutateAsync(values)
				onNext(result.data.data);
			} catch (error) {
				return error
			}
			
			
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
						Ubah PIN
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
							<Typography id="pinLabel" variant="h5" sx={{ fontWeight: 600, mb: 8 }}>
								Masukkan PIN
							</Typography>
							<Box
								aria-labelledby="pinLabel"
								sx={{
									border: 1,
									borderRadius: 2,
									py: 3,
									px: 10,
									borderColor: formik.handleChange && formik.dirty ? "#0066AE" : "#B3B3B3",
								}}
							>
								<PinInput
									aria-labelledby="pinLabel"
									aria-required="true"
									aria-describedby="pinLabel-error"
								/>
								{formik.touched.pin && formik.errors.pin && (
									<Typography id="pinLabel-error" color="error" sx={{ my: 2 }}>
										{formik.errors.pin}
									</Typography>
								)}
							</Box>
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
								aria-label={formik.dirty && formik.isValid ? "Lanjut Ganti Pin" : "Pin Belum Valid"}
							>
								Lanjutkan
							</Button>
						</Box>
					</Grid>
				</FormikProvider>
			</Grid>
			{mutateVerifyPin.isError && (
				<FailAlert message={mutateVerifyPin?.response?.data?.message || mutateVerifyPin?.message} title="Verifikasi Pin Gagal" />
			)}
			{mutateVerifyPin.isSuccess && (
				<SuccesAlert message="silahkan masukan pin baru" title="Ferivikasi Berhasil" />
			)}
		</Container>
	);
};
