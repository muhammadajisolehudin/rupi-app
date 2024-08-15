import * as Yup from "yup";
import { Button, Container, Grid, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";

import PinInput from "../../../assets/components/Inputs/PinInput";

import { useGenerateTransactionToken } from "../../../services/tarik-setor-tunai/generate-token";

export const InputPinForm = ({ formData, onNext }) => {
    const { mutate: generateToken, isLoading, error } = useGenerateTransactionToken();

    console.log("formData in InputPinForm: ", formData);

    const formik = useFormik({
        initialValues: {
            amount: formData.amount,
            pin: "",
        },
        validationSchema: Yup.object({
            pin: Yup.string()
                .length(6, "PIN harus terdiri dari 6 digit")
                .matches(/^\d+$/, "PIN harus berisi angka saja")
                .required("PIN diperlukan"),
        }),
        onSubmit: async (values) => {
            console.log("Form Submitted", values);
            try {
                generateToken(
                    {
                        amount: values.amount,
                        type: "WITHDRAW",
                        pin: values.pin,
                    },
                    {
                        onSuccess: (response) => {
                            const token = response.data.data.code;
                            const expiredAt = response.data.data.expired_at;
                            const amount = response.data.data.amount;
                            console.log("Token, ExpiredAt, Amount: ", token, expiredAt, amount);
                            onNext({ tokenResponse: { token, expiredAt, amount } });
                            console.log("Token generated successfully: ", response);
                        },
                        onError: (err) => {
                            console.error("Error generating token:", err);
                        },
                    }
                );
            } catch (err) {
                console.error("Error in onSubmit:", err);
            }
        },
    });

    return (
        <Container>
            <Grid container spacing={5} sx={{
                py: 6,
                px: 4,
            }}>
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
                        {error && (
                            <Typography color="error" sx={{ my: 2 }}>
                                {error.message}
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
                            aria-label="submit pin"
                            disabled={isLoading}
                        >
                            Lanjutkan
                        </Button>
                    </Grid>
                </FormikProvider>
            </Grid>
        </Container>
    );
};
