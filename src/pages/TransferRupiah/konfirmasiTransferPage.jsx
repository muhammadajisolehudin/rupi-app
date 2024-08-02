import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Layout } from "../layout";
import BreadcrumbsComponent from "../../assets/components/layoutsComponents/Breadcrumbs";
import { BreadcrumbsTranferRupiah } from "../../assets/components/layoutsComponents/BreadcrumbsTransferRupiah";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImgPenerima from "../../assets/img/user-rectangle.png";

export const KonfirmasiTransferPage = () => {
  const formik = useFormik({
    initialValues: {
      account_number: "",
    },
    validationSchema: Yup.object({
      account_number: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log("Form Submitted", values);
      // Panggil fungsi mutate di sini jika menggunakan useMutation
    },
  });

  return (
    <Layout>
      <Container sx={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}>
        <BreadcrumbsComponent />
        <Card sx={{ mt: 6, mb: 4 }}>
          <BreadcrumbsTranferRupiah />
          <Box
            sx={{
              py: 6,
              px: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <Grid container>
              <Grid item xs={12} p={0} m={0}>
                <Typography sx={{ fontWeight: "bold" }}>Penerima</Typography>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  // spacing={4}
                >
                  <Grid item xs={1}>
                    <img
                      src={ImgPenerima}
                      alt="user-penerima-transfer"
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    ></img>
                  </Grid>
                  <Grid item xs={11} sx={{ pl: 3 }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Nama Penerima
                    </Typography>
                    <Typography variant="caption">
                      Nama Bank - No rekenig 12345678
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} mt={3} pt={1}>
                <hr
                  style={{
                    border: "1px solid #B3B3B3",
                  }}
                />
                <Grid
                  container
                  sx={{
                    display: "flex",
                    gap: 1,
                    //   px: 3,
                    py: 2,
                    mt: 2,
                  }}
                  // spacing={2}
                >
                  <Grid
                    //   item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between", // Corrected to 'space-between'
                      alignItems: "center", // Align items vertically centered
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      Nominal Transfer
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {" "}
                      Rp. 12345{" "}
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between", // Corrected to 'space-between'
                      alignItems: "center", // Align items vertically centered
                    }}
                  >
                    <Typography>Biaya Transfer </Typography>
                    <Typography sx={{ fontWeight: "bold" }}> Rp. </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} mt={1}>
                <hr
                  style={{
                    border: "1px solid #B3B3B3",
                  }}
                />
                <Typography mt={4}>Sumber Rupiah</Typography>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    gap: 1,
                    border: "#B3B3B3 solid 1px",
                    borderRadius: 2,
                    //   px: 3,
                    py: 2,
                    mt: 2,
                  }}
                  // spacing={2}
                >
                  <Grid
                    //   item
                    xs={1.5}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-end", // Horizontal kanan
                    }}
                  >
                    <Typography variant="caption">No. Rekening </Typography>
                    <Typography variant="caption"> Saldo </Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Typography variant="body2">12345677890 </Typography>
                    <Typography variant="body2"> 1.000.000 </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  // bgcolor: "red",
                  // p: 0,
                  mt: 4,
                }}
              >
                <Typography sx={{ mt: 0, pt: 0 }}>Catatan Transfer</Typography>
                <TextField
                  sx={{ width: "100%" }}
                  value="Ini adalah nilai hanya untuk ditampilkan"
                  disabled
                  InputProps={{
                    readOnly: true, // Menambahkan properti readOnly untuk menampilkan sebagai teks
                  }}
                />
              </Grid>
              <Grid item xs={12} mt={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mb: 5, py: 1.5, borderRadius: 2 }}
                  // disabled={mutation.isLoading}
                >
                  Lanjutkan
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Layout>
  );
};
