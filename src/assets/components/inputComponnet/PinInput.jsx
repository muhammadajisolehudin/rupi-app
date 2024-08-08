import { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { useFormikContext } from "formik";

const PinInput = () => {
	const { values, setFieldValue } = useFormikContext();

	// Handle change in input field
	const handleChange = (index, event) => {
		const { value } = event.target;
		if (/^\d?$/.test(value)) {
			const newPin = [...values.pin];
			newPin[index] = value;
			setFieldValue("pin", newPin);

			if (value && index < values.pin.length - 1) {
				document.getElementById(`pin-input-${index + 1}`).focus();
			}
		}
	};

	// Handle keydown events for backspace functionality
	const handleKeyDown = (index, event) => {
		if (event.key === "Backspace") {
			if (!values.pin[index]) {
				if (index > 0) {
					document.getElementById(`pin-input-${index - 1}`).focus();
				}
			}
		}
	};

	// Set focus on the first input when the component mounts
	useEffect(() => {
		document.getElementById("pin-input-0")?.focus();
	}, []);

	return (
		<Box sx={{ display: "flex", gap: 2 }}>
			{values.pin.map((digit, index) => (
				<TextField
					key={index}
					id={`pin-input-${index}`}
					value={digit}
					onChange={(event) => handleChange(index, event)}
					onKeyDown={(event) => handleKeyDown(index, event)}
					inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
					variant="outlined"
					aria-required={"true"}
					aria-label={"Masukkan 6 Digit Pin"}
					sx={{
						borderRadius: "50%",
						bgcolor: digit ? "#0066AE" : "#B3B3B3",
						width: 30,
						height: 30,
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								border: "none",
							},
						},
						"& .MuiInputBase-input": {
							caretColor: "transparent", // Hide cursor
							textAlign: "center",
							color: "transparent", // Hide text
						},
					}}
				/>
			))}
		</Box>
	);
};

export default PinInput;
