import { Box, ButtonBase, Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import { LayoutSecondary } from "../layoutSecondary";
import BreadcrumbSecondary from "../../assets/components/Breadcrumbs/BreadcrumbSecondary";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import birdImg from "../../assets/img/bird.png";
import catImg from "../../assets/img/cat.png";
import dogImg from "../../assets/img/dog.png";
import { useState } from "react";
// import { Login } from "@mui/icons-material";
import { AkunContent } from "./AkunContent";
import { UbahNoHandphoneContent } from "./UbahNoHandphoneContent";
import { InformasiRupiAppContent } from "./InformasiRupiAppContent";
import { UbahPinIndex } from "./UbahPinIndex";
import { UbahPasswordIndex } from "./UbahPasswordIndex";

export const PengaturanPage = () => {
	const [activeSection, setActiveSection] = useState("Akun");

	const [profilePic, setProfilePic] = useState(null);

	const handleImageChange = (image) => {
		setProfilePic(image);
	};

	const getTabStyle = (section) => ({
		position: "relative",
		"&::after": {
			content: '""',
			position: "absolute",
			bottom: -2,
			left: 0,
			width: "100%",
			height: 3,
			backgroundColor: "#0066AE",
			borderRadius: "5px",
			visibility: activeSection === section ? "visible" : "hidden",
			transition: " bottom 0.2s ease",
		},
	});

	//UNCOMENT INI BUAT MASING MASING CONTENT

	const renderContent = () => {
		switch (activeSection) {
			case "Akun":
				return <AkunContent />;
			case "Ubah Pin":
				return <UbahPinIndex />;
			case "Ubah Password":
				return <UbahPasswordIndex />;
			case "Ubah No Handphone":
				return <UbahNoHandphoneContent />;
			case "Informasi Rupi App":
				return <InformasiRupiAppContent />;
			default:
				return <AkunContent />;
		}
	};

	return (
		<LayoutSecondary>
			{/* <Box> */}
				<Grid xs={12} sx={{
					display: 'relative',
				}}>
					<BreadcrumbSecondary />
				</Grid>
				<Grid
					sx={{
						position: "absolute",
						top: "230px",
						left: "0",
						right: "0",
						bottom: "0",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						mb: 10,
					}}
				>
					<Grid container spacing={4} sx={{ px: 8 }}>
						<Grid item xs={3.5}>
							<Paper
								elevation={5}
								sx={{
									px: 4,
									py: 10,
									display: "flex",
									flexDirection: "column",
									gap: 3,
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										gap: 1,
									}}
								>
									{profilePic ? (
										<Paper
											component="paper"
											elevation={4}
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: "10rem",
												height: "10rem",
												borderRadius: "50%",
												overflow: "hidden",
											}}
										>
											<img
												src={profilePic}
												alt="Profile"
												style={{ width: "9rem", height: "9rem", borderRadius: "50%" }}
											/>
										</Paper>
									) : (
										<Typography variant="h6" color="textSecondary">
											No Image
										</Typography>
									)}
									<Typography variant="h4" sx={{ fontWeight: "bold" }}>
										Nama user
									</Typography>
									<Typography sx={{ mt: 1 }}>Pasang foto atau avatar favoritmu</Typography>
								</Box>

								<Box sx={{ display: "flex", justifyContent: "space-between" }}>
									<IconButton
										onClick={() => {}}
										aria-label="Tambahkan Foto"
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: 60,
											height: 60,
											border: "2px dashed black",
											borderRadius: "50%",
											overflow: "hidden",
											padding: 2,
											boxShadow: 3,
											backgroundColor: "#f5f5f5",
										}}
									>
										<AddAPhotoOutlinedIcon />
									</IconButton>
									<Box
										onClick={() => handleImageChange(birdImg)}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: 60,
											height: 60,
											borderRadius: "50%",
											overflow: "hidden",
											border: profilePic === birdImg ? "2px solid #1976d2" : "none",
											cursor: "pointer",
										}}
										aria-label="Select bird image"
									>
										<img src={birdImg} alt="Bird" />
									</Box>
									<Box
										onClick={() => handleImageChange(catImg)}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: 60,
											height: 60,
											borderRadius: "50%",
											overflow: "hidden",
											border: profilePic === catImg ? "2px solid #1976d2" : "none",
											cursor: "pointer",
										}}
										aria-label="Select cat image"
									>
										<img src={catImg} alt="Cat" />
									</Box>
									<Box
										onClick={() => handleImageChange(dogImg)}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: 60,
											height: 60,
											borderRadius: "50%",
											overflow: "hidden",
											border: profilePic === dogImg ? "2px solid #1976d2" : "none",
											cursor: "pointer",
										}}
										aria-label="Select dog image"
									>
										<img src={dogImg} alt="Dog" />
									</Box>
								</Box>
							</Paper>
						</Grid>
						<Grid item xs={8.5}>
							<Paper elevation={5} sx={{ height: "150%", display: "box" }}>
								<Box
									sx={{ display: "flex", justifyContent: "space-between", pt: 3, px: 5, zIndex: 1 }}
									role="region"
									aria-label="Tab Bar Pengaturan"
								>
									<ButtonBase
										id="TabAkun"
										onClick={() => setActiveSection("Akun")}
										sx={getTabStyle("Akun")}
										aria-label="Tab Akun"
									>
										<Typography
											aria-labelledby="TabAkun"
											role="button"
											variant="h6"
											component="div"
											sx={{
												fontWeight: activeSection === "Akun" ? "bold" : "normal",
												color: activeSection === "Akun" ? "#0066AE" : "#dedede",
												cursor: "pointer",
											}}
										>
											Akun
										</Typography>
									</ButtonBase>
									<ButtonBase
										id="TabUbahPin"
										onClick={() => setActiveSection("Ubah Pin")}
										sx={getTabStyle("Ubah Pin")}
										aria-label="Tab Ubah Pin"
									>
										<Typography
											aria-labelledby="TabUbahPin"
											role="button"
											variant="h6"
											component="div"
											sx={{
												fontWeight: activeSection === "Ubah Pin" ? "bold" : "normal",
												color: activeSection === "Ubah Pin" ? "#0066AE" : "#dedede",
												cursor: "pointer",
											}}
										>
											Ubah Pin
										</Typography>
									</ButtonBase>
									<ButtonBase
										id="TabUbahPassword"
										onClick={() => setActiveSection("Ubah Password")}
										sx={getTabStyle("Ubah Password")}
										aria-label="Tab Ubah Password"
									>
										<Typography
											aria-labelledby="TabUbahPassword"
											role="button"
											variant="h6"
											component="div"
											sx={{
												fontWeight: activeSection === "Ubah Password" ? "bold" : "normal",
												color: activeSection === "Ubah Password" ? "#0066AE" : "#dedede",
												cursor: "pointer",
											}}
										>
											Ubah Password
										</Typography>
									</ButtonBase>
									<ButtonBase
										id="TabUbahHP"
										onClick={() => setActiveSection("Ubah No Handphone")}
										sx={getTabStyle("Ubah No Handphone")}
										aria-label="Tab Ubah No Handphone"
									>
										<Typography
											aria-labelledby="TabUbahHP"
											role="button"
											variant="h6"
											component="div"
											sx={{
												fontWeight: activeSection === "Ubah No Handphone" ? "bold" : "normal",
												color: activeSection === "Ubah No Handphone" ? "#0066AE" : "#dedede",
												cursor: "pointer",
											}}
										>
											Ubah No Handphone
										</Typography>
									</ButtonBase>
									<ButtonBase
										id="TabInformasi"
										onClick={() => setActiveSection("Informasi Rupi App")}
										sx={getTabStyle("Informasi Rupi App")}
										aria-label="Tab Informasi Rupi App"
									>
										<Typography
											aria-labelledby="TabInformasi"
											role="button"
											variant="h6"
											component="div"
											sx={{
												fontWeight: activeSection === "Informasi Rupi App" ? "bold" : "normal",
												color: activeSection === "Informasi Rupi App" ? "#0066AE" : "#dedede",
												cursor: "pointer",
											}}
										>
											Informasi Rupi App
										</Typography>
									</ButtonBase>
								</Box>
								<Divider
									sx={{
										width: "100%",
										backgroundColor: "#B3B3B3", // Warna garis
									}}
								/>

								<Box sx={{ bgcolor: "white" }}>{renderContent()}</Box>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			{/* </Box> */}
		</LayoutSecondary>
	);
};
