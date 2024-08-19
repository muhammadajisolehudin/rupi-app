import { Box, Button, Card, Paper, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import checklistIcon from "../../../assets/img/checklist-icon.png";
import { useQrContext } from "../../../context/QrContext";

export const SuccesInfo = () => {
    // const { token, expiredAt, amount } = tokenData;
    const { formDataTarik } = useQrContext()

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
                    alt="checklist icon"
                    style={{ margin: "10px", width: "136px", height: "136px" }}
                />
                <Typography sx={{ fontWeight: "bold" }} variant={"h6"}>
                    Uang Siap Ditarik
                </Typography>
                <Typography sx={{ fontSize: "20px", color: "grey", mt: 2 }}>
                    {new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })} . {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
                </Typography>
                <Typography sx={{ fontSize: "20px", color: "grey", mb: 2 }}>No. Ref 12736192837636</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Card component={Paper} elevation={4} sx={{ width: "550px", px: 4, py: 3, borderRadius: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box>
                            <Typography sx={{ fontSize: "12px", color: "grey" }}>Nominal</Typography>
                            <Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0A3967" }}>
                                Rp {formDataTarik?.amount.toLocaleString('id-ID')}
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                            <Typography sx={{ fontSize: "12px", color: "grey" }}>Berlaku Hingga</Typography>
                            <Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0A3967" }}>
                                {new Date(formDataTarik?.expired_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            my: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space",
                                bgcolor: "#E4EDFF",
                                py: 1,
                                px: 3,
                                width: "100%",
                            }}
                        >
                            <Typography sx={{ width:"500%" }}>
                                Kode Penarikan
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0066AE", width: "500%", pl:3}}>
                                {formDataTarik?.code}
                            </Typography>
                        </Box>
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
                        <ShareIcon />
                        <Typography sx={{ ml: 1 }}>Bagikan Kode</Typography>
                    </Box>
                </Card>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 5, px:10 }}>
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
                    aria-label="button make new token"
                    variant="contained"
                >
                    Buat Token Baru
                </Button>
            </Box>
        </>
    );
};