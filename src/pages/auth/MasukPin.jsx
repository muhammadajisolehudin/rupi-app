import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../authLayout";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function PinPage() {
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
    onSubmit: (values) => {
      const pinValue = parseInt(values.pin.join(""), 10);
      console.log(pinValue);
      console.log("Navigate to Beranda page");

      navigate("/beranda");
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
