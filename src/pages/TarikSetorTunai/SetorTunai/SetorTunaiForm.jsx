import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { CardAccountInfo } from "../../../assets/components/cardComponents/CardAccountInfo";

export const SetorTunaiForm = ({ onNext }) => {
    const formik = useFormik({
        initialValues: {},
        onSubmit: () => {
            const values = {
                accountNumber: "5667 2323 1444 5554",
                balance: 5000000,
                metode: ""
            };
            onNext(values);
        },
    });

    return (
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
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <Typography mt={0} pt={0}>Metode</Typography>
                        <TextField
                            aria-label="tambahkan nama token tarik tunai"
                            name="metode"
                            type="text"
                            id="metode"
                            placeholder="Tambahkan nama token tarik tunai"
                            autoComplete="current-nominal"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.metode}
                        />
                        {formik.touched.metode && formik.errors.metode ? (
                            <Typography sx={{ fontSize: 10, color: "red" }}>
                                {formik.errors.metode}
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
    );
};