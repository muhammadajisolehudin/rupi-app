import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Grid, CssBaseline, Paper } from "@mui/material";
import imgTransactions from "../../img/Transaction-Icon.png";
import imgQR from "../../img/qr-code-Icon.png";
import imgTopUp from "../../img/top-up-Icon.png";
import imgMoney from "../../img/money-Icon.png";

const ReuseCard = ({ imgSrc, title, targetLink }) => {
	return (
		<a href={targetLink} style={{ textDecoration: "none" }}>
			<Box component={Paper} elevation={5} xs={6} sm={6} md={3} lg={3} sx={{ bgcolor: "#0066AE" }}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						mb: 2,
						justifyContent: "center",
						flexDirection: "column",
						gap: "24px",
						width: "257px",
						minHeight: "150px",
						p: 2
					}}
					// style={{ padding: "25px 20px 20px 20px" }}
				>
					<img src={imgSrc} alt={title} />
					<Typography variant="h5" component="div" style={{ fontSize: "24px", color: "white" }}>
						{title}
					</Typography>
				</Box>
			</Box>
		</a>
	);
};

ReuseCard.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	targetLink: PropTypes.string.isRequired,
};

export const Menu = () => {
	return (
		<React.Fragment>
			<CssBaseline>
				{/* <Container sx={{ my: 2 }}> */}
				<Typography variant="h4" component="div" sx={{ my: 3 }}>
					Menu
				</Typography>
				<Grid sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
					<ReuseCard imgSrc={imgTransactions} title="Transfer Rupiah" targetLink="/transfer-rupi" />
					<ReuseCard imgSrc={imgQR} title="QR Terima Transfer" targetLink="/qrcode" />
					<ReuseCard imgSrc={imgTopUp} title="Top-Up" targetLink="/topup" />
					<ReuseCard imgSrc={imgMoney} title="Tarik Tunai" targetLink="/tarik-tunai" />
				</Grid>
				{/* </Container> */}
			</CssBaseline>
		</React.Fragment>
	);
};
