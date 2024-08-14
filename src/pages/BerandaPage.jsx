import { Box, Button, Grid, Typography } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import { Layout } from "./layout";

import { CardHero } from "../assets/components/Cards/CardHero";
import { CardBalance } from "../assets/components/Cards/CardBalance";
import { CardFinanceRecap } from "../assets/components/Cards/CardFinanceRecap";
import { CardList } from "../assets/components/Cards/CardList";
import { Menu } from "../assets/components/dashboardComponents/Menu";

import backgroundWave from "../assets/img/wave background.png";
import { useAuthContext } from "../context/AuthContext";
import { useTransferRupiahContext } from "../context/TransferRupiahContext";
import { useEffect, useState } from "react";



export const BerandaPage = () => {
  const { account } = useAuthContext();
  const { dataExpense, dataIncome, dataTransaksi } = useTransferRupiahContext();
  const [ dataTransaksiFavorite, setDataFavorite ] = useState(null)

  useEffect(() => {
    if (dataTransaksi) {
        setDataFavorite(dataTransaksi.filter((item) => item.favorites))
    }
  }, [dataTransaksi]);

  return (
    <Layout>
      <Box
        // maxWidth={false}
        sx={{ paddingTop: "2rem", paddingBottom: "2rem", mx:6 }}
      >
        <Grid container sx={{ mb: 4 }} spacing={3.5}>
          <Grid item xs={12} md={12} lg={7.5}>
            <CardHero user={account} />
          </Grid>
          <Grid item xs={12} lg={4.5}>
            <CardBalance user={account} />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3.5}
          sx={{
            mt: "2rem",
            pb: "2rem",
            paddingLeft: 5,
            paddingRight: 6,
            position: "relative",
            marginLeft: "-4rem",  
            // marginRight: "-2rem", 
            width: "calc(100% + 7rem)", // Total lebar termasuk padding kiri dan kanan
            backgroundImage: `url(${backgroundWave})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        >
          <Grid item xs={12} lg={7.5}>
            <Menu />
          </Grid>
          <Grid item xs={12} lg={4.5}>
            <CardFinanceRecap income={dataIncome} expense={dataExpense}/>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "80px",
            marginBottom: "40px",
          }}
        >
          <Typography
          variant="h4"
            sx={{
              color: "#1C1C1E",
              fontFamily: "Calibri",
              fontWeight: 400,
              lineHeight: "40px",
              letterSpacing: "-0.75px",
            }}
          >
            Transaksi Favorit
          </Typography>
          <Button
            sx={{
              backgroundColor: "#0066AE",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              '&:hover': {
                backgroundColor: '#0A3967',
              },
            }}
            aria-label="Tombol Lihat Semua Transaksi, ini akan membawa Anda ke halaman transaksi"
            role="button"
          >
            <Typography
              variant="body2"
              sx={{
                textTransform: "none",
                fontFamily: "Calibri",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "-0.15px",
              }}
            >
              Lihat Semua
            </Typography>
            <ChevronRightRoundedIcon />
          </Button>
        </Box>
        <CardList cardData={dataTransaksiFavorite} />
      </Box>
    </Layout>
  );
};