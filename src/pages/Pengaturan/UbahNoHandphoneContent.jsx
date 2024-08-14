import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const UbahNoHandphoneContent = () => {
	const formik = useFormik({
		initialValues: {
			nomorLama: "081273823766",
			nomorBaru: "",
		},
		validationSchema: Yup.object({
			nomorBaru: Yup.number()
				.required("No Handphone Baru Diperlukan")
				.notOneOf(
					[Yup.ref("nomorLama")],
					"No Handphone Baru tidak boleh sama dengan No Handphone Saat Ini"
				),
		}),
		onSubmit: async (values) => {
			const updatedValues = {};
			updatedValues.nomorBaru = values.nomorBaru;
			console.log("submitted ", updatedValues);
		},
	});

	// Reset form values to initial values
	const handleReset = () => {
		formik.resetForm({ values: formik.initialValues });
	};

	return (
		<Container>
			<Box sx={{ my: 8, mx: 4 }}>
				<Typography variant="h4" sx={{ fontSize: "30px", fontWeight: 700 }}>
					Ubah No. Handphone
				</Typography>

				<form onSubmit={formik.handleSubmit}>
					<Grid item xs={12} sx={{ my: 4 }}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Typography id="nomorLama" variant="body1" sx={{ width: "230px", mr: 2, fontSize: "15px" }}>
								No. Handphone Saat Ini
							</Typography>
							<TextField
								type="text"
								sx={{ bgcolor: "#EFEFEF" }}
								value={formik.values.nomorLama}
								fullWidth
								disabled
								aria-labelledby="nomorLama"
							></TextField>
						</Box>
					</Grid>
					<Grid item xs={12} sx={{ my: 4 }}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Typography id="nomorBaru" variant="body1" sx={{ width: "230px", mr: 2, fontSize: "15px" }}>
								No. Handphone Baru
							</Typography>
							<TextField
								type="text"
								placeholder="Masukkan Nomor Baru Anda"
								fullWidth
								name="nomorBaru"
								value={formik.values.nomorBaru}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.nomorBaru && Boolean(formik.errors.nomorBaru)}
								helperText={formik.touched.nomorBaru && formik.errors.nomorBaru}
								aria-labelledby="nomorBaru"
								aria-describedby="nomorBaru-helper-text"
								FormHelperTextProps={{
									id: "nomorBaru-helper-text",
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
