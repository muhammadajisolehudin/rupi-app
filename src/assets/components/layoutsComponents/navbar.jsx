import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
import { Box, Button } from '@mui/material';
import NotificationIcon from '../../img/icons/Notification.svg';
// import SearchIcon from '../../img/icons/Search.svg';
import SettingIcon from '../../img/icons/Setting.svg';
import CustomerServiceIcon from '../../img/icons/CustomerService.svg';
import LogoutIcon from '../../img/icons/Logout.svg';
import { useAuthContext } from '../../../context/AuthContext';

function Navbar() {
  const [activePage, setActivePage] = useState("beranda");
  const navigate = useNavigate();
  const { logout } = useAuthContext()

  const handlePageChange = (pageName, path) => {
    setActivePage(pageName);
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate('/login')
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff",
        color: "#0066AE",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Bayangan dengan intensitas dan opacity yang ditingkatkan
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

        <Box sx={{  display:"flex", gap:8  }}>
          {/* Navigation Menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <Typography
              id="beranda"
              variant="h6"
              fontWeight={activePage === "beranda" ? 700 : 400}
              style={{ cursor: "pointer" }}
              onClick={() => handlePageChange("beranda", "/beranda")}
            >
              Beranda
            </Typography>

            <Typography
              id="aktivitas"
              variant="h6"
              fontWeight={activePage === "aktivitas" ? 700 : 400}
              style={{ cursor: "pointer" }}
              onClick={() => handlePageChange()}
            >
              Aktivitas
            </Typography>
          </Box>

          {/* Icons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={NotificationIcon}
              alt="notifications"
              style={{ cursor: "pointer", padding: "10px" }}
              onClick={() => handlePageChange("notifications", "/")}
            />
            <img
              src={CustomerServiceIcon}
              alt="customer service"
              style={{ cursor: "pointer", padding: "0 20px 0 10px" }}
              onClick={() => handlePageChange("customerService", "/")}
            />
            <img
              src={SettingIcon}
              alt="account settings"
              style={{ cursor: "pointer", padding: "10px" }}
              onClick={() => handlePageChange("accountSettings", "/")}
            />
            <Button>
              <img
                src={LogoutIcon}
                alt="logout"
                style={{ cursor: "pointer", padding: "10px" }}
                onClick={() => handleLogout()}
              />
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
