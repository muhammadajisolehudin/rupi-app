import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Container,
  Box,
  Grid,
  CssBaseline,
  Paper,
} from "@mui/material";
import imgTransactions from "../../img/Transaction-Icon.png";
import imgQR from "../../img/qr-code-Icon.png";
import imgTopUp from "../../img/top-up-Icon.png";
import imgMoney from "../../img/money-Icon.png";
import imgQris from "../../img/QRIS-Icon.png";

const ReuseCard = ({ imgSrc, title, targetLink }) => {
  return (
    <a href={targetLink} style={{ textDecoration: "none" }}>
      <Box
        component={Paper}
        elevation={5}
        sx={{
          bgcolor: "#0066AE",
          display: "flex",
          alignItems: "center",
          mb: 2,
          justifyContent: "center",
          flexDirection: "column",
          gap: "24px",
          width: "257px",
          borderRadius: "10px",
          padding: "25px 20px",
          backgroundColor: "#0066AE",
          minHeight: "150px",
          p: 2,
        }}
      >
        <img src={imgSrc} alt={title} />
        <Typography
          variant="h5"
          component="div"
          style={{ fontSize: "24px", color: "white" }}
        >
          {title}
        </Typography>
      </Box>
    </a>
  );
};

ReuseCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  targetLink: PropTypes.string.isRequired,
};

export const Menu = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ my: 2 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            my: 3,
            color: "#1C1C1E",
            fontSize: "28px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0.15px",
          }}
        >
          {" "}
          Mau Transaksi Apa Hari Ini?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <ReuseCard
              imgSrc={imgTransactions}
              title="Transfer Rupiah"
              targetLink="/transfer-rupiah"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReuseCard
              imgSrc={imgTopUp}
              title="Mutasi Rekening"
              targetLink="/mutasi"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReuseCard imgSrc={imgQris} targetLink="/qris" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReuseCard
              imgSrc={imgQR}
              title="QR Terima Transfer"
              targetLink="/QR-terima-transfer"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReuseCard
              imgSrc={imgMoney}
              title="Tarik & Setor Tunai"
              targetLink="/tarik-setor-tunai"
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
