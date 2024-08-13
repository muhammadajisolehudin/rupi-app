import * as Yup from "yup";
import { useState, useEffect } from "react"; 
import { useFormik } from "formik";
import { Box, Card, Container, Paper, TextField, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import { CardAccountInfo } from "../cardComponents/CardAccountInfo";

import checklistIcon from "../../img/checklist-icon.png";
import logoIcon from "/logo.png";

import { useGenerateTransactionToken } from "../../../services/tarik-setor-tunai/generate-token";

const RequestNominalForm = ({ onNext }) => {
	const formikRequest = useFormik({
		initialValues: {
			nominal: "",
			namaToken: "",
		},
		validationSchema: Yup.object({
			nominal: Yup.number().min(50000, "Nominal Tarik Tunai minimal IDR 50.000").required("Required"),
			namaToken: Yup.string().min(6, "Must be at least 6 characters"),
		}),
		onSubmit: (values) => {
			onNext({ nominal: values.nominal, namaToken: values.namaToken });
		},
	});

	return (
		<>
			<Container>
				<form onSubmit={formikRequest.handleSubmit}>
					<Typography variant="h6" sx={{ mt: 5 }}>
						Rekening Tujuan
					</Typography>
					<CardAccountInfo role="region" aria-labelledby="account-info-label" />

					<Box sx={{ bgcolor: "#EFEFEF", borderRadius: 1, p: 1, mt: 4 }}>
						<Typography>Nominal Bayar</Typography>
						<TextField
							aria-label="input nominal"
							margin="normal"
							name="nominal"
							type="number"
							id="nominal"
							placeholder="Rp 0"
							autoComplete="current-nominal"
							fullWidth
							required
							onChange={formikRequest.handleChange}
							onBlur={formikRequest.handleBlur}
							value={formikRequest.values.nominal}
							error={formikRequest.touched.nominal && Boolean(formikRequest.errors.nominal)}
							helperText={formikRequest.touched.nominal && formikRequest.errors.nominal}
						/>
					</Box>
					{formikRequest.touched.nominal && formikRequest.errors.nominal ? (
						<Typography sx={{ fontSize: 10, color: "red", mt: 2 }}>{formikRequest.errors.nominal}</Typography>
					) : (
						<Typography sx={{ fontSize: 12, color: "grey", mt: 2 }}>
							Nominal Tarik Tunai minimal IDR 50.000
						</Typography>
					)}

					<Typography sx={{ mt: 4 }}>Beri Nama Token</Typography>
					<TextField
						aria-label="tambahkan nama token tarik tunai"
						margin="normal"
						name="namaToken"
						type="text"
						id="namaToken"
						placeholder="Tambahkan nama token tarik tunai"
						autoComplete="current-nominal"
						fullWidth
						onChange={formikRequest.handleChange}
						onBlur={formikRequest.handleBlur}
						value={formikRequest.values.namaToken}
					/>
					{formikRequest.touched.namaToken && formikRequest.errors.namaToken ? (
						<Typography sx={{ fontSize: 10, color: "red", mt: 2 }}>{formikRequest.errors.namaToken}</Typography>
					) : null}

					<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 5 }}>
						<button
							type="submit"
							style={{
								borderRadius: "15px",
								border: 0,
								padding: "8px",
								width: "500px",
								backgroundColor: "#0066AE",
								color: "white",
							}}
							aria-label="submit request tarik tunai form"
						>
							Lanjutkan
						</button>
					</Box>
				</form>
			</Container>
		</>
	);
};


