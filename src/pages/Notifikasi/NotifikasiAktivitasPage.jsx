import { Box, Container, Paper, Typography } from "@mui/material";
import { NotifAktivitasItem } from "../../assets/components/notifikasi/NotifAktivitasItem";
import { Layout } from "../layout";

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
			"https://cdn.builder.io/api/v1/image/assets/TEMP/c0d97d04754bda5ca782703e506eea954db3879eb74bf0301c3a095f94e4f0be?placeholderIfAbsent=true&apiKey=cbd64819dad2459bacc70f26f39e5eb7",
		title: "Password Baru Berhasil Dibuat!",
		description: "Password baru kamu di Rupi App berhasil dibuat.",
		date: "2024-08-15",
		time: "9.33 AM",
	},
	{
		icon:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/8fe79dbc07fa31461a4d2a1a1246118864750616c9a0ce19d3886ce82eb0891a?placeholderIfAbsent=true&apiKey=cbd64819dad2459bacc70f26f39e5eb7",
		title: "PIN Baru Berhasil Dibuat!",
		description: "PIN baru kamu di Rupi App berhasil dibuat.",
		date: "2024-05-16",
		time: "9.40 AM",
	},
	{
		icon:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/c0d97d04754bda5ca782703e506eea954db3879eb74bf0301c3a095f94e4f0be?placeholderIfAbsent=true&apiKey=cbd64819dad2459bacc70f26f39e5eb7",
		title: "Password Baru Berhasil Dibuat!",
		description: "Password baru kamu di Rupi App berhasil dibuat.",
		date: "2024-08-16",
		time: "9.33 AM",
	},
];

export const NotifikasiAktivitasPage = () => {
	// Get today's date as a string in 'YYYY-MM-DD' format
	const today = new Date().toISOString().split("T")[0];

	// Filter notifications for today and previous days
	const todayNotifications = notificationData.filter((notification) => notification.date === today);
	const previousNotifications = notificationData.filter((notification) => notification.date < today);

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

	return (
		<Layout>
			<Container
				spacing={4}
				elevation={2}
				component={Paper}
				sx={{ my: 20, height: "fit-content", width: "714px" }}
			>
				<Box>
					<Typography
						variant="h4"
						fontWeight="bold"
						sx={{
							letterSpacing: "-0.015em",
							lineHeight: 1,
							color: "text.primary",
							py: 3,
							pt: 5,
							textAlign: "center",
						}}
					>
						Notifikasi Aktivitas
					</Typography>
				</Box>
				<Box sx={{ flexDirection: "column", width: "100%", maxWidth: "100%" }}>
					<Typography variant="h5" fontWeight="bold">
						Hari Ini
					</Typography>
					<Box sx={{ flexDirection: "column", mt: 2 }}>
						{todayNotifications.length > 0 ? (
							todayNotifications.map((notification, index) => (
								<NotifAktivitasItem
									key={index}
									{...notification}
									date={parseDate(notification.date)}
									isHighlighted={index % 2 === 0}
								/>
							))
						) : (
							<Typography variant="h5" color="text.secondary" align="center" mt={3}>
								Tidak Ada
							</Typography>
						)}
					</Box>
					<Typography variant="h5" fontWeight="bold" mt={2}>
						Sebelumnya
					</Typography>
					<Box sx={{ flexDirection: "column", mt: 2, pb: 4 }}>
						{previousNotifications.length > 0 ? (
							previousNotifications.map((notification, index) => (
								<NotifAktivitasItem
									key={index}
									{...notification}
									date={parseDate(notification.date)}
									isHighlighted={index % 2 === 0}
								/>
							))
						) : (
							<Typography variant="h5" color="text.secondary" align="center" mt={3}>
								Tidak Ada
							</Typography>
						)}
					</Box>
				</Box>
			</Container>
		</Layout>
	);
};
