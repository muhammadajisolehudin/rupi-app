// import { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Layout } from "./layout";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
// import { CardHero } from "../assets/components/cardComponents/CardHero";
import { CardBalance } from "../assets/components/cardComponents/CardBalance";
// import { CardFinanceRecap } from "../assets/components/cardComponents/CardFinanceRecap";
// import { CardList } from "../assets/components/cardComponents/CardList";
import { Menu } from "../assets/components/dashboard/Menu";
// import { useGetAccountBank } from "../services/account/account-detail";
// import { useNavigate } from "react-router-dom";


export const BerandaPage = () => {
  // const navigate = useNavigate()
  // const [user, setUser] = useState("")
  
  // const { data : Account, isLoading, isError, error } = useGetAccountBank()
  

  // useEffect(() => {
  //   if (isLoading) {
  //     // Menunggu hingga data di-fetch
  //     return;
  //   }

  //   if (isError) {
  //     // Tangani kesalahan
  //     console.error("Error fetching account details:", error);
  //     if (error.response && error.response.status === 403) {
  //       navigate("/set-password");
  //     } else {
  //       // Mengatur user dengan data yang sesuai
  //       setUser(null); // Clear previous data
  //       console.log("Error fetching account details:", error.message);
  //     }
  //     return;
  //   }

  //   if (Account) {
  //     setUser(Account);
  //     console.log("Updated user data:", user);
  //   }

  // }, [isLoading, isError, error, Account, navigate, user]);

  // useEffect(() => {
  //   console.log("Updated user data:", user);
  // }, [user]);

  // if (isLoading) {
  //   // Menampilkan status loading saat data sedang di-fetch
  //   return <div>Loading...</div>;
  // }

  return (
    <Layout>
      <Container
        maxWidth={false}
        sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Grid container>
          <Grid item xs={12} lg={8}>
            {/* <CardHero /> */}
          </Grid>
          <Grid item xs={12} lg={4}>
            <CardBalance />
          </Grid>
        </Grid>

        <Grid container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Grid item xs={12} lg={8}>
            <Menu />
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* <CardFinanceRecap /> */}
          </Grid>
        </Grid>

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
        {/* <CardList /> */}
      </Container>
    </Layout>
  );
};
