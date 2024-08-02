import { Box, Button, Card, Container, Grid, TextField, Typography } from "@mui/material";
import { Layout } from "../layout";
import BreadcrumbsComponent from "../../assets/components/layoutsComponents/Breadcrumbs";
import { BreadcrumbsTranferRupiah } from "../../assets/components/layoutsComponents/BreadcrumbsTransferRupiah";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImgPenerima from "../../assets/img/user-rectangle.png"



export const NominalTransferPage = () => {
    const formik = useFormik({
      initialValues: {
        destination_id: "",
        amount: "",
        description: "",
        type: "TRANSFER",
        pin: "",
        transaction_purpose: "",
      },
      validationSchema: Yup.object({
        amount: Yup.string().required("Required"),
        deskripsi: Yup.string().required("Required"),
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
          <Card sx={{ mt: 6 }}>
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
              <Grid container spacing={5}>
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
                <Grid item xs={12}>
                  <Typography>Sumber Rupiah</Typography>
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
                <Grid item xs={12}>
                  <Box
                    sx={{
                      backgroundColor: "#EFEFEF",
                      width: "100%",
                      borderRadius: 2,
                      px: 3,
                      py: 2,
                    }}
                  >
                    <Typography variant="caption">Nominal Transfer</Typography>
                    <Box display="flex">
                      <Typography variant="caption" sx={{ mt: 2 }}>
                        Rp.
                      </Typography>
                      <TextField
                        id="amount"
                        name="amount"
                        type="number"
                        autoComplete="amount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.amount}
                        autoFocus
                        sx={{
                          height: "3rem",
                          pl: 0,
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        InputProps={{
                          style: {
                            height: "3rem",
                            fontSize: "18px",
                            ml: 0,
                            pl: 0,
                            color: "#B3B3B3",
                          },
                        }}
                      ></TextField>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Typography sx={{ mt: 0, pt: 0 }}>
                    Catatan Transfer
                  </Typography>
                  <TextField
                    id="description"
                    name="description"
                    type="text"
                    autoComplete="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    autoFocus
                    sx={{ width: "100%" }}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
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
                {/* <Button item
                  type="submit"
                  //   fullWidth
                  variant="contained"
                  sx={{ mt: 4, mb: 5, py: 1.5, borderRadius: 2 }}
                  // disabled={mutation.isLoading}
                >
                  Lanjutkan
                </Button> */}
              </Grid>
            </Box>
          </Card>
        </Container>
      </Layout>
    );
};
