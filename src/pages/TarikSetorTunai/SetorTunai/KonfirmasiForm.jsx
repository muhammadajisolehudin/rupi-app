import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { CardAccountInfo } from "../../../assets/components/Cards/CardAccountInfo";
import logoIcon from "/logo.png";
import { useAuthContext } from "../../../context/AuthContext";

export const KonfirmasiForm = ({ onNext }) => {
    const { account } = useAuthContext()
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
                        <img src={logoIcon} alt="" style={{ marginRight: "5px" }} />
                        <Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
                            Rupi App
                        </Typography>
                    </Box>
                    <Typography variant={"h6"} sx={{ fontWeight: "bold" }} aria-label="konfirmasi tarik tunai">
                        Konfirmasi Tarik Tunai
                    </Typography>
                </Grid>
                <Grid item xs={12} mt={8}>
                    <hr
                        style={{
                            border: "1px solid #B3B3B3", marginBottom: "2rem"
                        }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }} aria-label="nominal penarikan">
                        <Typography sx={{
                            fontWeight: "400",
                            fontSize: "18px",
                        }}>Metode</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>ATM BCA</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <hr
                        style={{
                            border: "1px solid #B3B3B3"
                        }}
                    />
                    <Typography variant="h6" sx={{ mt: 5, fontSize: "18px" }} aria-label="sumber dana rupiah">
                        Rekening Tujuan
                    </Typography>
                    <CardAccountInfo accountNumber={account.account_number}
                        balance={account.balance} />
                    <hr
                        style={{
                            border: "1px solid #B3B3B3", marginTop: "4rem"
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
                            <Box sx={{ my: 3, color: "grey" }}>Token hanya valid selama 1 jam</Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mb: 1, py: 1.5, borderRadius: 2 }}
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