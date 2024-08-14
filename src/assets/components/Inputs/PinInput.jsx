import { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { useFormikContext } from "formik";

const PinInput = () => {
<<<<<<< HEAD
  const { values, setFieldValue } = useFormikContext();

  // Handle change in input field
  const handleChange = (index, event) => {
    const { value } = event.target;

    if (/^\d?$/.test(value)) {
      // Convert the PIN string to an array to update specific digit
      const newPinArray = values.pin.split('');
      newPinArray[index] = value;

      // Join array to form a new PIN string
      const newPinString = newPinArray.join('');
      setFieldValue("pin", newPinString);

      // Focus on the next input field if needed
      if (value && index < 5) {
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
      {Array.from({ length: 6 }, (_, index) => (
        <TextField
          key={index}
          id={`pin-input-${index}`}
          value={values.pin[index] || ""}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
          variant="outlined"
          sx={{
            borderRadius: "50%",
            bgcolor: values.pin[index] ? "#0066AE" : "#B3B3B3",
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
=======
	const { values, setFieldValue } = useFormikContext();

	// Handle change in input field
	const handleChange = (index, event) => {
		const { value } = event.target;

		if (/^\d?$/.test(value)) {
			// Convert the PIN string to an array to update specific digit
			const newPinArray = values.pin.split("");
			newPinArray[index] = value;

			// Join array to form a new PIN string
			const newPinString = newPinArray.join("");
			setFieldValue("pin", newPinString);

			// Focus on the next input field if needed
			if (value && index < 5) {
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
			{Array.from({ length: 6 }, (_, index) => (
				<TextField
					key={index}
					id={`pin-input-${index}`}
					value={values.pin[index] || ""}
					onChange={(event) => handleChange(index, event)}
					onKeyDown={(event) => handleKeyDown(index, event)}
					inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
					variant="outlined"
					aria-required={"true"}
					aria-label={"Masukkan 6 Digit Pin"}
					sx={{
						borderRadius: "50%",
						bgcolor: values.pin[index] ? "#0066AE" : "#B3B3B3",
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
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
};

export default PinInput;
