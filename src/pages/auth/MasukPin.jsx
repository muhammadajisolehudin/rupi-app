import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import vektor from "../../assets/img/vector-bg.png";
import imgWallet from "../../assets/img/e-wallet-pana.png";
import checklistIcon from "../../assets/img/checklist-icon.png";

export default function MasukPin() {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [isPinCompleted, setIsPinCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (key === "Enter") {
        handleButtonClick();
      }

      if (key >= "0" && key <= "9") {
        const index = pin.findIndex((entry) => entry === "");
        if (index !== -1) {
          const newpin = [...pin];
          newpin[index] = key;
          setPin(newpin);
        }
      } else if (key === "Backspace") {
        // Find the first non-empty slot from the end of the array
        const index = pin
          .slice()
          .reverse()
          .findIndex((entry) => entry !== "");
        if (index !== -1) {
          const newpin = [...pin];
          // Calculate the correct index in the original array
          const originalIndex = pin.length - 1 - index;
          newpin[originalIndex] = "";
          setPin(newpin);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [pin]);

  const handleButtonClick = () => {
    const isPinComplete = pin.every((entry) => entry !== "");
    const pinValue = parseInt(pin.join(""), 10);
    if (isPinComplete) {
      // Navigate to MasukPin page or perform further actions
      setIsPinCompleted(true);
      console.log(pinValue);
      console.log("Navigate to MasukPin page");
      navigate("/dashboard");
    } else {
      // Handle case where PIN is not complete
      console.log("PIN is not complete");
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
                gap: 10,
                alignItems: "center",
                flexDirection: "column",
                width: 452,
                height: 617,
                my: "auto",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mx: "auto", mt: 10 }}
              >
                Masukkan PIN
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: 2,
                  mt: 5,
                }}
              >
                {[...Array(6)].map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      borderRadius: "50%",
                      bgcolor: pin[index] ? "#0066AE" : "#B3B3B3",
                      width: 30,
                      height: 30,
                    }}
                  />
                ))}
              </Box>
              <Button
                onClick={handleButtonClick}
                sx={{
                  backgroundColor: "#0066AE",
                  py: 2,
                  px: 18,
                  borderRadius: "12px",
                  textTransform: "capitalize",
                }}
                variant="contained"
              >
                Lanjutkan
              </Button>
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
