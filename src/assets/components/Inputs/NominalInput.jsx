import { Box, TextField, Typography } from "@mui/material";

const NominalInput = ({ text, value, onChange, onBlur }) => {
	return (
		<Box
			sx={{
				backgroundColor: "#EFEFEF",
				width: "100%",
				borderRadius: 2,
				px: 3,
				py: 2,
			}}
		>
			<Typography variant="caption">{text}</Typography>
			<Box display="flex">
				<Typography variant="caption" sx={{ mt: 2 }}>
					Rp.
				</Typography>
				<TextField
					id="amount"
					name="amount"
					type="number"
					autoComplete="amount"
					onChange={onChange}
					value={value}
					onBlur={onBlur}
					autoFocus
					sx={{
						height: "3rem",
						pl: 0,
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								border: "none",
							},
						},
					}}
					InputProps={{
						style: {
							height: "3rem",
							fontSize: "18px",
							ml: 0,
							pl: 0,
							color: "#B3B3B3",
						},
					}}
					aria-label="Input Nominal"
				></TextField>
			</Box>
		</Box>
	);
};

export default NominalInput;
