import { Box, Button, Container, Typography } from "@mui/material";
import FAQIcon from "../../assets/img/icons/faqIcon.svg";
import logoIcon from "../../assets/img/icons/logoRupi.png";
import infoIcon from "../../assets/img/icons/infoIcon.svg";
import customerServiceIcon from "../../assets/img/icons/CustomerService.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const InformasiRupiAppContent = () => {
	return (
		<Container>
			<Box sx={{ my: 8, mx: 5 }}>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<img src={infoIcon} alt="Info" />
					<Typography variant="h4" sx={{ fontWeight: "bold", fontSize: "30px", ml: 3 }}>
						Tentang Rupi App
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 7 }}>
					<img src={logoIcon} alt="Logo Rupi App" height="104px" style={{ marginBottom: "12%" }} />
					<Box sx={{ ml: 4 }}>
						<Typography variant="body1" sx={{ textAlign: "justify" }}>
							Rupi App hadir dengan semangat Rupiah, simbol inklusivitas dan identitas nasional Indonesia.
							Seperti Rupiah yang merupakan alat pembayaran sah di NKRI dan wajib digunakan dalam setiap
							transaksi di seluruh wilayah Indonesia, Rupi App memastikan layanan perbankan digital dapat
							diakses oleh semua orang, termasuk mereka dengan kebutuhan khusus. Dengan Rupi App, kami
							berkomitmen untuk memberdayakan masyarakat melalui teknologi yang inklusif dan progresif,
							memastikan bahwa setiap individu di Indonesia memiliki kesempatan yang sama untuk mengelola
							keuangan dengan mudah dan aman.
						</Typography>
						<Box>
							<Typography variant="body1" sx={{ color: "#0A3967", fontWeight: 700, mt: 4, mb: 2 }}>
								Butuh bantuan? Segera hubungin kami.
							</Typography>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Button
									variant="contained"
									href="#customer-service"
									sx={{
										backgroundColor: "#0066AE",
										color: "#fff",
										width: "30%",
										fontSize: "10px",
									}}
									disableElevation
									aria-label="Customer Service Button"
								>
									<img
										src={customerServiceIcon}
										alt="Customer Service"
										style={{
											width: "20px",
											height: "20px",
											marginRight: "10px",
											marginBottom: "3px",
											color: "#fff",
										}}
										aria-hidden="true"
									/>
									Customer Service
								</Button>
								<Button
									variant="contained"
									href="#faq"
									sx={{
										display: "flex",
										alignItems: "center",
										backgroundColor: "#0066AE",
										color: "#fff",
										width: "30%",
										fontSize: "10px",
										ml: 2,
									}}
									disableElevation
									aria-label="FAQ Button"
								>
									<img
										src={FAQIcon}
										alt="FAQ"
										style={{ width: "17px", height: "17px", marginRight: "10px", marginBottom: "3px" }}
										aria-hidden="true"
									/>
									FAQ
									<ChevronRightIcon />
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};
