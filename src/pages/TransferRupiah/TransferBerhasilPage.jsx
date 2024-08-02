// TransferBerhasilPage.js
import { useState } from "react";
import { Box, Button, Container, Typography, Card } from "@mui/material";
import { Layout } from "../layout";
import BreadcrumbsComponent from "../../assets/components/layoutsComponents/Breadcrumbs";
import ilustrasi from "../../assets/img/complete ilustrasi.png";
import { BreadcrumbsTranferRupiah } from "../../assets/components/layoutsComponents/BreadcrumbsTransferRupiah";
import ModalTransferBerhasil from "../../assets/components/Modal/ModalTransferBerhasil";
// import TransferModal from "./TransferModal"; // Import komponen modal

export const TransferBerhasilPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const accountNumber = "992192925554";

  return (
    <Layout>
      <Container sx={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}>
        <BreadcrumbsComponent />
        <Card sx={{ mt: 6, mb: 4 }}>
          <BreadcrumbsTranferRupiah />
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
        </Card>
      </Container>
    </Layout>
  );
};

export default TransferBerhasilPage;
