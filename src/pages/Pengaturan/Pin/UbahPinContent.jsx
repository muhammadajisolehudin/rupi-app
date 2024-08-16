import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import PinInput from "../../../assets/components/Inputs/PinInput";
import PinKonfirmasi from "../../../assets/components/Inputs/PinKonfirmasi";
import { useChangeUserPin } from "../../../services/user/change-user-pin";
import FailAlert from "../../../assets/components/Alerts/FailAlert";
import SuccesAlert from "../../../assets/components/Alerts/SuccesAlert";
import { useTransferContext } from "../../../context/TransferContext";

export const UbahPinContent = (onSubmit) => {
	const mutateChangePin = useChangeUserPin()
	const { formData } = useTransferContext()
	const headers = {
		"X-SIGNATURE": formData.signature,
	};

	const formik = useFormik({
		initialValues: {
			pin: "",
			confirmPin: "",
		},
		validationSchema: Yup.object({
			pin: Yup.string()
				.length(6, "PIN baru harus terdiri dari 6 digit")
				.matches(/^\d+$/, "PIN baru harus berisi angka saja")
				.required("PIN baru diperlukan"),
			confirmPin: Yup.string()
				.oneOf([Yup.ref("pin"), null], "PIN dan Konfirmasi PIN harus sama")
				.required("Konfirmasi PIN diperlukan"),
		}),
		onSubmit: async (values) => {
			// const updatedValues = {};
			// if (values.pin === values.confirmPin) {
			// 	updatedValues.pinBaru = values.pin;
			// }
			try {
				await mutateChangePin.mutateAsync({input: values, headers : headers})
				// changePin({ params: { userId }, input: { pin: newPin } });
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
								<Typography id="confirmPin" variant="body1" sx={{ width: "230px" }}>
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
										aria-labelledby="confirmPin"
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
										{formik.touched.confirmPin && formik.errors.confirmPin && (
											<Typography id="confirmPin-error" color="error" sx={{ my: 2 }}>
												{formik.errors.confirmPin}
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
			{mutateChangePin.isError && (
				<FailAlert message={mutateChangePin?.response?.data?.message || mutateChangePin?.message} title="Pin Gagal Diubah" />
			)}
			{mutateChangePin.isSuccess && (
				<SuccesAlert message="silahkan gunakan pin baru" title="Pin Baru Berhasil Dibuat" />
			)}
		</Container>
	);
};
