import { useRef, useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthLayout } from "../authLayout";
import { useVerifyOtp } from "../../services/auth/verify";
import { useNavigate } from "react-router-dom";
import SuccesAlert from "../../assets/components/AlertComponents/SuccesAlert";
import { useVerifyOtpResend } from "../../services/auth/verify-resend";
import { useAuthContext } from "../../context/AuthContext";
import FailAlert from "../../assets/components/AlertComponents/FailAlert";

export const VerifyOtpPage = () => {
  const inputRefs = useRef([]);
  const { user } = useAuthContext()
  const [ verifyStatus, setVerifyStatus ] = useState()
  const otp = useVerifyOtp();
  const resendOtp = useVerifyOtpResend();
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      type: "LOGIN",
      otp: ["", "", "", "", "", ""],
    },
    validationSchema: Yup.object().shape({
      otp: Yup.array()
        .of(
          Yup.string()
            .matches(/^[0-9]+$/, "Harus angka")
            .length(1, "Harus 1 digit")
        )
        .required("Kode OTP harus diisi"),
    }),
    onSubmit: async (values) => {
      const otpString = values.otp.join("");

      const payload = {
        ...values,
        otp: otpString,
      };

      try {
        const response = await otp.mutateAsync(payload);
        setVerifyStatus(response.message);
        console.log("status regis : ", verifyStatus)
        verifyStatus === "Registration verified" ? navigate("/set-password") : navigate("/beranda")
      } catch (error) {
        console.error("Login failed, error:", error); 
  
      }
      
    },
  });

  const handleChange = (index, event) => {
    const { value } = event.target;
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...formik.values.otp];
      newOtp[index] = value;
      formik.setFieldValue("otp", newOtp);
      if (value === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      } else if (index < formik.values.otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text/plain").slice(0, 6);
    const newOtp = [...formik.values.otp];
    for (let i = 0; i < newOtp.length; i++) {
      if (!isNaN(pasteData[i])) {
        newOtp[i] = pasteData[i];
      }
    }
    formik.setFieldValue("otp", newOtp);
  };

  const handleResendOtp = async () => {
    try {
      console.log("ini data user dari use : ", user)
      await resendOtp.mutateAsync(user.username);
      // await otp.mutateAsync(payload);
    } catch (error) {
      console.error("Resend OTP failed:", error);
      // Tangani error jika resend OTP gagal
    }
  };

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
          height: 617,
          my: "auto",
          pt: 8,
          px: 4,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mx: "auto", mt: 2 }}>
          Masukkan Kode Verifikasi
        </Typography>
        <Typography
          variant="body1"
          sx={{ mx: "auto", mt: 4, textAlign: "center" }}
        >
          Kami telah mengirimkan kode verifikasi 6 digit melalui WhatsApp ke
          nomor yang terdaftar
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box
            marginTop={4}
            justifyContent="center"
            display="flex"
            flexDirection="column"
            gap={4}
          >
            <Typography variant="body1" fontWeight="bold">
              Kode OTP
            </Typography>
            <Box display="flex" gap={3}>
              {formik.values.otp.map((digit, index) => (
                <Box key={index}>
                  <TextField
                    style={{
                      width: 38,
                      height: 38,
                      textAlign: "center",
                      fontSize: 14,
                    }}
                    variant="outlined"
                    size="small"
                    name={`otp[${index}]`}
                    value={digit}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace" && index > 0 && !digit) {
                        inputRefs.current[index - 1].focus();
                      }
                    }}
                    onPaste={handlePaste}
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: "center" },
                    }}
                    inputRef={(el) => (inputRefs.current[index] = el)}
                  />
                </Box>
              ))}
            </Box>
            <Typography onClick={handleResendOtp} 
            sx={{
              color: "#B3B3B3",
              cursor: "pointer",
              "&:hover": {
                color: "#1976d2", 
              },
            }}>Kirim Kode Baru </Typography>
            {/* <h1>Welcome, {user ? user.username : "Guest"}</h1> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 5, py: 1.5, borderRadius: "8px" }}
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Lanjutkan
            </Button>
          </Box>
        </form>
      </Paper>
      {otp.isError && (
        <FailAlert message={otp.error?.response?.data?.message || otp.error?.message} title="Verifikasi Gagal" />
      )}
      {otp.isSuccess && (
        <SuccesAlert message="" title="Verifikasi Berhasil" />
      )}
      {/* <SuccesAlert message="" title="Login Berhasil"/> */}
    </AuthLayout>
  );
};

// export default VerifyOtpPage;
