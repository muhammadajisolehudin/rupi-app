import { Box, Card, Grid, Typography } from "@mui/material";
import QrisIcon from "../../../assets/img/icons/QRIS-Icon.svg"
import { useTransferContext } from "../../../context/TransferContext";
import { CardAccountInfo } from "../../../assets/components/Cards/CardAccountInfo";
import { useAuthContext } from "../../../context/AuthContext";



export const QrisMerchan = () => {
    const { formData } = useTransferContext()
    const { account } = useAuthContext()

    // const base64Image= formData.qris
    const imageSrc = `data:image/png;base64,${formData.qris}`;

    // console.log("", formData)


    return (

        <Box sx={{ mt: 5}}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb:-15 }}>
                <img src={QrisIcon} height={60} alt="QRIS Logo" />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    // gap: 3,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "calc(100vh)",
                }}
            >
                <Card
                    elevation={3}
                    sx={{
                        width: "100%",
                        maxWidth: "15rem",
                        borderRadius: 3,
                        height: "15rem",
                        display: "flex",
                        border: "1px solid #B3B3B3 ",
                    }}
                    aria-label="QRIS Code"
                    role="group"
                >
                    <img src={imageSrc}  style={{
                            objectFit: 'contain',  
                            margin: -20, 
                        }} alt="QR Code Merchant"/>

                </Card>
                <Box sx={{ width: "100%" }}>
                     <Typography sx={{ mt: 3 }} id="sumber-rupiah">
                    Sumber Rupiah
                </Typography>
                <CardAccountInfo
                        accountNumber={account.account_number}
                        balance={account.balance}
                        aria-labelledby="sumber-rupiah"
                    />
                </Box>
               
            </Box>
        </Box>

    );
};
