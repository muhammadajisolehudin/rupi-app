import React, { useState } from "react";
import {
	Box,
	CssBaseline,
	Grid,
	IconButton,
	Paper,
	Tooltip,
	Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PropTypes from "prop-types";
import imgCardNasabah from "../../img/card-nasabah.png";
import imgCalendar from "../../img/calendar.png";
import { Link } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CardWithOverlay = ({ imgSrc, altText, accountNumber, balance }) => {
	const [showBalance, setShowBalance] = useState(false);
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(accountNumber);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	const toggleShowBalance = () => {
		setShowBalance((prevShowBalance) => !prevShowBalance);
	};

	return (
		<Grid item md={6} sx={{ position: "relative", width: "100%" }}>
			<Box
				component="img"
				src={imgSrc}
				alt={altText}
				sx={{ width: "100%", height: "auto", display: "block" }}
			/>
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundColor: "black",
					color: "white",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "start",
					p: 2,
					boxSizing: "border-box",
				}}
			>
				<Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
					<Grid sm={6} md={6}>
						<Typography variant="h6" sx={{ mt: 1 }}>
							Nomor Rekening
						</Typography>
						<Typography>{accountNumber}</Typography>
					</Grid>
					<Grid
						sm={6}
						md={6}
						sx={{ display: "flex", justifyContent: "flex-end", alignItems: "end", ml: 1 }}
					>
						<Tooltip title={copied ? "Copied!" : "Copy"}>
							<IconButton onClick={handleCopy} color="inherit">
								<ContentCopyIcon />
							</IconButton>
						</Tooltip>
					</Grid>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<Grid sm={6} md={12}>
						<Typography variant="h6">Saldo</Typography>
						<Typography>{showBalance ? balance : "••••••"}</Typography>
					</Grid>
					<Grid
						sm={6}
						md={12}
						sx={{ display: "flex", justifyContent: "flex-end", alignItems: "end", ml: 9 }}
					>
						<IconButton onClick={toggleShowBalance} color="inherit">
							{showBalance ? <VisibilityOffIcon /> : <VisibilityIcon />}
						</IconButton>
					</Grid>
				</Box>
			</Box>
		</Grid>
	);
};

CardWithOverlay.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
	accountNumber: PropTypes.string.isRequired,
	balance: PropTypes.string.isRequired,
};

export const InfoSaldo = () => {
	return (
		<React.Fragment>
			<CssBaseline>
				{/* <Container> */}
				<Typography variant="h4" component="div" sx={{ my: 3 }}>
					Info Saldo
				</Typography>

				<Grid container style={{ width: "100%" }}>
					<Grid item xs={10} sm={10} md={6} lg={6} sx={{ pr: 3, borderRadius: 0, }}>
						<Box
							component={Paper}
							elevation={5}
							square={false}
							sx={{ display: "flex", flexDirection: "row", justifyContent: "center", p: 3 }}
						>
							<CardWithOverlay
								imgSrc={imgCardNasabah}
								altText="rekening nasabah"
								accountNumber="5667 2323 1444 5554"
								balance="Rp5.000.000"
							/>

							<Grid
								md={6}
								sx={{ p: 3 }}
								style={{ display: "flex", alignItems: "end", flexDirection: "column" }}
							>
								<Typography>Total pengeluaran bulan ini</Typography>
								<Typography variant="h5" sx={{ my: 3, fontWeight: "bold" }}>
									Rp 80.000
								</Typography>

								<Link
									href="#"
									variant="button"
									style={{
										textDecoration: "none",
										padding: "10px",
										display: "flex",
										borderRadius: "10px",
										backgroundColor: "#0066AE",
										justifyContent: "center",
										alignItems: "center",
										width: "156px",
										color: "white",
									}}
								>
									<Typography>Lihat mutasi</Typography>
									<ChevronRightIcon />
								</Link>
							</Grid>
						</Box>
					</Grid>

					<Grid
						item
						xs={10}
						sm={10}
						md={6}
						lg={6}
						sx={{ display: "flex", flexDirection: "row", p: 1, bgcolor: "#0066AE", borderRadius: 2 }}
					>
						<Grid md={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<img src={imgCalendar} alt="buat transfer terjadwal" />
						</Grid>

						<Grid md={12} sx={{ p: 1 }} style={{ color: "#fff" }}>
							<Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
								Buat Transfer Terjadwal
							</Typography>

							<Typography sx={{ mb: 1.5 }}>
								Gunakan fitur Transfer Terjadwal untuk memastikan semua tagihan dan kewajiban Anda dibayar
								tepat waktu. Yuk, coba sekarang!
							</Typography>

							<Link
								href=""
								variant="button"
								style={{
									textDecoration: "none",
									padding: "10px",
									display: "flex",
									borderRadius: "10px",
									backgroundColor: "#fff",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography sx={{ mr: 1 }}>Transfer Terjadwal</Typography>
								<ChevronRightIcon />
							</Link>
						</Grid>
					</Grid>
				</Grid>
				{/* </Container> */}
			</CssBaseline>
		</React.Fragment>
	);
};
