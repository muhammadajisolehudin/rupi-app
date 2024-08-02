import React, { useEffect } from "react";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { Layout } from "../layout";
import BreadcrumbsComponent from "../../assets/components/layoutsComponents/Breadcrumbs";
import { BreadcrumbsTranferRupiah } from "../../assets/components/layoutsComponents/BreadcrumbsTransferRupiah";
import PinInput from "../../assets/components/inputComponnet/PinInput";
// import PinInput from "../../components/PinInput"; // Update path if needed

export const MasukanPinPage = () => {
  const formik = useFormik({
    initialValues: {
      destination_id: "",
      amount: "",
      description: "",
      type: "TRANSFER",
      pin: ["", "", "", "", "", ""],
      transaction_purpose: "",
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
      console.log("Form Submitted", values);
      // Call mutation function here if using useMutation
    },
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (key === "Enter") {
        formik.handleSubmit();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [formik]);

  return (
    <Layout>
      <Container sx={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}>
        <BreadcrumbsComponent />
        <Card sx={{ mt: 6, mb:4 }}>
          <BreadcrumbsTranferRupiah />
          <FormikProvider value={formik}>
            <Grid
              container
              sx={{
                py: 8,
                px: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Masukkan PIN
              </Typography>
              <PinInput />
              <Button
                onClick={formik.handleSubmit}
                fullWidth
                sx={{
                  py: 1.5,
                  px: 18,
                  borderRadius: 3,
                  textTransform: "capitalize",
                  mt:4,
                }}
                variant="contained"
              >
                Lanjutkan
              </Button>
            </Grid>
          </FormikProvider>
        </Card>
      </Container>
    </Layout>
  );
};
