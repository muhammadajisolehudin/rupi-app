import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { AuthLayout } from "../authLayout";
import { useFormik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../services/auth/signin";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const mutation = useLogin(); // Gunakan useLoginMutation dari authService

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
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
    }),
    onSubmit: async (values) => {
      console.log("Form Submitted", values); // Debug log
      try {
        await mutation.mutateAsync(values); // Panggil mutateAsync dari useLoginMutation
        navigate("/verify"); // Navigasi ke halaman beranda setelah login sukses
      } catch (error) {
        console.error("Login failed, error:", error); // Debug log
        // Error handling sudah diatur di dalam useLoginMutation
      }
    },
  });

  return (
    <AuthLayout>
      <Box
        component={Paper}
        elevation={5}
        square={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          my: "auto",
          height: 617,
          px: 4,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 5,
          }}
        >
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            my: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="username" style={{ justifyContent: "flex-start" }}>
            Username
          </label>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder="Masukkan Rupiah Id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            InputProps={{
              style: { borderRadius: "8px", height: "3rem" },
            }}
            autoFocus
            aria-required="true"
            aria-invalid={formik.touched.username && formik.errors.username ? "true" : "false"}
            aria-describedby="username-error"
            aria-label="Masukkan username"
          />
          {formik.touched.username && formik.errors.username ? (
            <Typography id="username-error" sx={{ fontSize: 10, color: "red" }}>
              {formik.errors.username}
            </Typography>
          ) : null}
          <label htmlFor="password" style={{ justifyContent: "flex-start" }}>
            Password
          </label>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Masukkan Password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            aria-required="true"
            aria-invalid={formik.touched.password && formik.errors.password ? "true" : "false"}
            aria-describedby="password-error"
            aria-label="Masukkan password"
            InputProps={{
              style: { borderRadius: "8px", height: "3rem" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Button tampilkan password"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {formik.touched.password && formik.errors.password ? (
            <Typography id="password-error" sx={{ fontSize: 10, color: "red" }}>
              {formik.errors.password}
            </Typography>
          ) : null}
          <Grid container>
            <Grid item xs sx={{ mt: 1, mb: 2 }}>
              <Link
                href="#"
                variant="body2"
                style={{ textDecoration: "none" }}
                role="button"
                aria-label="Button Lupa ID/Password"
              >
                Lupa ID/Password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 5, py: 1.5, borderRadius: "8px" }}
            disabled={mutation.isLoading}
            aria-label="Button Masuk"
          >
            {mutation.isLoading ? "Logging in..." : "Masuk"}
          </Button>
        </Box>
      </Box>
    </AuthLayout>
  );
};


