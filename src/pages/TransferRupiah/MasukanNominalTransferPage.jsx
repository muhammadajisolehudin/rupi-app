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
        account_number: "",
      },
      validationSchema: Yup.object({
        account_number: Yup.string().required("Required"),
      }),
      onSubmit: async (values) => {
        console.log("Form Submitted", values); // Debug log
        // mutation.mutate(values); // Panggil mutate dari useMutation
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
              id="account_number"
              name="account_number"
              type="text"
              autoComplete="account_number"
              placeholder="Masukkan Rupiah Id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.account_number}
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