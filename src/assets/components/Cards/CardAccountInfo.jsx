// import React from "react";
import { Grid, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export const CardAccountInfo = ({ accountNumber, balance }) => {
	const formatedAccountNumber = accountNumber ? accountNumber.replace(/(\d{4})(?=\d)/g, "$1 ") : "";
	const formatedBalance = balance ? balance.replace(/Rp|\,00/g, "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") : "";
	return (
		<Grid
			container
			sx={{
				display: "flex",
				gap: 1,
				border: "#B3B3B3 solid 1px",
				borderRadius: 2,
				px: 1,
				py: 2,
				mt: 2,
			}}
		// spacing={2}
		>
			<Grid
				//   item
				xs={1}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "flex-end", // Horizontal kanan
				}}
			>
				<Typography variant="caption" id="my-no-rekening" sx={{
					color: "grey"
				}}>
					No. Rekening{" "}
				</Typography>
				<Typography variant="caption" id="my-no-rekening" sx={{
					color: "grey"
				}}>
					{" "}
					Saldo{" "}
				</Typography>
			</Grid>
			<Grid xs={10}>
				<Typography variant="body2" aria-labelledby="my-no-rekening">
					{formatedAccountNumber}
				</Typography>
				<Typography variant="body2" aria-labelledby="my-saldo">
					Rp{" "}
					{formatedBalance}{" "}
				</Typography>
			</Grid>
		</Grid>
	);
};

CardAccountInfo.propTypes = {
	accountNumber: PropTypes.string.isRequired,
	balance: PropTypes.number.isRequired,
};
