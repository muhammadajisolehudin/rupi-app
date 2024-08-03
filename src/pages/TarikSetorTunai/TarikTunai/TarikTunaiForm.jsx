import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CardAccountInfo } from "../../../assets/components/cardComponents/CardAccountInfo";
import NominalInput from "../../../assets/components/inputComponnet/NominalInput";

export const TarikTunaiForm = ({ onNext }) => {
    const formik = useFormik({
        initialValues: {
            amount: "",
            namaToken: "",
            accountNumber: "5667 2323 1444 5554",
            balance: 5000000,
        },
        validationSchema: Yup.object({
            amount: Yup.number().min(50000, "Nominal Tarik Tunai minimal IDR 50.000").required("Required"),
            namaToken: Yup.string().min(6, "Must be at least 6 characters"),
        }),
        onSubmit: (values) => {
            console.log(values)
            onNext(values);
        },
    });

    return (
        <>
            <Container>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={5} sx={{
                        py: 6,
                        px: 4,
                    }}>
                        <Grid item xs={12}>
                            <Typography>Rekening Tujuan</Typography>
                            <CardAccountInfo
                                accountNumber={"5667 2323 1444 5554"}
                                balance={5000000}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <NominalInput
                                text={"Nominal Bayar"}
                                value={formik.values.amount}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.amount && formik.errors.amount ? (
                                <Typography sx={{ fontSize: 10, color: "red", mt: 2 }}>
                                    {formik.errors.amount}
                                </Typography>
                            ) : (
                                <Typography sx={{ fontSize: 12, color: "grey", mt: 2 }}>
                                    Nominal Tarik Tunai minimal IDR 50.000
                                </Typography>
                            )}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <Typography mt={0} pt={0}>Beri Nama Token</Typography>
                            <TextField
                                aria-label="tambahkan nama token tarik tunai"
                                name="namaToken"
                                type="text"
                                id="namaToken"
                                placeholder="Tambahkan nama token tarik tunai"
                                autoComplete="current-nominal"
                                fullWidth
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.namaToken}
                            />
                            {formik.touched.namaToken && formik.errors.namaToken ? (
                                <Typography sx={{ fontSize: 10, color: "red" }}>
                                    {formik.errors.namaToken}
                                </Typography>
                            ) : null}
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mb: 5, py: 1.5, borderRadius: 2 }}
                            // disabled={mutation.isLoading}
                            >
                                Lanjutkan
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
};
