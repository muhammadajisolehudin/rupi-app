import { useEffect, useState } from "react";
import {
  Box,
  Card,
  Paper,
  Button,
  IconButton,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import QRIcon from "../../assets/img/icons/qr-code-Icon.png";
import NoRiwayat from "../../assets/img/no-riwayat.png";
import FilterIcon from "../../assets/img/icons/Filter.png";
import { Layout } from "../layout";
import FilterModal from "../../assets/components/Modals/ModalFilter";
import { Breadcrumb } from "../../assets/components/Breadcrumbs/Breadcrumb";

import { useQRTransferHistory } from "../../services/qr-transfer/riwayat-qr-transfer";
import { useGetWaitingQRHistory } from "../../services/qr-transfer/riwayat-qr-menunggu";
import { formatExpiryDate } from "../../utils/utilities";

export const RiwayatTransfer = () => {
  const [currentView, setCurrentView] = useState("diterima");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const queryParams = { page: 1, size: 50, mutationType: 'QR' };
  const { data, isLoading, isError, error } = useQRTransferHistory(queryParams);

  const [transactionsGroupedByDate, setTransactionsGroupedByDate] = useState({});

  const transactionsData = data?.data?.results;

  const [params, setParams] = useState({
    page: 1,
    size: 10,
  });

  const { data: getWaitingQRHistory } = useGetWaitingQRHistory(params)

  // useEffect(() => {
  //   console.log("Data waiting QR history:", getWaitingQRHistory);
  // }, [getWaitingQRHistory]);

  useEffect(() => {
    if (transactionsData) {
      const grouped = transactionsData.reduce((groupedResult, transaction) => {
        const date = new Date(transaction.created_at).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
        if (!groupedResult[date]) {
          groupedResult[date] = [];
        }
        groupedResult[date].push(transaction);
        return groupedResult;
      }, {});
      setTransactionsGroupedByDate(grouped);
    }
  }, [transactionsData]);

  // if (isError) {
  //   return (
  //     <Typography
  //       color="error"
  //       variant="h6"
  //       component="h2"
  //       sx={{
  //         fontFamily: 'Calibri',
  //         fontSize: '24px',
  //         fontWeight: 700,
  //         lineHeight: '24px',
  //         letterSpacing: '0.15px',
  //         textAlign: 'center',
  //         marginTop: '3rem',
  //         marginBottom: '3rem',
  //       }}
  //     >
  //       {error.message}
  //     </Typography>
  //   );
  // }

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


    const transactionDates = Object.keys(transactionsGroupedByDate);

    if (currentView === "menunggu") {

      return (
        <>
          <Box>
            {getWaitingQRHistory?.results.length === 0 ? (
              <Box sx={{ textAlign: "center", my: 2 }}>
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
            ) : (
              <>
                {getWaitingQRHistory?.results.map((item) => (

                  <Box key={item.id} sx={{ display: 'flex', my: 2 }}>
                    <Box sx={{
                      // display: 'flex',
                      flexDirection: 'column',
                      mr: 2,
                      mt: 0.8
                    }}>
                      <img
                        src={QRIcon}
                        alt="QR Icon"
                        style={{ width: "24px", marginRight: "8px" }}
                      />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" sx={{ flexGrow: 1, mb: 0.5, fontWeight: "bold" }}>
                        Qr Terima Transfer
                        <br />
                      </Typography>
                      <Typography variant="body2" sx={{ flexGrow: 1 }}>
                        {formatExpiryDate(item.expired_at)}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{ fontWeight: "medium" }}
                    >
                      Rp. 1000
                    </Typography>
                  </Box>

                ))}
              </>
            )}
          </Box>
        </>
        


      );
    }

    return transactionDates.map((date) => (
      <>

        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          {date}
        </Typography>
        <Divider sx={{ mt: 4 }} />
        {transactionsGroupedByDate[date].map((transaction) => (
          <Box
            key={transaction.id}
            sx={{
              display: 'flex', my: 2

            }}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              mr: 2,
              mt: 0.8
            }}>
              <img
                src={QRIcon}
                alt="QR Icon"
                style={{ width: "24px", marginRight: "8px" }}
              />
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1" sx={{ flexGrow: 1, mb: 0.5, fontWeight: "bold" }}>
                Qr Terima Transfer
              </Typography>
              <Typography variant="body2" sx={{ flexGrow: 1, mb: 0.5 }}>
                {transaction.full_name}
              </Typography>
              <Typography variant="body2" sx={{ flexGrow: 1, mb: 0.5 }}>
                {transaction.account_number}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="primary"
              sx={{ fontWeight: "medium" }}
            >
              Rp {transaction.amount}
            </Typography>
          </Box>
        ))}
      </>
    ));
  };

  return (
    <Layout>
      {/* <Container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}> */}
      <Box sx={{ mx: 6, paddingTop: "1.5rem", pb: "4rem" }}>
        <Breadcrumb />
        {/* <Box sx={{  }}> */}
        <Card
          sx={{ mx: 2, mt: 6 }}
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
              gap: 5, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
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
            <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mb:2, position: "relative" }}>
              <Typography
                variant="body2"
                style={{ fontWeight: "bold", fontSize: "18pt" }}
              >
                Riwayat QR Terima Transfer
              </Typography>
              <Box sx={{ width: "100%", mt: 5 }}>
                {isLoading ? (
                  <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", my: 10 }}>
                    <CircularProgress />
                  </Box>

                ) : renderContent()}

              </Box>

            </Box>
            <Divider sx={{ mx: -6 }} />
            <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>

              <IconButton
                color="primary"
                aria-label="filter list"
                sx={{ display: "flex", alignItems: "center" }}
                onClick={handleOpenModal}
              >
                <img
                  src={FilterIcon}
                  alt="Filter"
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
    </Layout>
  );

}