import { Button, Container, Grid, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import PinInput from "../../../assets/components/inputComponnet/PinInput";

export const InputPinForm = () => {
    const formik = useFormik({
        initialValues: {
            destination_id: "",
            amount: "",
            description: "",
            type: "TRANSFER",
            pin: ["", "", "", "", "", ""],
            transaction_purpose: "",
        },
        validationSchema: Yup.object({
            pin: Yup.array()
                .of(
                    Yup.string()
                        .matches(/^[0-9]+$/, "Must be a digit")
                        .length(1, "Must be 1 digit")
                )
                .required("PIN is required"),
        }),
        onSubmit: async (values) => {
            console.log("Form Submitted", values);
            // onNext(values);
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




    // const pinSchema = Yup.string()
    //     .length(6, "PIN harus terdiri dari 6 digit")
    //     .required("PIN diperlukan");

    // const handleButtonClick = () => {
    //     const pinValue = pin.join("");
    //     try {
    //         pinSchema.validateSync(pinValue);
    //         setError("");
    //         onSubmit({ pin: String(pinValue, 10) });
    //     } catch (validationError) {
    //         setError(validationError.message);
    //     }
    // };

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