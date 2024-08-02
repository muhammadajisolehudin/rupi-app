import { useState, useEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import checklistIcon from "../../assets/img/checklist-icon.png";
import { AuthLayout } from "../authLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSetPin } from "../../services/auth/set-pin";

export const SetPin = () => {
  const [isPinCompleted, setIsPinCompleted] = useState(false);
  const navigate = useNavigate();
  const pin = useSetPin()
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
    onSubmit: async (values) => {
       const pinString = values.otp.join("");

      const payload = {
        ...values,
        pin:pinString,
      };
      
      try {
        await pin.mutateAsync(payload);
        setIsPinCompleted(true);
      } catch (error) {
        console.error("Login failed, error:", error); // Debug log
        // Error handling sudah diatur di dalam useLoginMutation
      }
      

      setTimeout(() => {
        navigate("/pin");
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
                py: 1.5,
                px: 18,
                borderRadius: "8px",
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
