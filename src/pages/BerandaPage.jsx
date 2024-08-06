import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import { Layout } from "./layout";

import { CardHero } from "../assets/components/cardComponents/CardHero";
import { CardBalance } from "../assets/components/cardComponents/CardBalance";
import { CardFinanceRecap } from "../assets/components/cardComponents/CardFinanceRecap";
import { CardList } from "../assets/components/cardComponents/CardList";
import { Menu } from "../assets/components/dashboard/Menu";

import backgroundWave from "../images/wave background.png";

export const BerandaPage = () => {
  return (
    <Layout>
      <Container
        maxWidth={false}
        sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Grid container sx={{ marginBottom: "40px" }}>
          <Grid item xs={12} lg={8}>
            <CardHero />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CardBalance />
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            position: "relative",
            marginLeft: "-25px",
            marginRight: "-25px",
            width: "calc(100% + 50px)",
            backgroundImage: `url(${backgroundWave})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        >
          <Grid item xs={12} lg={8}>
            <Menu />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CardFinanceRecap />
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
            sx={{
              color: "#1C1C1E",
              fontFamily: "Calibri",
              fontSize: "32px",
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
              "&:hover": {
                backgroundColor: "#0066AE",
                color: "white",
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
        <CardList />
      </Container>
    </Layout>
  );
};
