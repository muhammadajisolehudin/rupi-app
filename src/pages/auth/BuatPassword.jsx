import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import vektor from "../../assets/img/vector-bg.png";
import imgWallet from "../../assets/img/e-wallet-pana.png";
import checklistIcon from "../../assets/img/checklist-icon.png";

export default function BuatPasswordBaru() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordCompleted, setIsPasswordCompleted] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (password && confirmPassword && password === confirmPassword) {
      setIsPasswordCompleted(true);
      setPasswordError("");
      console.log("Password successfully set");
      setTimeout(() => {
        navigate("/masuk-pin");
      }, 1500);
    } else {
      setPasswordError("Kedua password harus cocok");
      console.log("Passwords do not match or are empty");
    }
  };

  return (
    <>
      <CssBaseline />
      <Grid container style={{ width: "100%", height: "100vh" }}>
        <Grid item xs={6} sx={{ p: "3rem", paddingX: 22 }}>
          <img src="/logo-frame.png" alt="Logo" />
          <Box
            sx={{
              paddingY: 10,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={7}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: 2,
                alignItems: "center",
                flexDirection: "column",
                width: 452,
                height: 617,
                my: "auto",
                p: 4,
              }}
            >
              {!isPasswordCompleted ? (
                <>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 600, mx: "auto", mt: 2 }}
                  >
                    Buat Password Baru
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mx: "auto", mt: 2, textAlign: "center" }}
                  >
                    Password baru Anda harus berbeda dengan password yang
                    digunakan sebelumnya.
                  </Typography>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 4 }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    label="Konfirmasi Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {passwordError && (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{ mt: 1, textAlign: "left", width: "100%" }}
                    >
                      {passwordError}
                    </Typography>
                  )}
                  <Button
                    onClick={handleButtonClick}
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
                    Lanjutkan
                  </Button>
                </>
              ) : (
                <>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      mx: "auto",
                      mt: 10,
                      textAlign: "center",
                    }}
                  >
                    Password Anda Berhasil <br /> Dibuat
                  </Typography>
                  <img
                    style={{ width: 200, height: 200, marginTop: 10 }}
                    src={checklistIcon}
                    alt=""
                  />
                </>
              )}
            </Paper>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            backgroundColor: "#E4EDFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={vektor}
            alt="vektor"
            style={{ height: "15rem", width: "100%" }}
          />
          <img
            src={imgWallet}
            alt="img wallet"
            height={400}
            style={{ marginTop: "-5rem" }}
          />
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", marginTop: "10px" }}
          >
            Selamat datang di Rupi App
          </Typography>
          <Typography
            variant="body1"
            style={{ marginTop: "10px", textAlign: "center" }}
          >
            Cek saldo, transfer cepat dan aman, serta mutasi rekening bersama
            Rupi App. <br /> Semua jadi mudah dalam genggaman Anda!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
