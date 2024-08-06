import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";

import NotificationIcon from "../../img/icons/Notification.svg";
import SearchIcon from "../../img/icons/Search.svg";
import SettingIcon from "../../img/icons/Setting.svg";
import CustomerServiceIcon from "../../img/icons/CustomerService.svg";
import LogoutIcon from "../../img/icons/Logout.svg";

function Navbar() {
  const [activePage, setActivePage] = useState("beranda");
  const navigate = useNavigate();

  const handlePageChange = (pageName, path) => {
    setActivePage(pageName);
    navigate(path);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff",
        color: "#0066AE",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        paddingX: "1rem",
        zIndex: 9999,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", height: "85px" }}>
        {/* Logo and App Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img
            id="logo"
            src="/logo.png"
            aria-label="Logo Rupi App"
            alt="Logo Rupi App"
          />
          <Typography
            id="logoText"
            variant="h6"
            fontWeight={700}
            aria-label="Nama Aplikasi, Rupi App"
          >
            Rupi App
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginLeft: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            border: "1px solid var(--Neutral-03, #B3B3B3)",
            width: "390px",
          }}
        >
          <img
            id="searchIcon"
            src={SearchIcon}
            style={{ position: "absolute", left: "15px", height: "12px" }}
          />
          <InputBase
            id="searchBox"
            aria-label="Kolom Pencarian"
            placeholder="Pencarian"
            inputProps={{ "aria-label": "search" }}
            sx={{
              paddingLeft: "40px",
              paddingRight: "10px",
              width: "100%",
            }}
          />
        </Box>

        {/* Navigation Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <Button
            aria-label="Tombol Beranda, ini akan membawa Anda ke halaman Beranda"
            onClick={() => handlePageChange("beranda", "/beranda")}
          >
            {" "}
            <Typography
              id="beranda"
              variant="h6"
              fontWeight={activePage === "beranda" ? 700 : 400}
              style={{ cursor: "pointer" }}
            >
              Beranda
            </Typography>
          </Button>

          <Button
            aria-label="Tombol Aktivitas, ini akan membawa Anda ke halaman Aktivitas"
            onClick={() => handlePageChange("aktivitas", "/aktivitas")}
          >
            <Typography
              id="aktivitas"
              variant="h6"
              fontWeight={activePage === "aktivitas" ? 700 : 400}
              style={{ cursor: "pointer" }}
            >
              Aktivitas
            </Typography>
          </Button>
        </Box>

        {/* Icons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            aria-label="Tombol Notifikasi, ini akan membawa Anda ke halaman Notifikasi"
            onClick={() => handlePageChange("notifications", "/notifications")}
          >
            <img
              src={NotificationIcon}
              alt="notifications"
              style={{ cursor: "pointer", padding: "10px" }}
            />
          </Button>

          <Button
            aria-label="Tombol Layanan Pelanggan, ini akan membawa Anda ke halaman Layanan Pelanggan"
            onClick={() => handlePageChange("customerService", "/customer")}
          >
            <img
              src={CustomerServiceIcon}
              alt="customer service"
              style={{ cursor: "pointer", padding: "0 20px 0 10px" }}
            />
          </Button>

          <Button
            aria-label="Tombol Pengaturan Akun, ini akan membawa Anda ke halaman Pengaturan Akun"
            onClick={() => handlePageChange("accountSettings", "/account")}
          >
            <img
              src={SettingIcon}
              alt="account settings"
              style={{ cursor: "pointer", padding: "10px" }}
            />
          </Button>

          <Button
            aria-label="Tombol Keluar, ini akan membawa Anda ke halaman Login dan keluar dari aplikasi"
            onClick={() => handlePageChange("logout", "/logout")}
          >
            <img
              src={LogoutIcon}
              alt="logout"
              style={{ cursor: "pointer", padding: "10px" }}
            />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
