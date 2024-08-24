import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Box, keyframes } from "@mui/material";
import NotificationIcon from "../../img/icons/Notification.svg";
import SettingIcon from "../../img/icons/Setting.svg";
import CustomerServiceIcon from "../../img/icons/CustomerService.svg";
import LogoutIcon from "../../img/icons/Logout.svg";
import { useAuthContext } from "../../../context/AuthContext";
import { styled } from "@mui/material/styles";
import { ModalNotifikasiAktivitas } from "../Modals/ModalNotifikasiAktivitas";

function Navbar() {
	const [activePage, setActivePage] = useState("beranda");
	const navigate = useNavigate();
	const { logout } = useAuthContext();

	const handlePageChange = (pageName, path) => {
		setActivePage(pageName);
		navigate(path);
	};

	const handleLogout = async () => {
		await logout();
		setTimeout(() => {
			navigate("/login");
		}, 1000);
	};

	const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;
	const AnimatedAvatar = styled(Avatar)`
		width: auto;
		height: auto;
		cursor: pointer;
		transition: transform 0.3s ease-in-out;

		&:hover {
			animation: ${shake} 0.5s ease-in-out;
		}
	`;

	const [open, setOpen] = useState();
	const handleOpenNotifDropdown = () => setOpen(true);
	const handleCloseNotifDropdown = () => setOpen(false);

	return (
		<AppBar
			position="fixed"
			sx={{
				backgroundColor: "#ffffff",
				color: "#0066AE",
				// boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
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
						style={{ paddingBottom: 10 }}
					/>
					<Typography id="logoText" variant="h6" fontWeight={700} aria-label="Nama Aplikasi, Rupi App">
						Rupi App
					</Typography>
				</Box>

				<Box sx={{ display: "flex", gap: 8 }}>
					{/* Navigation Menu */}
					<Box sx={{ display: "flex", alignItems: "center", gap: "32px" }}>
						<Typography
							id="beranda"
							variant="h6"
							fontWeight={activePage === "beranda" ? 700 : 400}
							style={{ cursor: "pointer" }}
							onClick={() => handlePageChange("beranda", "/")}
							sx={{
								transition: "transform 0.3s ease", // Transisi halus untuk pergeseran
								"&:hover": {
									transform: "translateX(-8px)", // Geser elemen 10px ke kiri saat hover
								},
							}}
							role="button"
						>
							Beranda
						</Typography>
					</Box>

					{/* Icons */}
					<Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
						<AnimatedAvatar
							src={NotificationIcon}
							alt="notifications"
							onClick={() => handleOpenNotifDropdown()}
							role="button"
							tabIndex={0}
						/>
						<img
							src={CustomerServiceIcon}
							alt="customer service"
							style={{ cursor: "pointer" }}
							onClick={() => window.open("https://wa.me/6283140156530", "_blank")}
							role="button"
							tabIndex={0}
						/>
						<img
							src={SettingIcon}
							alt="account settings"
							style={{ cursor: "pointer" }}
							onClick={() => handlePageChange("accountSettings", "/pengaturan")}
							role="button"
							tabIndex={0}
						/>
						{/* <Button> */}
						<img
							itemType="button"
							src={LogoutIcon}
							alt="logout"
							style={{ cursor: "pointer" }}
							onClick={() => handleLogout()}
							role="button"
							tabIndex={0}
						/>
						{/* </Button> */}
					</Box>
				</Box>
			</Toolbar>
			{/* Modal Notifikasi Aktivitas */}
			<ModalNotifikasiAktivitas open={open} onClose={handleCloseNotifDropdown} />
		</AppBar>
	);
}

export default Navbar;
