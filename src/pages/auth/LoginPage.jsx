import { useState } from "react";
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
import SuccesAlert from "../../assets/components/Alerts/SuccesAlert";
import FailAlert from "../../assets/components/Alerts/FailAlert";
import { useAuthContext } from "../../context/AuthContext";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login, isLoading: isLoadingLogin, isSuccess: isSuccessLogin, error: errorLogin } = useAuthContext();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username harus diisi"),
      password: Yup.string()
        .min(6, "password minimal 8 karakter")
        .required("Password harus diisi"),
    }),
    onSubmit: async (values) => {
      try {
        await login(values);
        navigate("/verify");
      } catch (error) {
        console.error("Login failed, error:", error);
      }
    }
  })

  return (
    <AuthLayout>
      <Paper
        elevation={5}
        square={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          my: "auto",
          py: 5,
          px: 4,
        }}
      >
        <Typography
          // component="h1"
          variant="h4"
          sx={{
            fontWeight: "bold",
            // fontSize: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 5,
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
            placeholder="Masukkan Username"
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
            <Typography id="username-error" variant="body2" sx={{ color: "red" }}>
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
            <Typography id="password-error" variant="body2" sx={{ color: "red" }}>
              {formik.errors.password}
            </Typography>
          ) : null}
          <Grid container>
            <Grid item xs sx={{ mt: 1, mb: 2 }}>
              <Link href="#"
                variant="body2"
                style={{ textDecoration: "none" }}
                role="button"
                aria-label="Button Lupa Username atau Password">
                Lupa Username/Password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, py: 1.5, borderRadius: "8px" }}
            disabled={isLoadingLogin}
            aria-label="Button Masuk"
          >
            {isLoadingLogin ? "Logging in..." : "Masuk"}
          </Button>
        </Box>
      </Paper>
      {errorLogin && (
        <FailAlert message={errorLogin?.response?.data?.message || errorLogin?.message} title="Login Gagal" />
      )}
      {isSuccessLogin && (
        <SuccesAlert message="" title="Login Berhasil" />
      )}
    </AuthLayout>
  );
};

