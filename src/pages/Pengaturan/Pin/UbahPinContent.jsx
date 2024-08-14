import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import PinInput from "../../../assets/components/Inputs/PinInput";
import PinKonfirmasi from "../../../assets/components/Inputs/PinKonfirmasi";

export const UbahPinContent = (onSubmit) => {
	const formik = useFormik({
		initialValues: {
			pin: "",
			pinKonfirmasi: "",
			pinLama: "123456",
		},
		validationSchema: Yup.object({
			pin: Yup.string()
				.length(6, "PIN baru harus terdiri dari 6 digit")
				.matches(/^\d+$/, "PIN baru harus berisi angka saja")
				.required("PIN baru diperlukan"),
			pinKonfirmasi: Yup.string()
				.oneOf([Yup.ref("pin"), null], "PIN dan Konfirmasi PIN harus sama")
				.required("Konfirmasi PIN diperlukan"),
		}),
		onSubmit: async (values) => {
			const updatedValues = {};
			if (values.pin === values.pinKonfirmasi) {
				updatedValues.pinBaru = values.pin;
			}
			console.log("submitted ", updatedValues);
		},
	});
	// Reset form values to initial values
	const handleReset = () => {
		formik.resetForm({ values: formik.initialValues });
	};

	return (
		<Container>
			<Box sx={{ my: 8 }}>
				<Typography variant="h4" sx={{ fontWeight: "bold", fontSize: "30px" }}>
					Ubah Pin
				</Typography>

				<FormikProvider value={formik}>
					<Box sx={{ mx: 7 }}>
						<Grid item xs={12} sx={{ my: 4 }}>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Typography id="pinBaru" variant="body1" sx={{ width: "230px" }}>
									Buat PIN Baru
								</Typography>
								<Box
									aria-labelledby="pinBaru"
									sx={{
										border: 1,
										borderRadius: 2,
										py: 2,
										px: 15,
										borderColor: formik.handleChange && formik.dirty ? "#0066AE" : "#B3B3B3",
									}}
								>
									<PinInput
										aria-labelledby="pinBaru"
										aria-required="true"
										aria-describedby="pinBaru-error"
									/>
									{formik.touched.pinBaru && formik.errors.pinBaru && (
										<Typography id="pinBaru-error" color="error" sx={{ my: 2 }}>
											{formik.errors.pinBaru}
										</Typography>
									)}
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sx={{ my: 4 }}>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Typography id="pinKonfirmasi" variant="body1" sx={{ width: "230px" }}>
									Konfirmasi PIN
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
									}}
								>
									<Box
										aria-labelledby="pinKonfirmasi"
										sx={{
											border: 1,
											borderRadius: 2,
											py: 2,
											px: 15,
											borderColor: formik.handleChange && formik.dirty ? "#0066AE" : "#B3B3B3",
										}}
									>
										<PinKonfirmasi
											aria-labelledby="pinKonfirmasi"
											aria-required="true"
											aria-describedby="pinKonfirmasi-error"
										/>
									</Box>
									<Box>
										{formik.touched.pinKonfirmasi && formik.errors.pinKonfirmasi && (
											<Typography id="pinKonfirmasi-error" color="error" sx={{ my: 2 }}>
												{formik.errors.pinKonfirmasi}
											</Typography>
										)}
									</Box>
								</Box>
							</Box>
						</Grid>
					</Box>

					<Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", my: 3, mx: 5 }}>
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
								color: formik.dirty ? "#white" : "#000",
								backgroundColor: formik.dirty ? "#0066AE" : "#B3B3B3",
							}}
							disabled={!formik.dirty}
							aria-label={formik.dirty ? "Simpan Perubahan Form" : "Disabled Form Button"}
						>
							Lanjutkan
						</Button>
					</Box>
				</FormikProvider>
			</Box>
		</Container>
	);
};
