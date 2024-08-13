import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImgPenerima from "../../../assets/img/user-rectangle.png";
import NominalInput from "../../../assets/components/Inputs/NominalInput";
import { CardAccountInfo } from "../../../assets/components/Cards/CardAccountInfo";
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";


export const InputNominalBayarForm = ({ onNext }) => {
    const { account } = useAuthContext()
    const { state } = useLocation();
    const qris = state.qris || {}; 

    const formik = useFormik({
        initialValues: {
            qris: qris,
            amount: "",
            description: "",
            pin: "",
        },
        validationSchema: Yup.object({
            amount: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            onNext(values);
        },
    });

	return (
		<form onSubmit={formik.handleSubmit}>
			<Grid
				container
				spacing={5}
				sx={{
					py: 6,
					px: 4,
				}}
			>
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
								alt="Foto user penerima transfer"
								style={{
									width: 60,
									height: 60,
									borderRadius: "50%",
									objectFit: "cover",
								}}
								aria-hidden="true"
							></img>
						</Grid>
						<Grid item xs={11} sx={{ pl: 3 }}>
							<Typography sx={{ fontWeight: "bold" }}>Nama Penerima</Typography>
							<Typography variant="caption">Nama Bank - No rekenig 12345678</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Typography>Sumber Rupiah</Typography>
					<CardAccountInfo accountNumber={account.account_number} balance={account.balance} />
				</Grid>
				<Grid item xs={12}>
					<NominalInput
						text={"Nominal Transfer"}
						value={formik.values.amount}
						onChange={formik.handleChange}
						aria-label="Input Nominal Transfer"
					/>
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
					<Typography sx={{ mt: 0, pt: 0 }}>Catatan Transfer</Typography>
					<TextField
						id="description"
						name="description"
						type="text"
						autoComplete="description"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.description}
						autoFocus
						aria-label="input description transfer"
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
						aria-label="Lanjutkan transfer"
					>
						Lanjutkan
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

InputNominalBayarForm.propTypes = {
	onNext: PropTypes.any,
};
