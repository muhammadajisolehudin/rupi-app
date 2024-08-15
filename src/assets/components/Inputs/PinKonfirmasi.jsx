import { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { useFormikContext } from "formik";

const PinKonfirmasi = () => {
	const { values, setFieldValue } = useFormikContext();

	// Handle change in input field
	const handleChange = (index, event) => {
		const { value } = event.target;

		if (/^\d?$/.test(value)) {
			// Convert the PIN string to an array to update specific digit
			const newPinArray = values.confirmPin.split("");
			newPinArray[index] = value;

			// Join array to form a new PIN string
			const newPinString = newPinArray.join("");
			setFieldValue("confirmPin", newPinString);

			// Focus on the next input field if needed
			if (value && index < 5) {
				document.getElementById(`confirmPin-input-${index + 1}`).focus();
			}
		}
	};

	// Handle keydown events for backspace functionality
	const handleKeyDown = (index, event) => {
		if (event.key === "Backspace") {
			if (!values.confirmPin[index]) {
				if (index > 0) {
					document.getElementById(`confirmPin-input-${index - 1}`).focus();
				}
			}
		}
	};

	// Set focus on the first input when the component mounts
	useEffect(() => {
		document.getElementById("confirmPin-input-0")?.focus();
	}, []);

	return (
		<Box sx={{ display: "flex", gap: 2 }}>
			{Array.from({ length: 6 }, (_, index) => (
				<TextField
					key={index}
					id={`confirmPin-input-${index}`}
					value={values.confirmPin[index] || ""}
					onChange={(event) => handleChange(index, event)}
					onKeyDown={(event) => handleKeyDown(index, event)}
					inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
					variant="outlined"
					aria-required={"true"}
					aria-label={"Masukkan 6 Digit Pin"}
					sx={{
						borderRadius: "50%",
						bgcolor: values.confirmPin[index] ? "#0066AE" : "#B3B3B3",
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

export default PinKonfirmasi;
