import { Box, Button, Paper, Typography, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthLayout } from "../authLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSetPin } from "../../services/auth/set-pin";
import { useEffect } from "react";

export const KonfirmasiPinPage = () => {
  const { state } = useLocation();
  console.log("state : ", state);
  const pinData = state?.pin;

  const pinMutation = useSetPin();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      pin:pinData,
      confirm_pin: "",
    },
    validationSchema: Yup.object({
      confirm_pin: Yup.string()
        .length(6, "PIN harus terdiri dari 6 digit")
        .matches(/^\d+$/, "PIN harus berisi angka saja")
        .required("PIN diperlukan"),
    }),
    onSubmit: async (values) => {
      if (values.confirm_pin !== pinData) {
        formik.setFieldError('confirm_pin', 'PIN tidak sesuai');
        return;
      }

      try {
        await pinMutation.mutateAsync(values);
        navigate("/beranda");
      } catch (error) {
        console.error("PIN confirmation failed, error:", error);
      }
    },
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (key === "Enter") {
        formik.handleSubmit();
      } else if (key >= "0" && key <= "9") {
        if (formik.values.confirm_pin.length < 6) {
          formik.setFieldValue("confirm_pin", formik.values.confirm_pin + key);
        }
      } else if (key === "Backspace") {
        formik.setFieldValue("confirm_pin", formik.values.confirm_pin.slice(0, -1));
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [formik.values.confirm_pin]);

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
        <Typography variant="h4" sx={{ fontWeight: 600, mx: "auto", mt: 10 }}>
          Konfirmasi PIN
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
          {Array.from({ length: 6 }, (_, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "50%",
                bgcolor: formik.values.confirm_pin[index] ? "#0066AE" : "#B3B3B3",
                width: 30,
                height: 30,
              }}
            />
          ))}
        </Box>
        {formik.touched.confirm_pin && formik.errors.confirm_pin && (
          <Typography color="error" sx={{ my: 2 }}>
            {formik.errors.confirm_pin}
          </Typography>
        )}
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
      </Paper>
    </AuthLayout>
  );
};
