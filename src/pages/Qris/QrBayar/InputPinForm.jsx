import { Button, Grid, Typography } from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import PinInput from "../../../assets/components/Inputs/PinInput";
import PropTypes from "prop-types"
import { useAddTransferQris } from "../../../services/qris/add-transfer-qris";
import { useTransferContext } from "../../../context/TransferContext";
import FailAlert from "../../../assets/components/Alerts/FailAlert";

export const InputPinForm = ({ onNext }) => {
    const { formData } = useTransferContext()
    const addTransferQris = useAddTransferQris()
    const formik = useFormik({
        initialValues: {
            qris: formData.qris,
            amount: formData.amount,
            description: formData.description,
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
                const result = await addTransferQris.mutateAsync(values)
                onNext(result);
            } catch (error) {
                return error
            }
           
            // Call mutation function here if using useMutation
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
                <PinInput />
                {formik.touched.pin && formik.errors.pin && (
                    <Typography color="error" sx={{ my: 2 }}>
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
            {addTransferQris.isError && (
                <FailAlert message={addTransferQris?.error.response.data.message || addTransferQris?.message} title="Transaksi Belum Berhasil" />
            )}
        </FormikProvider>
    );
};

InputPinForm.propTypes = {
	onNext: PropTypes.any,
};
