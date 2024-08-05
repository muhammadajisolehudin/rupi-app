// TransferBerhasilPage.js
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ilustrasi from "../../../assets/img/complete ilustrasi.png";
import ModalTransferBerhasil from "../../../assets/components/Modal/ModalTransferBerhasil";
// import TransferModal from "./TransferModal"; // Import komponen modal

export const SuccesInfoBayar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const accountNumber = "992192925554";

    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                marginTop: "2rem",
                pb: 8,

            }}
        >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Transaksi Berhasil
            </Typography>
            <img
                src={ilustrasi}
                alt="Ilustrasi"
                style={{ width: "100%", maxWidth: "200px", height: "auto" }}
            />
            <Button
                onClick={handleOpen}
                sx={{
                    backgroundColor: "#0066AE",
                    py: 2,
                    px: 18,
                    borderRadius: "12px",
                    textTransform: "capitalize",
                    mt: 4,
                }}
                variant="contained"
            >
                Lihat Bukti Transfer
            </Button>

            <ModalTransferBerhasil
                open={open}
                handleClose={handleClose}
                accountNumber={accountNumber}
            />
        </Box>

    );
};
