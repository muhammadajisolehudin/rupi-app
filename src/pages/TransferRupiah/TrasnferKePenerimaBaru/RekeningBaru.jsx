import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import BcaIcon from "../../../assets/img/icons/bcaIcon.png";

export const RekeningBaru = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      account_number: "",
    },
    validationSchema: Yup.object({
      account_number: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log("Form Submitted", values);
      onNext(values);
      // Panggil fungsi mutate di sini jika menggunakan useMutation
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={5} sx={{
        py: 6,
        px: 4,
      }}>
        <Grid item xs={12} p={0} m={0}>
          <img src={BcaIcon} alt="BCA Icon" />
          <Box onSubmit={formik.handleSubmit} width="100%" mt={2} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="account_number"
              name="account_number"
              type="text"
              autoComplete="off"
              placeholder="Masukkan Nomor Rekening"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.account_number}
              InputProps={{
                style: { borderRadius: "8px", height: "3rem" },
              }}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 5, py: 1.5, borderRadius: 2 }}
            // disabled={mutation.isLoading}
            >
              Lanjutkan
            </Button>
          </Box>
        </Grid>

      </Grid>
    </form>



  );
};