const KonfirmasiForm = ({ formData, onNext }) => {
	const formikKonfirmasi = useFormik({
		initialValues: {
			nominal: formData.nominal,
			namaToken: formData.namaToken || "",
		},
		onSubmit: (values) => {
			onNext({ ...formData, ...values });
		},
	});

	return (
		<>
			<Container>
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", my: 2 }}>
					<img src={logoIcon} alt="" style={{ marginRight: "5px" }} />
					<Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
						Rupi App
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 4, mt: 2 }}>
					<Typography variant={"h6"} sx={{ fontWeight: "bold" }} aria-label="konfirmasi tarik tunai">
						Konfirmasi Tarik Tunai
					</Typography>
				</Box>

				<Box sx={{ my: 2 }}>
					<hr />
					<Box sx={{ display: "flex", justifyContent: "space-between" }} aria-label="nominal penarikan">
						<Typography>Nominal Penarikan</Typography>
						<Typography sx={{ fontWeight: "bold" }}>Rp. {formikKonfirmasi.values.nominal}</Typography>
					</Box>
					<Box sx={{ display: "flex", justifyContent: "space-between" }} aria-label="nama token penarikan">
						<Typography>Nama Token</Typography>
						<Typography sx={{ fontWeight: "bold" }}>{formikKonfirmasi.values.namaToken} </Typography>
					</Box>
				</Box>
				<hr />
				<Box sx={{ my: 3 }}>
					<Typography variant="h6" sx={{ mt: 5 }} aria-label="sumber dana rupiah">
						Sumber Rupiah
					</Typography>
					<CardAccountInfo role="region" aria-labelledby="account-info-label" />
				</Box>
				<hr />

				<form onSubmit={formikKonfirmasi.handleSubmit}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							my: 5,
						}}
					>
						<Box sx={{ my: 3, color: "grey" }}>Token hanya valid selama 1 jam</Box>
						<button
							type="submit"
							style={{
								borderRadius: "15px",
								border: 0,
								padding: "8px",
								width: "500px",
								backgroundColor: "#0066AE",
								color: "white",
							}}
							aria-label="submit confirmation form"
						>
							Lanjutkan
						</button>
					</Box>
				</form>
			</Container>
		</>
	);
};

