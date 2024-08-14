import { Box, Card, Typography, Button } from "@mui/material";
import buttonEnter from "../../img/icons/button enter.svg";
import pemasukanIcon from "../../img/icons/pemasukan.png";
import pengeluaranIcon from "../../img/icons/pengeluaran.png";
<<<<<<< HEAD
=======
import { formatBalance, getTotalTransaction } from "../../../utils/utilities";
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55

export const CardFinanceRecap = ({income, expense}) => {
  const neutral = "#FFFFFF";
  const green = "#12D79C";
  const red = "#CB3A31";

  return (
    <Box sx={{ width: "100%" }}>
      <Card
        sx={{
          display: "flex",
          padding: "40px 20px",
          flexDirection: "column",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#000",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "24px",
                marginBottom: "24px",
                letterSpacing: "0.15px",
              }}
            >
              Yuk! Tinjau Rekap Keuanganmu
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              Periode 1 Jul 2024 - 21 Jul 2024
            </Typography>
          </Box>
<<<<<<< HEAD
          <Box
            component="a"
            href="/saldo"
            aria-label="Tombol Saldo, ini akan membawa Anda ke halaman Saldo"
            role="button"
          >
            <Button sx={{ minWidth: "auto", padding: 0 }}>
              <img src={buttonEnter} alt="" style={{ width: "36px" }} />
=======
          <Box component="a" href="/info-saldo">
            <Button
              sx={{ minWidth: "auto", padding: 0 }}
              aria-label="Tombol Info Saldo, ini akan membawa Anda ke halaman Info Saldo"
            >
              <img src={buttonEnter} alt="" style={{ width: "28px" }} />
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
            </Button>
          </Box>
        </Box>

        <Card
          sx={{
            display: "flex",
            padding: "30px 50px",
            alignItems: "center",
            backgroundColor: green,
            marginBottom: "32px",
            borderRadius: "10px",
          }}
        >
          <img src={pemasukanIcon} alt="" style={{ width: "auto" }} />
          <Box sx={{ marginLeft: "32px" }}>
            <Typography
              variant="h6"
              sx={{
                color: neutral,
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0.15px",
                marginBottom: "8px",
              }}
            >
              Total Pemasukan
            </Typography>
            <Typography
              sx={{
                color: neutral,
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "24px",
                marginBottom: "8px",
                letterSpacing: "0.15px",
              }}
            >
              { formatBalance(income?.total_income) }
            </Typography>
            <Typography
              sx={{
                color: neutral,
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "0.15px",
              }}
            >
              {getTotalTransaction(income?.categories)} Kategori
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{
            display: "flex",
            padding: "30px 50px",
            alignItems: "center",
            backgroundColor: red,
            borderRadius: "10px",
          }}
        >
          <img src={pengeluaranIcon} alt="" style={{ width: "auto" }} />
          <Box sx={{ marginLeft: "32px" }}>
            <Typography
              variant="h6"
              sx={{
                color: neutral,
                fontWeight: 400,
                lineHeight: "24px",
                marginBottom: "8px",
                letterSpacing: "0.15px",
              }}
            >
              Total Pengeluaran
            </Typography>
            <Typography
              sx={{
                color: neutral,
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "24px",
                marginBottom: "8px",
                letterSpacing: "0.15px",
              }}
            >
              { formatBalance(expense?.total_expense) }
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: neutral,
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "0.15px",
              }}
            >
              {getTotalTransaction(expense?.categories)} Kategori
            </Typography>
          </Box>
        </Card>
      </Card>
    </Box>
  );
};