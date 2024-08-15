import { Box, Button, Card, Paper, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import checklistIcon from "../../../assets/img/checklist-icon.png";

import { useAuthContext } from "../../../context/AuthContext";

export const SuccesInfo = ({ tokenData }) => {
    const { account } = useAuthContext();
    const fullName = account.full_name;
    const accountNumber = account.account_number;

    const formatedAccountNumber = accountNumber ? accountNumber.replace(/(\d{4})(?=\d)/g, "$1 ") : "";

    const { token, expiredAt } = tokenData;

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    my: 4,
                    flexDirection: "column",
                }}
            >
                <img
                    src={checklistIcon}
                    alt="Icon Checklist"
                    style={{ margin: "10px", width: "136px", height: "136px" }}
                />
                <Typography sx={{ fontWeight: "bold" }} variant={"h6"}>
                    Uang Siap Disetor
                </Typography>
                <Typography sx={{ fontSize: "20px", color: "grey", mt: 2 }} aria-live="polite" aria-label="Tanggal dan waktu transaksi">
                    {new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })} . {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
                </Typography>
                <Typography sx={{ fontSize: "20px", color: "grey", mb: 2 }} aria-live="polite" aria-label="Nomor referensi">
                    No. Ref 12736192837636
                </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Card component={Paper} elevation={4} sx={{ width: "550px", px: 4, py: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box>
                            <Typography sx={{ fontSize: "12px", color: "grey" }}>Metode</Typography>
                            <Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0A3967" }}>
                                ATM BCA
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                            <Typography sx={{ fontSize: "12px", color: "grey" }}>Berlaku Hingga</Typography>
                            <Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0A3967" }}>
                                {new Date(expiredAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            my: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                bgcolor: "#E4EDFF",
                                p: 1,
                                width: "415px",
                            }}
                        >
                            <Typography>Kode Penyetoran</Typography>
                            <Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0066AE" }} aria-live="polite">
                                {token}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mt: 2,
                            color: "#B3B3B3",
                        }}
                    >
                        <Typography>Rekening Tujuan</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mt: 1,
                            color: "#0A3967",
                            gap: 1,
                        }}
                    >
                        <Typography sx={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            color: "#0A3967",
                        }}>{fullName}{" "}-{" "}
                            <span style={{
                                fontWeight: "400",
                            }}>
                                {formatedAccountNumber}
                            </span>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mt: 2,
                            color: "#0066AE",
                        }}
                    >
                        <ShareIcon aria-label="Share code icon" />
                        <Typography sx={{ ml: 1 }}>Bagikan Kode</Typography>
                    </Box>

                </Card>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 5 }}>
                <Button
                    fullWidth
                    sx={{
                        py: 1.5,
                        px: 18,
                        borderRadius: 3,
                        textTransform: "capitalize",
                        mt: 4,
                    }}
                    onClick={() => window.location.reload()}
                    aria-label="tombol buat token baru"
                    variant="contained"
                >
                    Buat Token Baru
                </Button>
            </Box>
        </>
    );
};