import { Button, Grid, Typography } from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import PinInput from "../../../assets/components/Inputs/PinInput";
import PropTypes from "prop-types"
import FailAlert from "../../../assets/components/Alerts/FailAlert";
import { useGenerateQrisCpmTransaction } from "../../../services/qris/generate-qris-cpm-transaction";

export const InputPinForm = ({ onNext }) => {
    // const addTransferQris = useAddTransferQris()
    const generateQris = useGenerateQrisCpmTransaction()
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
               
                const response = await generateQris.mutateAsync(values)
                console.log(response)
                onNext(response);
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
            {generateQris.isError && (
                <FailAlert message={generateQris?.error.response.data.message || generateQris?.message} title="Generate Qris Gagal" />
            )}
        </FormikProvider>
    );
};

InputPinForm.propTypes = {
	onNext: PropTypes.any,
};
