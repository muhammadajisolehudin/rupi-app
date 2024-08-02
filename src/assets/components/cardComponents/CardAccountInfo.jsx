// import React from "react";
import { Card, Paper, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export const CardAccountInfo = ({ accountNumber, balance }) => {
	return (
		<Card component={Paper} elevation={2} sx={{ p: 2, my: 2 }}>
			<div>
				<Typography aria-label="nomor rekening">
					<span style={{ color: "grey" }}>No. Rekening:</span> <span>{accountNumber}</span>
				</Typography>
			</div>
			<div>
				<Typography aria-label="total balance rekening">
					<span style={{ color: "grey" }}>Saldo:</span> <span>Rp {balance.toLocaleString("id-ID")}</span>
				</Typography>
			</div>
		</Card>
	);
};

CardAccountInfo.propTypes = {
	accountNumber: PropTypes.string.isRequired,
	balance: PropTypes.number.isRequired,
};
