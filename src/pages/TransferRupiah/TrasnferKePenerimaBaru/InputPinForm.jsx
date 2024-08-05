import { useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import PinInput from "../../../assets/components/inputComponnet/PinInput";
import PropTypes from 'prop-types';
import { useAddTransaksiIntrabank } from "../../../services/transfer-rupiah/add-transaksi-intrabank";

export const InputPinForm = ({ onNext }) => {

  const transaksiIntrabank = useAddTransaksiIntrabank();

  const formik = useFormik({
    initialValues: {
      destination_id: onNext.destination_id,
      amount: onNext.amount,
      description: onNext.description,
      type: onNext.type,
      pin: ["", "", "", "", "", ""],
      transaction_purpose: onNext.transaction_purpose,
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
      try {
        console.log("Form Submitted", values);
        await transaksiIntrabank.mutateAsync(values);
        onNext(values);
      } catch (error) {
        console.log("ini error nya :", error);
      }
     
      
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
              mt: 4,
            }}
            variant="contained"
          >
            Lanjutkan
          </Button>
        </Grid>
      </FormikProvider>
  );
};

InputPinForm.propTypes = {
  onNext: PropTypes.any,
};