const InputPinForm = ({ formData, onNext }) => {
	const { mutate: generateToken, isLoading } = useGenerateTransactionToken();

	const [pin, setPin] = useState(["", "", "", "", "", ""]);
	const [pinError, setPinError] = useState("");

	console.log("formData in InputPinForm: ", formData);

	const nominal = formData.nominal;
	console.log("Nominal INputPinForm: ", nominal);

	const formik = useFormik({
		initialValues: {
			nominal: nominal,
		},
		onSubmit: () => {
			const pinValue = pin.join("");
			console.log("Pin Value: ", pinValue);
			try {
				pinSchema.validateSync(pinValue);
				setPinError("");
				generateToken(
					{
						amount: nominal,
						type: "WITHDRAW",
						pin: pinValue,
					},
					{
						onSuccess: (response) => {
							const token = response.data.data.code;
							const expiredAt = response.data.data.expired_at;
							const amount = response.data.data.amount;
							console.log("Token, ExpiredAt, Ammount: ", token, expiredAt, amount);

							onNext({ tokenResponse: { token, expiredAt, amount } });
							console.log("Token generated successfully: ", response);
						},
						onError: (err) => {
							console.error("Error generating token:", err);
						},
					}
				);
			} catch (validationError) {
				setPinError(validationError.message);
			}
		},
	});

	useEffect(() => {
		const handleKeyDown = (event) => {
			const key = event.key;
			if (key === "Enter") {
				handleButtonClick();
			}

			if (key >= "0" && key <= "9") {
				const index = pin.findIndex((entry) => entry === "");
				if (index !== -1) {
					const newPin = [...pin];
					newPin[index] = key;
					setPin(newPin);
				}
			} else if (key === "Backspace") {
				const index = pin
					.slice()
					.reverse()
					.findIndex((entry) => entry !== "");
				if (index !== -1) {
					const newPin = [...pin];
					const originalIndex = pin.length - 1 - index;
					newPin[originalIndex] = "";
					setPin(newPin);
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [pin]);

	const pinSchema = Yup.string()
		.length(6, "PIN harus terdiri dari 6 digit")
		.required("PIN diperlukan");

	const handleButtonClick = () => {
		formik.handleSubmit();
	};

	return (
		<Box
			sx={{
				paddingY: 10,
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography variant="h5" sx={{ fontWeight: 600, mx: "auto", my: 5 }}>
				Masukkan PIN
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "row",
					gap: 2,
					mt: 5,
				}}
			>
				{[...Array(6)].map((_, index) => (
					<Box
						key={index}
						sx={{
							borderRadius: "50%",
							bgcolor: pin[index] ? "#0066AE" : "#B3B3B3",
							width: 30,
							height: 30,
						}}
					/>
				))}
			</Box>
			{pinError && (
				<Typography color="error" sx={{ mt: 3, fontSize: "14px" }}>
					{pinError}
				</Typography>
			)}
			<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 10 }}>
				<button
					onClick={handleButtonClick}
					type="button"
					style={{
						borderRadius: "10px",
						border: 0,
						padding: "11px",
						width: "800px",
						backgroundColor: "#0066AE",
						color: "white",
					}}
					aria-label="submit pin"
					disabled={isLoading}
				>
					Lanjutkan
				</button>
			</Box>
		</Box>
	);
};

const TokenTarik = ({ tokenData }) => {
	const { token, expiredAt, amount } = tokenData;

	return (
		<>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					my: 4,
					flexDirection: "column",
				}}
			>
				<img
					src={checklistIcon}
					alt="checklist icon"
					style={{ margin: "10px", width: "136px", height: "136px" }}
				/>
				<Typography sx={{ fontWeight: "bold" }} variant={"h6"}>
					Uang Siap Ditarik
				</Typography>
				<Typography sx={{ fontSize: "20px", color: "grey", mt: 2 }}>
					{new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })} . {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
				</Typography>
				<Typography sx={{ fontSize: "20px", color: "grey", mb: 2 }}>No. Ref 12736192837636</Typography>
			</Box>

			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
				<Card component={Paper} elevation={4} sx={{ width: "550px", px: 4, py: 3 }}>
					<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
						<Box>
							<Typography sx={{ fontSize: "12px", color: "grey" }}>Nominal</Typography>
							<Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0A3967" }}>
								Rp {amount.toLocaleString('id-ID')}
							</Typography>
						</Box>

						<Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
							<Typography sx={{ fontSize: "12px", color: "grey" }}>Berlaku Hingga</Typography>
							<Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0A3967" }}>
								{new Date(expiredAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							my: 1,
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-evenly",
								bgcolor: "#E4EDFF",
								p: 1,
								width: "415px",
							}}
						>
							<Typography>Kode Penarikan</Typography>
							<Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0066AE" }}>
								{token}
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							mt: 2,
							color: "#0066AE",
						}}
					>
						<ShareIcon />
						<Typography sx={{ ml: 1 }}>Bagikan Kode</Typography>
					</Box>
				</Card>
			</Box>

			<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 5 }}>
				<button
					type="button"
					style={{
						borderRadius: "10px",
						border: 0,
						padding: "11px",
						width: "800px",
						backgroundColor: "#0066AE",
						color: "white",
					}}
					onClick={() => window.location.reload()}
					aria-label="button make new token"
				>
					Buat Token Baru
				</button>
			</Box>
		</>
	);
};

export const TarikTunai = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({});
	const [tokenData, setTokenData] = useState(null);

	const handleNext = (values) => {
		console.log("handleNext called with values:", values);
		if (values.tokenResponse) {
			setTokenData(values.tokenResponse);
			setStep((prevStep) => prevStep + 1);
		} else {
			setFormData((prevData) => ({ ...prevData, ...values }));
			setStep((prevStep) => prevStep + 1);
		}
	};

	return (
		<>
			{step === 1 && <RequestNominalForm onNext={handleNext} />}
			{step === 2 && <KonfirmasiForm formData={formData} onNext={handleNext} />}
			{step === 3 && <InputPinForm formData={formData} onNext={handleNext} />}
			{step === 4 && <TokenTarik tokenData={tokenData} />}
		</>
	);
};
