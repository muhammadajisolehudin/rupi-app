import React from "react";
import PropTypes from "prop-types";
import {
<<<<<<< HEAD
  Button,
  Container,
=======
  Box,
  Button,
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import imgTransactions from "../../img/Transaction-Icon.png";
import imgQR from "../../img/qr-code-Icon.png";
import imgTopUp from "../../img/top-up-Icon.png";
import imgMoney from "../../img/money-Icon.png";
import imgQris from "../../img/icons/QRIS-Icon.png";

const ReuseButton = ({ imgSrc, title, targetLink, ariaLabel }) => {
  return (
    <Button
      role="button"
      component="button"
      href={targetLink}
      aria-label={ariaLabel}
      sx={{
        textDecoration: "none",
        bgcolor: "#0066AE",
        display: "flex",
        alignItems: "center",
<<<<<<< HEAD
        mb: 2,
        justifyContent: "center",
        flexDirection: "column",
        gap: "24px",
        width: "auto",
        borderRadius: "10px",
        padding: "25px 20px",
        backgroundColor: "#0066AE",
        minHeight: "150px",
        p: 2,
        "&:hover": {
          backgroundColor: "#0066AE",
=======
        mb: 1.5,
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        width: "auto",
        borderRadius: "10px",
        padding: "25px 20px",
        minHeight: "150px",
        p: 2,
        "&:hover": {
          backgroundColor: "#0A3967",
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
        },
      }}
    >
      <img src={imgSrc} alt={title} />
      <Typography
<<<<<<< HEAD
        variant="h5"
        component="div"
        style={{ fontSize: "24px", color: "white" }}
=======
        // variant="h7"
        component="div"
        style={{ fontSize:"16px",color: "white" }}
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
      >
        {title}
      </Typography>
    </Button>
  );
};

ReuseButton.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  targetLink: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export const Menu = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            my: 3,
            color: "#1C1C1E",
            fontWeight: "400",
            letterSpacing: "0.15px",
          }}
        >
          {/* {" "} */}
          Mau Transaksi Apa Hari Ini?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <ReuseButton
              imgSrc={imgTransactions}
              title="Transfer Rupiah"
              targetLink="/transfer-rupiah"
              ariaLabel="Tombol Menu Transfer Rupiah, ini akan membawa Anda ke halaman Transfer Rupiah"
              role="button"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReuseButton
              imgSrc={imgTopUp}
              title="Mutasi Rekening"
              targetLink="/mutasi"
              ariaLabel="Tombol Menu Mutasi Rekening, ini akan membawa Anda ke halaman Mutasi Rekening"
              role="button"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReuseButton
              imgSrc={imgQris}
              targetLink="/qris"
              ariaLabel="Tombol Menu QRIS, ini akan membawa Anda ke halaman QRIS"
              role="button"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReuseButton
              imgSrc={imgQR}
              title="QR Terima Transfer"
              targetLink="/qr-terima-transfer"
              ariaLabel="Tombol Menu QR Terima Transfer, ini akan membawa Anda ke halaman QR Terima Transfer"
              role="button"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReuseButton
              imgSrc={imgMoney}
              title="Tarik & Setor Tunai"
              targetLink="/tarik-setor-tunai"
              ariaLabel="Tombol Menu Tarik & Setor Tunai, ini akan membawa Anda ke halaman Tarik & Set"
              role="button"
            />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};
