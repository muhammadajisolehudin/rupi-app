import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import BcaIcon from "../../../assets/img/icons/bcaIcon.png";
import PropTypes from "prop-types";
import { useAddDataRekening } from "../../../services/transfer-rupiah/add-rekening-baru";
import FailAlert from "../../../assets/components/Alerts/FailAlert";

export const RekeningBaruForm = ({ onNext }) => {
	const addRekening = useAddDataRekening();

	const formik = useFormik({
		initialValues: {
			account_number: "",
		},
		validationSchema: Yup.object({
			account_number: Yup.string().required("Nomber rekening harus diisi").
				matches(/^[0-9]+$/, "Nomor rekening harus berupa angka"),
		}),
		onSubmit: async (values) => {
			try {
				const response = await addRekening.mutateAsync(values);
				onNext(response.data.data);
			} catch (error) {
				console.error("Login failed, error:", error);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<Grid
				container
				spacing={5}
				sx={{
					py: 6,
					px: 4,
				}}
			>
				<Grid item xs={12} p={0} m={0}>
					<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
						<img src={BcaIcon} alt="Logo BCA" aria-hidden="true" />
					</Box>

					<Box role="form" onSubmit={formik.handleSubmit} width="100%" mt={2}>
						<TextField
							margin="normal"
							fullWidth
							id="account_number"
							name="account_number"
							type="number"
							autoComplete="off"
							placeholder="Masukkan Nomor Rekening"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.account_number}
							InputProps={{
								style: { borderRadius: "8px", height: "3rem" },
							}}
							autoFocus
							aria-label="Masukkan Nomor Rekening"
							aria-required="true"
						/>
						{formik.touched.account_number && formik.errors.account_number ? (
							<Typography id="account_number-error" variant="body2" sx={{ color: "red" }}>
								{formik.errors.account_number}
							</Typography>
						) : null}
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 4, mb: 5, py: 1.5, borderRadius: 2, textTransform: "none" }}
							aria-label="Lanjutkan Menyimpan Nomor Rekening"
						// disabled={mutation.isLoading}
						>
							Lanjutkan
						</Button>
					</Box>
				</Grid>
			</Grid>
			{addRekening.isError && (
				<FailAlert message={addRekening?.error?.response?.data?.message || addRekening?.error?.message} title="No Rekening tidak valid" />
			)}
		</form>
	);
};

RekeningBaruForm.propTypes = {
	onNext: PropTypes.any,
};
