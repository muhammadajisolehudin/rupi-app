import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { CardAccountInfo } from "../../../assets/components/Cards/CardAccountInfo";
import logoIcon from "/logo.png";

export const KonfirmasiForm = ({ onNext }) => {
    const formik = useFormik({
        initialValues: {},
        onSubmit: (values) => {
            onNext(values);
        },
    });

    return (

        <Container>
            <Grid container spacing={4} sx={{
                py: 6,
                px: 4,
            }}>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
                    <Box sx={{ display: "flex" }}>
                        <img src={logoIcon} alt="Logo RUpi App" style={{ marginRight: "5px" }} />
                        <Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
                            Rupi App
                        </Typography>
                    </Box>


                    <Typography variant={"h6"} sx={{ fontWeight: "bold" }} aria-label="konfirmasi setor tunai">
                        Konfirmasi Setor Tunai
                    </Typography>


                </Grid>

                <Grid item xs={12} mt={8}>
                    <hr
                        style={{
                            border: "1px solid #B3B3B3", marginBottom: "2rem"
                        }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }} aria-label="metode penyetoran">
                        <Typography id="metodeLabel">Metode</Typography>
                        <Typography aria-labelledby="metodeLabel" sx={{ fontWeight: "bold" }}>BCA</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <hr
                        style={{
                            border: "1px solid #B3B3B3"
                        }}
                    />
                    <Typography id="sumberRupiah" variant="h6" sx={{ mt: 5 }} aria-label="sumber dana rupiah">
                        Sumber Rupiah
                    </Typography>
                    <CardAccountInfo aria-labelledby="sumberRupiah" accountNumber={"5667 2323 1444 5554"} balance={5000000} />
                    <hr
                        style={{
                            border: "1px solid #B3B3B3", marginTop: "5rem"
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <form onSubmit={formik.handleSubmit}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                my: 5,
                            }}
                        >
                            <Box sx={{ my: 3, color: "grey" }} role="alert" aria-live="polite">
                                Token hanya valid selama 1 jam
                            </Box>
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
                        </Box>
                    </form>
                </Grid>


            </Grid>
        </Container>

    );
};