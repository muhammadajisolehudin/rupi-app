import { useState, useEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import checklistIcon from "../../assets/img/checklist-icon.png";
import { AuthLayout } from "../authLayout";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function BuatPin() {
  const [isPinCompleted, setIsPinCompleted] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      pin: ["", "", "", "", "", ""],
    },
    validationSchema: Yup.object({
      pin: Yup.array()
        .of(Yup.string().length(1, "Each PIN digit must be one character"))
        .length(6, "PIN must be exactly 6 digits")
        .required("PIN is required"),
    }),
    onSubmit: (values) => {
      const pinValue = parseInt(values.pin.join(""), 10);
      setIsPinCompleted(true);
      console.log(pinValue);
      console.log("Navigate to MasukPin page");

      setTimeout(() => {
        navigate("/masuk-pin");
      }, 1500);
    },
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (key === "Enter") {
        formik.handleSubmit();
      }

      if (key >= "0" && key <= "9") {
        const index = formik.values.pin.findIndex((entry) => entry === "");
        if (index !== -1) {
          const newPin = [...formik.values.pin];
          newPin[index] = key;
          formik.setFieldValue("pin", newPin);
        }
      } else if (key === "Backspace") {
        const index = formik.values.pin
          .slice()
          .reverse()
          .findIndex((entry) => entry !== "");
        if (index !== -1) {
          const newPin = [...formik.values.pin];
          const originalIndex = formik.values.pin.length - 1 - index;
          newPin[originalIndex] = "";
          formik.setFieldValue("pin", newPin);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [formik.values.pin]);

  return (
    <AuthLayout>
      <Paper
        elevation={7}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 10,
          alignItems: "center",
          flexDirection: "column",
          height: 617,
          my: "auto",
        }}
      >
        {!isPinCompleted ? (
          <>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, mx: "auto", mt: 10 }}
            >
              Buat PIN Baru
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                gap: 2,
                mt: 5,
              }}
            >
              {formik.values.pin.map((digit, index) => (
                <Box
                  key={index}
                  sx={{
                    borderRadius: "50%",
                    bgcolor: digit ? "#0066AE" : "#B3B3B3",
                    width: 30,
                    height: 30,
                  }}
                />
              ))}
            </Box>
            <Button
              onClick={formik.handleSubmit}
              sx={{
                backgroundColor: "#0066AE",
                py: 2,
                px: 18,
                borderRadius: "12px",
                textTransform: "capitalize",
              }}
              variant="contained"
            >
              Lanjutkan
            </Button>
          </>
        ) : (
          <>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mx: "auto",
                mt: 10,
                textAlign: "center",
              }}
            >
              PIN Anda Berhasil <br /> Dibuat
            </Typography>
            <img
              style={{ width: 200, height: 200, marginTop: 10 }}
              src={checklistIcon}
              alt="Checklist Icon"
            />
          </>
        )}
      </Paper>
    </AuthLayout>
  );
}
