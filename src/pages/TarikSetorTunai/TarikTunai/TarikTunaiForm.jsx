import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CardAccountInfo } from "../../../assets/components/Cards/CardAccountInfo";
import NominalInput from "../../../assets/components/Inputs/NominalInput";
import { useAuthContext } from "../../../context/AuthContext";

export const TarikTunaiForm = ({ onNext }) => {
    const { account } = useAuthContext() 
    const formik = useFormik({
        initialValues: {
            amount: "",
        },
        validationSchema: Yup.object({
            amount: Yup.number().min(50000, "Nominal Tarik Tunai minimal IDR 50.000").required("Required"),
            namaToken: Yup.string().min(6, "Must be at least 6 characters"),
        }),
        onSubmit: (values) => {
            console.log(values)
            onNext({ nominal: values.amount, namaToken: values.namaToken });
        },
    });

    return (
        <>
            <Container>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={5} sx={{
                        py: 2,
                        px: 2,
                    }}>
                        <Grid item xs={12}>
                            <Typography variant="h6" sx={{ mt: 5, fontSize: "18px" }}>
                                Rekening Tujuan
                            </Typography>
                            <CardAccountInfo
                                accountNumber={account.account_number}
                                balance={account.balance}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <NominalInput
                                text={"Nominal Bayar"}
                                value={formik.values.amount}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="number"
                                onWheel={event => { event.preventDefault(); }}
                            />
                            {formik.touched.amount && formik.errors.amount ? (
                                <Typography sx={{ fontSize: 10, color: "red", mt: 2 }}>
                                    {formik.errors.amount}
                                </Typography>
                            ) : (
                                <Typography sx={{ fontSize: 12, color: "grey", mt: 2, fontStyle: "italic" }}>
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
                            <Typography mt={0} pt={0} sx={{ fontSize: "18px" }}>Beri Nama Token</Typography>
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
                                disabled={!formik.isValid}
                                aria-label="submit request tarik tunai form"
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
