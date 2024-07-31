import { Card, Container, TextField } from "@mui/material";
import { Layout } from "../layout";
import BreadcrumbsComponent from "../../assets/components/layoutsComponents/Breadcrumbs";
import { BreadcrumbsTranferRupiah } from "../../assets/components/layoutsComponents/BreadcrumbsTransferRupiah";
import { Form } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const MaukanNominalTranferPage = () => {

    const formik = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .matches(
            /[a-z]/,
            "Password must contain at least one lowercase letter"
          )
          .matches(
            /[A-Z]/,
            "Password must contain at least one uppercase letter"
          )
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

    return(
        <Layout>
      <Container sx={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}>
        <BreadcrumbsComponent />
        <Card>
          <BreadcrumbsTranferRupiah />
          <Form>
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
          </Form>
        </Card>
      </Container>
    </Layout>

    )
    
} 