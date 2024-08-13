import { Grid, Button, Typography } from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import PinInput from "../../../assets/components/Inputs/PinInput";
import PropTypes from "prop-types";
import { useAddTransaksiIntrabank } from "../../../services/transfer-rupiah/add-transaksi-intrabank";
import { useTransferRupiahContext } from "../../../context/TransferRupiahContext";

export const InputPinForm = ({ onNext }) => {
	const { formData } = useTransferRupiahContext();
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
        await transaksiIntrabank.mutateAsync(values);
        onNext(values);
      } catch (error) {
        console.error("Error:", error);
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
						textTransform: "capitalize",
						mt: 4,
					}}
					variant="contained"
					aria-label="Lanjutkan Transfer"
				>
					Lanjutkan
				</Button>
			</Grid>
		</FormikProvider>
	);
};

InputPinForm.propTypes = {
	onNext: PropTypes.func.isRequired,
};
