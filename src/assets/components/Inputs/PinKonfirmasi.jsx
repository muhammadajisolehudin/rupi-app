import { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { useFormikContext } from "formik";

const PinKonfirmasi = () => {
	const { values, setFieldValue } = useFormikContext();
	console.log("tes lahh :",values)

	// Handle change in input field
	const handleChange = (index, event) => {
		const { value } = event.target;

		if (/^\d?$/.test(value)) {
			// Convert the PIN string to an array to update specific digit
			const newPinArray = values.confirm_pin.split("");
			newPinArray[index] = value;

			// Join array to form a new PIN string
			const newPinString = newPinArray.join("");
			setFieldValue("confirm_pin", newPinString);

			// Focus on the next input field if needed
			if (value && index < 5) {
				document.getElementById(`confirm_pin-input-${index + 1}`).focus();
			}
		}
	};

	// Handle keydown events for backspace functionality
	const handleKeyDown = (index, event) => {
		if (event.key === "Backspace") {
			if (!values.confirm_pin[index]) {
				if (index > 0) {
					document.getElementById(`confirm_pin-input-${index - 1}`).focus();
				}
			}
		}
	};

	// Set focus on the first input when the component mounts
	useEffect(() => {
		document.getElementById("confirm_pin-input-0")?.focus();
	}, []);

	return (
		<Box sx={{ display: "flex", gap: 2 }}>
			{Array.from({ length: 6 }, (_, index) => (
				<TextField
					key={index}
					id={`confirm_pin-input-${index}`}
					value={values.confirm_pin[index] || ""}
					onChange={(event) => handleChange(index, event)}
					onKeyDown={(event) => handleKeyDown(index, event)}
					inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
					variant="outlined"
					aria-required={"true"}
					aria-label={"Masukkan 6 Digit Pin"}
					sx={{
						borderRadius: "50%",
						bgcolor: values.confirm_pin[index] ? "#0066AE" : "#B3B3B3",
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
