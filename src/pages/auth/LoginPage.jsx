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
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Fungsi login menggunakan Axios
const login = async (values) => {
  const response = await axios.post(
    "https://api.rupiapp.me/auth/signin",
    values
  );
  return response.data;
};

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  // Inisialisasi useMutation dengan fungsi login
  const mutation = useMutation({
    mutationFn: login, // Set mutationFn dengan fungsi login
    onSuccess: (data) => {
      console.log("Login successful, response data:", data); // Debug log
      alert("Login successful!");
    },
    onError: (error) => {
      console.error(
        "Login failed, error response:",
        error.response ? error.response.data : error.message
      ); // Debug log
      alert("Login failed. Please check your credentials.");
    },
  });

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
      mutation.mutate(values); // Panggil mutate dari useMutation
    },
  });

  return (
    <AuthLayout>
      <Box
        component={Paper}
        elevation={5}
        square={false}
        sx={{
          height: 617,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
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
            mx: 8,
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
          />
          {formik.touched.username && formik.errors.username ? (
            <Typography sx={{ fontSize: 10, color: "red" }}>
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
            InputProps={{
              style: { borderRadius: "8px", height: "3rem" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {formik.touched.password && formik.errors.password ? (
            <Typography sx={{ fontSize: 10, color: "red" }}>
              {formik.errors.password}
            </Typography>
          ) : null}
          <Grid container>
            <Grid item xs sx={{ mt: 1, mb: 2 }}>
              <Link href="#" variant="body2" style={{ textDecoration: "none" }}>
                Lupa ID/Password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 5, py: 1.5, borderRadius: "8px" }}
            disabled={mutation.isLoading} // Disable button when loading
          >
            {mutation.isLoading ? "Logging in..." : "Masuk"}
          </Button>
        </Box>
      </Box>
    </AuthLayout>
  );
};
