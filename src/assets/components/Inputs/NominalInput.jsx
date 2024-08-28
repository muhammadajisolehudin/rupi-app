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
			<Typography variant="caption" sx={{ fontSize: "18px" }}>{text}</Typography>
			<Box display="flex" sx={{
				alignItems: "center",
			}}>
				<Typography variant="caption" sx={{ fontSize: "18px" }}>
					Rp
				</Typography>
				<TextField
					id="amount"
					name="amount"
					type="number"
					autoComplete="amount"
					onChange={onChange}
					value={value}
					onBlur={onBlur}
					placeholder="0"
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
							fontSize: "24px",
							ml: 0,
							pl: 0,
						},
						onWheel: (e) => e.target.blur(),
					}}
					aria-label="Input Nominal"
				></TextField>
			</Box>
		</Box>
	);
};

export default NominalInput;
