import React, { useState } from "react";
import {
  Box,
  Card,
  Paper,
  Button,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import QRIcon from "../../assets/img/icons/qr-code-Icon.png";
import NoRiwayat from "../../assets/img/no-riwayat.png";
import FilterIcon from "../../assets/img/icons/Filter.png";
import { Layout } from "../layout";
import FilterModal from "../../assets/components/Modals/ModalFilter";
import BreadcrumbsComponent from "../../assets/components/Breadcrumbs/Breadcrumbs";

export const QrRiwayatTransfer = () => {
  const [currentView, setCurrentView] = useState("diterima");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const transactions = {
    diterima: [
      { id: 1, name: "Dina Ali", amount: "Rp 20.000", date: "8 Juli 2024" },
      {
        id: 2,
        name: "Ali Imron",
        amount: "Rp 50.000",
        date: "15 Agustus 2024",
      },
      {
        id: 3,
        name: "Siti Aisyah",
        amount: "Rp 20.000",
        date: "22 September 2024",
      },
      {
        id: 4,
        name: "Budi Raharjo",
        amount: "Rp 75.000",
        date: "30 Desember 2024",
      },
      {
        id: 5,
        name: "Rina Maulina",
        amount: "Rp 100.000",
        date: "12 November 2024",
      },
      {
        id: 6,
        name: "Edi Suryanto",
        amount: "Rp 75.000",
        date: "1 Oktober 2024",
      },
    ],
    menunggu: [],
  };

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderContent = () => {
    const txns = transactions[currentView];
    if (txns.length === 0 && currentView === "menunggu") {
      return (
        <Box sx={{ textAlign: "center", p: 4 }}>
          <Typography
            variant="body2"
            style={{ fontWeight: "bold", fontSize: "18pt" }}
          >
            Riwayat QR Terima Transfer
          </Typography>
          <img
            src={NoRiwayat}
            alt="No Data"
            style={{ width: "300px", height: "300px", margin: "auto" }}
          />
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Hore! Saat ini tidak ada proses QR yang menunggu.
          </Typography>
          <Typography variant="body2">
            Status QR yang menunggu dengan nominal dan nama akan ditampilkan di
            sini.
          </Typography>
        </Box>
      );
    }
    return txns.map((transaction) => (
      <Box key={transaction.id} sx={{ pt: 4, px: 0 }}>
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          {transaction.date}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <img
            src={QRIcon}
            alt="QR Icon"
            style={{ width: "24px", marginRight: "8px" }}
          />
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            {transaction.name}
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            sx={{ fontWeight: "medium" }}
          >
            {transaction.amount}
          </Typography>
        </Box>
        
      </Box>
    ));
  };

  return (
    <Layout>
      {/* <Container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}> */}
      <Box sx={{ mx: 6, paddingTop: "1.5rem", pb: "4rem" }}>
        <BreadcrumbsComponent />
        {/* <Box sx={{  }}> */}
        <Card
          sx={{mx:2, mt:6 }}
          component={Paper}
          elevation={4}
        >
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              py: 2,
              px: 8,
              mb: 10,
              borderRadius: "4px 4px 0 0",
            }}
          >
            <Button
              sx={{
                backgroundColor:
                  currentView === "diterima" ? "#0066AE" : "transparent",
                color: currentView === "diterima" ? "#fff" : "grey",
                width: "50%",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor:
                    currentView === "diterima" ? "#005bb5" : "transparent",
                },
              }}
              onClick={() => handleNavigation("diterima")}
            >
              Diterima
            </Button>
            <Button
              sx={{
                backgroundColor:
                  currentView === "menunggu" ? "#0066AE" : "transparent",
                color: currentView === "menunggu" ? "#fff" : "grey",
                width: "50%",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor:
                    currentView === "menunggu" ? "#005bb5" : "transparent",
                },
              }}
              onClick={() => handleNavigation("menunggu")}
            >
              Menunggu
            </Button>
          </Card>
          {/* <Divider sx={{ my: 1 }} /> */}
          <Box sx={{ px: 6 }}>
            <Box sx={{ overflow: "auto", maxHeight: "calc(100vh - 180px)" }}>
              {renderContent()}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
              <IconButton
                color="primary"
                aria-label="filter list"
                sx={{ display: "flex", alignItems: "center" }}
                onClick={handleOpenModal}
              >
                <img
                  src={FilterIcon}
                  alt="QR Icon"
                  style={{ width: "15px", marginRight: "8px" }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    color: "#0066AE",
                    fontWeight: "bold",
                  }}
                >
                  Filter
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Card>
        <FilterModal open={isModalOpen} handleClose={handleCloseModal} />
      </Box>

      {/* </Box> */}

      {/* </Container> */}
    </Layout>
  );
};

// export default QRRiwayatTransfer;
