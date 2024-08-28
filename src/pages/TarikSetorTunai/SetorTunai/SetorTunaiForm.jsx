import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { CardAccountInfo } from "../../../assets/components/Cards/CardAccountInfo";
import { useAuthContext } from "../../../context/AuthContext";

export const SetorTunaiForm = ({ onNext }) => {
    const { account } = useAuthContext()
    const formik = useFormik({
        initialValues: {
            metode: "ATM BCA"
        },
        onSubmit: (values) => {
            onNext(values);
        },
    });

    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={5} sx={{
                    py: 2,
                    px: 2,
                }}>
                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ mt: 5, fontSize: "18px" }}>Rekening Tujuan</Typography>
                        <CardAccountInfo
                            accountNumber={account.account_number}
                            balance={account.balance}
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
                        <Typography mt={0} pt={0} variant="h6" sx={{ fontSize: "18px" }}>Metode</Typography>
                        <Card variant="outlined" sx={{ marginBottom: 4, borderRadius: 2 }} role="region" aria-labelledby="method-info">
                            <Typography id="method-info" sx={{ backgroundColor: "white", padding: 2, borderColor: "#B3B3B3" }}>
                                ATM BCA
                            </Typography>
                        </Card>
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
                            sx={{ mb: 5, py: 1.5, borderRadius: 2, textTransform: "capitalize" }}
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