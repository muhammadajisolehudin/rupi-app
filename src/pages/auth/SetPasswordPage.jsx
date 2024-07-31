// import { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import checklistIcon from "../../assets/img/checklist-icon.png";
import { AuthLayout } from "../authLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSetPassword } from "../../services/auth/set-password";
import { Navigate } from "react-router-dom";

export default function SetPasswordPage() {
  // const [password, setPassword] = useState("");
  // const [confirm_password, setconfirm_password] = useState("");
  // const [isPasswordCompleted, setIsPasswordCompleted] = useState(false);
  // const [passwordError, setPasswordError] = useState("");
  // const navigate = useNavigate();

  const password = useSetPassword();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
          /[@$!%*?&#]/,
          "Password must contain at least one special character"
        )
        .required("Required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        await password.mutateAsync(values);
        Navigate("/set-pin"); // Navigasi ke halaman beranda setelah login sukses
      } catch (error) {
        console.error("Login failed, error:", error); // Debug log
        // Error handling sudah diatur di dalam useLoginMutation
      }

    },
  });

  // const handleButtonClick = () => {
  //   if (password && confirm_password && password === confirm_password) {
  //     setIsPasswordCompleted(true);
  //     setPasswordError("");
  //     console.log("Password successfully set");
  //     setTimeout(() => {
  //       navigate("/masuk-pin");
  //     }, 1500);
  //   } else {
  //     setPasswordError("Kedua password harus cocok");
  //     console.log("Passwords do not match or are empty");
  //   }
  // };

  return (
    <AuthLayout>
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 2,
          alignItems: "center",
          flexDirection: "column",
          // width: 452,
          height: 617,
          my: "auto",
          pt: 8,
          px: 4,
        }}
      >
        {/* {!isPasswordCompleted ? ( */}
        {/* <> */}
        <Typography variant="h4" sx={{ fontWeight: 600, mx: "auto", mt: 2 }}>
          Buat Password Baru
        </Typography>
        <Typography
          variant="body1"
          sx={{ mx: "auto", mt: 2, textAlign: "center" }}
        >
          Password baru Anda harus berbeda dengan password yang digunakan
          sebelumnya.
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            my: 1,
            mx: 1,
            // display: "flex",
            // flexDirection: "column",
          }}
        >
          <label htmlFor="password" style={{ justifyContent: "flex-start" }}>
            Password
          </label>
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Masukan password baru"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            InputProps={{
              style: { borderRadius: "8px", height: "3rem" },
            }}
            autoFocus
          />
          {formik.touched.password && formik.errors.password ? (
            <Typography sx={{ fontSize: 10, color: "red" }}>
              {formik.errors.password}
            </Typography>
          ) : null}
          <label
            htmlFor="confirm_password"
            style={{ justifyContent: "flex-start" }}
          >
            Confirm Password
          </label>
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            type="password"
            // type={showconfirm_password ? "text" : "confirm_password"}
            id="confirm_password"
            placeholder="Masuksn ulang password"
            autoComplete="current-confirm_password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirm_password}
            InputProps={{
              style: { borderRadius: "8px", height: "3rem" },
            }}
            autoFocus
          />
          {formik.touched.confirm_password && formik.errors.confirm_password ? (
            <Typography sx={{ fontSize: 10, color: "red" }}>
              {formik.errors.confirm_password}
            </Typography>
          ) : null}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 4, mb: 5, py: 1.5, borderRadius: "8px" }}
            // disabled={mutation.isLoading}
          >
            Lanjutkan
          </Button>
        </Box>
      </Paper>
    </AuthLayout>
  );
}
