import {
    Button,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImgPenerima from "../../../assets/img/user-rectangle.png";
import { CardAccountInfo } from "../../../assets/components/Cards/CardAccountInfo";
import PropTypes from "prop-types"
import { useAuthContext } from "../../../context/AuthContext";
import { useTransferRupiahContext } from "../../../context/TransferRupiahContext";
import { useAddTransferQris } from "../../../services/qris/add-transfer-qris";

export const KonfirmasiBayarForm = ({ onNext }) => {
    const { account } = useAuthContext()
    const { formData } = useTransferRupiahContext()

    const formik = useFormik({
        initialValues: {
            qris: formData.qris,
            amount: formData.amount,
            description: formData.description,
            pin: "",
        },
        validationSchema: Yup.object({
            amount: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            onNext(values)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={5} sx={{
                py: 6,
                px: 4,
            }}>
                <Grid item xs={12} p={0} m={0} >
                    <Typography sx={{ fontWeight: "bold" }}>Penerima</Typography>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                    // spacing={4}
                    >
                        <Grid item xs={1}>
                            <img
                                src={ImgPenerima}
                                alt="user-penerima-transfer"
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            ></img>
                        </Grid>
                        <Grid item xs={11} sx={{ pl: 3 }}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Nama Penerima
                            </Typography>
                            <Typography variant="caption">
                                Nama Bank - No rekenig 12345678
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} m={0} >
                    <hr
                        style={{
                            border: "1px solid #B3B3B3",
                        }}
                    />
                    <Grid
                        container
                        sx={{
                            display: "flex",
                            gap: 1,
                            mt: 3,
                        }}
                    // spacing={2}
                    >
                        <Grid
                            //   item
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between", // Corrected to 'space-between'
                                alignItems: "center", // Align items vertically centered
                            }}
                        >
                            <Typography sx={{ fontWeight: "bold" }}>
                                Nominal Transfer
                            </Typography>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Rp.{formik.values.amount}
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between", // Corrected to 'space-between'
                                alignItems: "center", // Align items vertically centered
                            }}
                        >
                            <Typography>Biaya Transfer </Typography>
                            <Typography sx={{ fontWeight: "bold" }}> Rp. </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <hr
                        style={{
                            border: "1px solid #B3B3B3",
                        }}
                    />
                    <Typography sx={{ mt: 3 }}>Sumber Rupiah</Typography>
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
                    <Typography sx={{ mt: 0, pt: 0 }}>Catatan Transfer</Typography>
                    <TextField
                        sx={{ width: "100%" }}
                        value={formik.values.description}
                        disabled
                        InputProps={{
                            readOnly: true, // Menambahkan properti readOnly untuk menampilkan sebagai teks
                        }}
                    />
                </Grid>
                <Grid item xs={12} mt={6}>
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


    );
};

KonfirmasiBayarForm.propTypes = {
 onNext : PropTypes.any
}