import { Box, Button, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthLayout } from "../authLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSetPin } from "../../services/auth/set-pin";

export const KonfirmasiPinPage = () => {

  const { state } = useLocation();

  const pinData = state?.payload; 

  const pin = useSetPin()
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      pin: ["", "", "", "", "", ""],
    },
    validationSchema: Yup.object({
      pin: Yup.array()
        .of(
          Yup.string()
            .matches(/^[0-9]+$/, "Must be a digit")
            .length(1, "Must be 1 digit")
        )
        .required("PIN is required"),
    }),
    onSubmit: async (values) => {
      const pinString = values.otp.join("");
      const payload = {
        ...values,
        pin: pinString,
      };

      if (pinString !== pinData?.pin) {
        alert("PIN tidak sesuai");
        return;
      }
      try {
        await pin.mutateAsync(payload);
        navigate("/beranda")
      } catch (error) {
        console.log(error)
      }
    },
  });

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
          Masukkan PIN
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
      </Paper>
    </AuthLayout>
  );
}
