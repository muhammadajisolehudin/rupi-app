import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { CardAccountInfo } from "../../../assets/components/Cards/CardAccountInfo";

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
                        <Typography id="rekeningTujuanLabel">Rekening Tujuan</Typography>
                        <CardAccountInfo
                            accountNumber={"5667 2323 1444 5554"}
                            balance={5000000}
                            aria-labelledby="rekeningTujuanLabel"
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
                        <Typography id="metodeLabel" mt={0} pt={0}>Metode</Typography>
                        <TextField
                            aria-labelledby="metodeLabel"
                            aria-label="tambahkan metode setor tunai"
                            name="metode"
                            type="text"
                            id="metode"
                            placeholder="Tambahkan metode setor tunai"
                            autoComplete="current-nominal"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.metode}
                        />
                        {formik.touched.metode && formik.errors.metode ? (
                            <Typography sx={{ fontSize: 10, color: "red" }} aria-live="assertive">
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
                            aria-label="Lanjutkan ke langkah berikutnya"
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