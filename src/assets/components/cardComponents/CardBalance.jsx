import { Box, Card, CardContent, Typography, Button } from "@mui/material";

import buttonEnter from "../../../icons/button enter.svg";
import arrowDownIcon from "../../../icons/arrow down.png";
import copyIcon from "../../../icons/copy.png";
import showIcon from "../../../icons/show.png";
import creditCardBlack from "../../../images/credit card black.png";

export const CardBalance = () => {
  const lightBlue = "#EDF4FF";
  const darkBlue = "#0A3967";
  const blue = "#0066AE";
  const neutral = "#FFF";

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "9px 30px",
          backgroundColor: lightBlue,
          marginBottom: "24px",
          borderRadius: "10px",
        }}
        aria-label="Informasi saldo pengguna"
      >
        <Typography sx={{ color: darkBlue, fontSize: "20px", fontWeight: 700 }}>
          Info Saldo
        </Typography>
        <Box component="a" href="/saldo">
          <Button
            sx={{ minWidth: "auto", padding: 0 }}
            aria-label="Tombol Info Saldo, ini akan membawa Anda ke halaman Saldo"
          >
            <img src={buttonEnter} alt="" style={{ width: "28px" }} />
          </Button>
        </Box>
      </Box>
      <Card
        sx={{
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent
          sx={{
            position: "absolute",
            margin: 0,
            zIndex: 1,
            overflow: "hidden",
            padding: "26px 35px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: neutral,
            width: "86%",
            height: "100%",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            aria-label="Informasi rekening pengguna dan tombol salin"
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: blue,
                  fontSize: "20px",
                  fontWeight: 500,
                  marginBottom: 0,
                  marginRight: "8px",
                }}
              >
                Rekening 123-456-7890
              </Typography>
              <img
                src={arrowDownIcon}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
            </Box>
            <Button
              sx={{ minWidth: "auto", padding: 0 }}
              aria-label="Tombol Salin, ini akan menyalin nomor rekening pengguna"
            >
              <img src={copyIcon} alt="" style={{ width: "24px" }} />
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            aria-label="Informasi saldo pengguna saat ini dan tombol tampilkan"
          >
            <Typography
              sx={{
                color: darkBlue,
                fontSize: "32px",
                fontWeight: 500,
                marginBottom: 0,
              }}
              aria-label="Saldo pengguna saat ini"
            >
              IDR <span style={{ fontWeight: 700 }}>5.000.000</span>
            </Typography>
            <Button
              sx={{ minWidth: "auto", padding: 0 }}
              aria-label="Tombol Tampilkan, ini akan menampilkan saldo pengguna"
            >
              <img
                src={showIcon}
                alt=""
                style={{ width: "32px", height: "32px" }}
              />
            </Button>
          </Box>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            borderRadius: "10px",
          }}
        >
          <img src={creditCardBlack} alt="" style={{ borderRadius: "10px" }} />
        </Box>
      </Card>
    </>
  );
};
