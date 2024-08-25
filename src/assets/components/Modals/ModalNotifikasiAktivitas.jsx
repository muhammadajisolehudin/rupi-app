import { MenuItem, Button, Box, Typography, Modal, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { NotifAktivitasItem } from "../notifikasi/NotifAktivitasItem";
import CloseIcon from "@mui/icons-material/Close";

const notificationData = [
	{
		icon:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/55e5b00d3350c8a2fea7516f35acc45c2ea9b31e2d6f83c772904ff7509e0b00?placeholderIfAbsent=true&apiKey=cbd64819dad2459bacc70f26f39e5eb7",
		title: "E-mail Berhasil Diubah!",
		description: "E-mail kamu di Rupi App berhasil diubah.",
		date: "2024-08-10",
		time: "9.50 AM",
	},
	{
		icon:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/3d47550c90e94a9081d87b59b984838eda40dafd655dc7be6323a48cd5785720?placeholderIfAbsent=true&apiKey=cbd64819dad2459bacc70f26f39e5eb7",
		title: "Selamat Datang di Rupi App!",
		description: "Terima kasih ya sudah memilih Rupi App sebagai sahabat finansialmu",
		date: "2024-08-14",
		time: "9.30 AM",
	},
	{
		icon:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/55e5b00d3350c8a2fea7516f35acc45c2ea9b31e2d6f83c772904ff7509e0b00?placeholderIfAbsent=true&apiKey=cbd64819dad2459bacc70f26f39e5eb7",
		title: "E-mail Berhasil Diubah!",
		description: "E-mail kamu di Rupi App berhasil diubah.",
		date: "2024-08-10",
		time: "9.50 AM",
	},
	{
		icon:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/3d47550c90e94a9081d87b59b984838eda40dafd655dc7be6323a48cd5785720?placeholderIfAbsent=true&apiKey=cbd64819dad2459bacc70f26f39e5eb7",
		title: "Selamat Datang di Rupi App!",
		description: "Terima kasih ya sudah memilih Rupi App sebagai sahabat finansialmu",
		date: "2024-08-14",
		time: "9.30 AM",
	},
	{
		icon:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/8fe79dbc07fa31461a4d2a1a1246118864750616c9a0ce19d3886ce82eb0891a?placeholderIfAbsent=true&apiKey=cbd64819dad2459bacc70f26f39e5eb7",
		title: "PIN Baru Berhasil Dibuat!",
		description: "PIN baru kamu di Rupi App berhasil dibuat.",
		date: "2024-03-17",
		time: "9.40 AM",
	},
];

const style = {
	position: "absolute",
	top: "78%",
	left: "42%",
	transform: "translate(2%, -81%)",
	borderRadius: 10,
	width: 557,
	backgroundColor: "white",
	border: "none",
};

export const ModalNotifikasiAktivitas = ({ open, onClose }) => {
	const parseDate = (dateString) => {
		const months = [
			"Januari",
			"Februari",
			"Maret",
			"April",
			"Mei",
			"Juni",
			"Juli",
			"Agustus",
			"September",
			"Oktober",
			"November",
			"Desember",
		];

		const [year, month, day] = dateString.split("-");
		const monthName = months[parseInt(month) - 1];

		return `${parseInt(day)} ${monthName} ${year}`;
	};

	const filterNewNotification = notificationData.slice(0, 4);

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-notif-title"
			aria-controls={open ? "notification-dropdown" : undefined}
			aria-haspopup="true"
			aria-expanded={open ? "true" : undefined}
		>
			<Box id="notification-dropdown" open={open} onClose={onClose} style={style}>
				<Box sx={{ position: "relative", py: 1 }}>
					<Box sx={{ mt: 2 }}>
						<Box sx={{ display: "flex", justifyContent: "space-between", px: 5 }}>
							<Typography
								id="modal-notif-title"
								variant="h5"
								fontWeight="bold"
								sx={{
									letterSpacing: "-0.015em",
									lineHeight: 1,
									color: "text.primary",
									// px: 5,
									py: 2,
								}}
							>
								Notifikasi Aktivitas
							</Typography>
							<Box sx={{ mt: -2 }}>
								<IconButton size="small" onClick={onClose} aria-label="Tombol Tutup Notifikasi,">
									<CloseIcon />
								</IconButton>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							maxHeight: "55vh",
							overflowY: "auto",
						}}
					>
						{filterNewNotification.map((notification, index) => (
							<MenuItem key={index}>
								<NotifAktivitasItem
									key={index}
									{...notification}
									date={parseDate(notification.date)}
									isHighlighted={index % 2 === 0}
								/>
							</MenuItem>
						))}
					</Box>

					<MenuItem sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
						<Button
							href="/notifikasi-aktivitas"
							variant="contained"
							color="primary"
							sx={{ my: 2 }}
							role="button"
							aria-label="Lihat semua notifikasi aktivitas,"
						>
							Lihat Semua Notif
						</Button>
					</MenuItem>
				</Box>
			</Box>
		</Modal>
	);
};

ModalNotifikasiAktivitas.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};
