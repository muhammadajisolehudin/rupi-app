import { Grid, Button, Typography } from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import PinInput from "../../../assets/components/Inputs/PinInput";
import PropTypes from "prop-types";
import { useAddTransaksiIntrabank } from "../../../services/transfer-rupiah/add-transaksi-intrabank";
import { useTransferContext } from "../../../context/TransferContext";
import FailAlert from "../../../assets/components/Alerts/FailAlert";

export const InputPinForm = ({ onNext }) => {
	const { formData } = useTransferContext();
	const transaksiIntrabank = useAddTransaksiIntrabank();

	const formik = useFormik({
		initialValues: {
			destination_id: formData.destination_id,
			amount: formData.amount,
			description: formData.description,
			type: formData.type,
			pin: "",
			transaction_purpose: formData.transaction_purpose,
		},
		validationSchema: Yup.object({
			pin: Yup.string()
				.length(6, "PIN harus terdiri dari 6 digit")
				.matches(/^\d+$/, "PIN harus berisi angka saja")
				.required("PIN diperlukan"),
		}),
		onSubmit: async (values) => {
			try {
				const response = await transaksiIntrabank.mutateAsync(values);
				onNext(response?.data.mutation_detail);
			} catch (error) {
				return error
			}
		},
	});

	return (
		<FormikProvider value={formik}>
			<Grid
				container
				sx={{
					py: 8,
					px: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 5,
				}}
			>
				<Typography variant="h5" sx={{ fontWeight: 600 }}>
					Masukkan PIN
				</Typography>
				<PinInput aria-describedby="errors-pin" />
				{formik.touched.pin && formik.errors.pin && (
					<Typography id="errors-pin" color="error" sx={{ my: 2 }}>
						{formik.errors.pin}
					</Typography>
				)}
				<Button
					onClick={formik.handleSubmit}
					fullWidth
					sx={{
						py: 1.5,
						px: 18,
						borderRadius: 3,
						textTransform: "none",
						mt: 4,
					}}
					variant="contained"
					aria-label="Lanjutkan Transfer"
				>
					Lanjutkan
				</Button>
			</Grid>
			{transaksiIntrabank.isError && (
				<FailAlert message={transaksiIntrabank.error?.response?.data?.message || transaksiIntrabank?.error?.message} title="Transfer Gagal" />
			)}
			{/* {isSuccess && (
				<SuccesAlert message="" title="Login Berhasil" />
			)} */}
		</FormikProvider>
	);
};

InputPinForm.propTypes = {
	onNext: PropTypes.func.isRequired,
};
