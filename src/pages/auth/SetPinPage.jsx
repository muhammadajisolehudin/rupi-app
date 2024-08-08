import { useEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../authLayout";
import { useFormik } from "formik";
import * as Yup from "yup";

export const SetPinPage = () => {
  const navigate = useNavigate();

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      pin: "",
    },
    validationSchema: Yup.object({
      pin: Yup.string()
        .length(6, "PIN harus terdiri dari 6 digit")
        .matches(/^\d+$/, "PIN harus berisi angka saja")
        .required("PIN diperlukan"),
    }),
    onSubmit: async (values) => {

      try {
        console.log("data pin: ", values);
        navigate("/konfirm-pin", { state: { pin: values.pin } });
      } catch (error) {
        console.error("Login failed, error:", error);
      }
    },
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (key === "Enter") {
        formik.handleSubmit();
      } else if (key >= "0" && key <= "9") {
        if (formik.values.pin.length < 6) {
          formik.setFieldValue("pin", formik.values.pin + key);
        }
      } else if (key === "Backspace") {
        formik.setFieldValue("pin", formik.values.pin.slice(0, -1));
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
          py:8,
          my: "auto",
        }}
      >
        <Typography
          id="buat-pin-baru"
          variant="h4"
          sx={{ fontWeight: 600, mx: "auto" }}
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
          aria-required="true"
          aria-describedby="buat-pin-baru"
          aria-label="masukkan 6 digit pin"
        >
          {Array.from({ length: 6 }, (_, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "50%",
                bgcolor: formik.values.pin[index] ? "#0066AE" : "#B3B3B3",
                width: 30,
                height: 30,
              }}
            />
          ))}
        </Box>
        {formik.touched.pin && formik.errors.pin && (
          <Typography color="error" sx={{ my: 2 }}>
            {formik.errors.pin}
          </Typography>
        )}
        <Button
          onClick={formik.handleSubmit}
          sx={{
            py: 1.5,
            px: 18,
            mb: 4,
            borderRadius: "8px",
            textTransform: "capitalize",
          }}
          variant="contained"
          role="button"
          aria-label="lanjutkan pembuatan pin baru"
        >
          Lanjutkan
        </Button>
      </Paper>
    </AuthLayout>
  );
};




