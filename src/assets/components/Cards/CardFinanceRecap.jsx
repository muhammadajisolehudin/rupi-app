import { Box, Card, Typography, Button } from "@mui/material";
import buttonEnter from "../../img/icons/button enter.svg";
import pemasukanIcon from "../../img/icons/pemasukan.png";
import pengeluaranIcon from "../../img/icons/pengeluaran.png";
import { formatDate, formatRupiah, getTotalTransaction } from "../../../utils/utilities";
import { useEffect, useState } from "react";

export const CardFinanceRecap = ({income, expense}) => {
  const neutral = "#FFFFFF";
  const green = "#12D79C";
  const red = "#CB3A31";

  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });

  useEffect(() => {
    const updateDateRange = () => {
      const today = new Date();
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      // const endOfMonth = today; // Tanggal hari ini
      setDateRange({
        startDate: startOfMonth,
        endDate: today
      });
    };

    updateDateRange();

    // Update date range at the start of each month
    const handleMonthChange = () => {
      const now = new Date();
      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const timeToNextMonth = nextMonth - now;
      setTimeout(() => {
        updateDateRange();
        handleMonthChange(); // Recursively call to ensure updates
      }, timeToNextMonth);
    };

    handleMonthChange(); // Initial call to set up the interval

    return () => clearTimeout(handleMonthChange); // Clean up
  }, []);

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
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              Periode {formatDate(dateRange.startDate)} - {formatDate(dateRange.endDate)}
            </Typography>
          </Box>
          <Box component="a" href="/info-saldo">
            <Button
              sx={{ minWidth: "auto", padding: 0 }}
            >
              <img src={buttonEnter} alt="Tombol Info Saldo, ini akan membawa Anda ke halaman Info Saldo" style={{ width: "28px" }} />
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
              Rp {formatRupiah(income?.total_income) } 
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
              Rp {formatRupiah(expense?.total_expense) }
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