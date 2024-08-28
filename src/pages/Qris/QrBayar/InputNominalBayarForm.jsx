import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImgPenerima from "../../../assets/img/user-rectangle.png";
import NominalInput from "../../../assets/components/Inputs/NominalInput";
import { CardAccountInfo } from "../../../assets/components/Cards/CardAccountInfo";
import PropTypes from "prop-types"
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { useGetQrisDetail } from "../../../services/qris/get-qris-detail";
import FailAlert from "../../../assets/components/Alerts/FailAlert";
import { useEffect } from "react";


export const InputNominalBayarForm = ({ onNext }) => {
	const { account } = useAuthContext()
	const { state } = useLocation();
	const qris = state.qris || {};
	const navigate = useNavigate()

	const { data: detailQris, error, isError, isLoading } = useGetQrisDetail(qris)

	// const [detail, setDetail] = useState(null);

	// useEffect(() => {
	// 	if (detailQris) {
	// 		setDetail(detailQris);
	// 	}
	// }, [detailQris]);

	const formik = useFormik({
		initialValues: {
			merchant: detailQris?.merchant,
			transaction_id: detailQris?.transaction_id,
			qris: qris,
			amount: "",
			description: "",
			pin: "",
		},
		validationSchema: Yup.object({
			amount: Yup.string().required("Nominal transfer harus diisi"),
		}),
		onSubmit: async (values) => {
			onNext(values);
		},
	});
	useEffect(() => {
		if (isError) {
			setTimeout(() => {
				navigate(-1);
			}, 5000);
		}
	}, [isError, navigate]);

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
							<Typography sx={{ fontWeight: "bold" }}>{detailQris?.merchant}</Typography>
							<Typography variant="caption">Id Transaksi - {detailQris?.transaction_id}</Typography>
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
					{formik.touched.amount && formik.errors.amount ? (
						<Typography id="amount-error" variant="body2" sx={{ color: "red" }}>
							{formik.errors.amount}
						</Typography>
					) : null}
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
						sx={{ mb: 5, py: 1.5, borderRadius: 2, textTransform: "capitalize" }}
						disabled={isLoading}
						aria-label="Lanjutkan transfer"
					>
						Lanjutkan
					</Button>
				</Grid>
			</Grid>
			{isError && (
				<FailAlert message="Lakukan scan ulang" title="QR Tidak Valid" />
			)}
		</form>
	);
};

InputNominalBayarForm.propTypes = {
	onNext: PropTypes.any,
};
