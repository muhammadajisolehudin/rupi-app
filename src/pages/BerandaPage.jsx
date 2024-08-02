import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Layout } from "./layout";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { CardHero } from "../assets/components/cardComponents/CardHero";
import { CardBalance } from "../assets/components/cardComponents/CardBalance";
import { CardList } from "../assets/components/cardComponents/CardList";
import { InfoSaldo } from "../assets/components/dashboard/InfoSaldo";
import { Menu } from "../assets/components/dashboard/Menu";

export const BerandaPage = () => {
  return (
    <Layout>
      <Container
        maxWidth={false}
        sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Grid container>
          <Grid item xs={12} lg={7}>
            <CardHero />
          </Grid>
          <Grid item xs={12} lg={5}>
            <CardBalance />
          </Grid>
        </Grid>
      </Container>

      <InfoSaldo />
      <Menu />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        <Typography> Transaksi Favorit</Typography>
        <Button sx={{ backgroundColor: "#0066AE", color: "white" }}>
          <Typography variant="body2" sx={{ textTransform: "none" }}>
            Lihat Semua
          </Typography>
          <ChevronRightRoundedIcon />
        </Button>
      </Box>
      <CardList />
    </Layout>
  );
};
