// import React from "react";
import { Grid, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export const CardAccountInfo = ({ accountNumber, balance }) => {
	return (
		<Grid
			container
			sx={{
				display: "flex",
				gap: 1,
				border: "#B3B3B3 solid 1px",
				borderRadius: 2,
				//   px: 3,
				py: 2,
				mt: 2,
			}}
			// spacing={2}
		>
			<Grid
				//   item
				xs={1.5}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "flex-end", // Horizontal kanan
				}}
			>
				<Typography variant="caption" id="my-no-rekening">
					No. Rekening{" "}
				</Typography>
				<Typography variant="caption" id="my-saldo">
					{" "}
					Saldo{" "}
				</Typography>
			</Grid>
			<Grid xs={10}>
				<Typography variant="body2" aria-labelledby="my-no-rekening">
					{accountNumber}
				</Typography>
				<Typography variant="body2" aria-labelledby="my-saldo">
					{" "}
					{balance}{" "}
				</Typography>
			</Grid>
		</Grid>
	);
};

CardAccountInfo.propTypes = {
	accountNumber: PropTypes.string.isRequired,
	balance: PropTypes.number.isRequired,
};
