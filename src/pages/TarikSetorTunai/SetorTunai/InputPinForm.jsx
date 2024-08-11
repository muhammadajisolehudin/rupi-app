import { Button, Container, Grid, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import PinInput from "../../../assets/components/Inputs/PinInput";

export const InputPinForm = ({ onNext }) => {
    const formik = useFormik({
        initialValues: {
            destination_id: "",
            amount: "",
            description: "",
            type: "TRANSFER",
            pin: "",
            transaction_purpose: "",
        },
        validationSchema: Yup.object({
            pin: Yup.string()
                .length(6, "PIN harus terdiri dari 6 digit")
                .matches(/^\d+$/, "PIN harus berisi angka saja")
                .required("PIN diperlukan"),
        }),
        onSubmit: async (values) => {
            console.log("Form Submitted", values);
            onNext(values);
            // Call mutation function here if using useMutation
        },
    });

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;
            if (key === "Enter") {
                formik.handleSubmit();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [formik]);



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
                        <Typography id="pinLabel" variant="h5" sx={{ fontWeight: 600 }}>
                            Masukkan PIN
                        </Typography>
                        <PinInput
                            aria-labelledby="pinLabel"
                            aria-required="true"
                        />
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
                            aria-label="Lanjutkan ke langkah berikutnya"
                        >
                            Lanjutkan
                        </Button>
                    </Grid>
                </FormikProvider>
            </Grid>
        </Container>
        // <form onSubmit={formik.handleSubmit}>


    );
};