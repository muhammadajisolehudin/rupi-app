import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Box, Container, Card, Paper, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import { CardAccountInfo } from "../cardComponents/CardAccountInfo";

import checklistIcon from "../../img/checklist-icon.png";

import { useAuthContext } from "../../../context/AuthContext";
import { useGenerateTransactionToken } from "../../../services/tarik-setor-tunai/generate-token";

const SetorTunaiAwal = ({ onNext }) => {
	const formikRequest = useFormik({
		initialValues: {},
		onSubmit: () => {
			const values = {
				accountNumber: "5667 2323 1444 5554",
				balance: 5000000,
			};
			onNext(values);
		},
	});

	return (
		<form onSubmit={formikRequest.handleSubmit}>
			<Container>
				<Typography variant="h6" sx={{ mt: 5 }}>
					Sumber Rupiah
				</Typography>
				<CardAccountInfo role="region" aria-labelledby="account-info-label" />

				<Typography variant="h6" sx={{ mt: 5 }}>
					Metode
				</Typography>
				<Card variant="outlined" sx={{ marginBottom: 4, borderRadius: 2 }} role="region" aria-labelledby="method-info">
					<Typography id="method-info" sx={{ backgroundColor: "white", padding: 1, paddingBottom: '8px !important' }}>
						ATM BCA
					</Typography>
				</Card>
				<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 5 }}>
					<button
						type="submit"
						style={{
							borderRadius: "12px",
							border: 0,
							padding: "8px",
							width: "1100px",
							backgroundColor: "#0066AE",
							color: "white",
						}}
						aria-label="Lanjutkan ke langkah berikutnya"
					>
						Lanjutkan
					</button>
				</Box>
			</Container>
		</form>
	);
};

const KonfirmasiSetor = ({ onNext }) => {
	const formikKonfirmasi = useFormik({
		initialValues: {},
		onSubmit: (values) => {
			onNext(values);
		},
	});

	return (
		<Container sx={{ paddingTop: 10 }}>
			<Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', gap: '8px', mb: 3 }}>
				<img id='logo' src="/logo.png" alt="Logo" />
				<Typography sx={{ fontWeight: "bold" }} variant="h5">
					Rupi App
				</Typography>
			</Box>
			<Typography
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontWeight: "bold",
					mb: 5,
				}}
				variant="h5"
			>
				Konfirmasi Setor Tunai
			</Typography>
			<Box sx={{ my: 2 }}>
				<hr />
				<Box sx={{ display: "flex", justifyContent: "space-between", py: 3 }}>
					<Typography variant='h6'>Metode</Typography>
					<Typography variant='body1' sx={{ fontWeight: "bold" }}>ATM BCA</Typography>
				</Box>
			</Box>
			<hr />
			<Box sx={{ mt: 3, mb: 6 }}>
				<Typography variant="h6" sx={{ mt: 5 }}>
					Rekening Tujuan
				</Typography>
				<CardAccountInfo role="region" aria-labelledby="destination-account" />
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
							borderRadius: "12px",
							border: 0,
							padding: "8px",
							width: "1000px",
							backgroundColor: "#0066AE",
							color: "white",
						}}
						aria-label="Lanjutkan ke langkah berikutnya"
					>
						Lanjutkan
					</button>
				</Box>
			</form>
		</Container>
	);
};

const InputPinForm = ({ onNext }) => {
	const { mutate: generateToken, isLoading, error } = useGenerateTransactionToken();

	const [pin, setPin] = useState(["", "", "", "", "", ""]);
	const [pinError, setPinError] = useState("");

	const nominal = 50000;

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
						type: "TOPUP",
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
				role="group"
				aria-labelledby="pin-input"
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
			{error && (
				<Typography color="error" sx={{ mt: 3, fontSize: "14px" }}>
					{error.message}
				</Typography>
			)}
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
					aria-label="Lanjutkan dengan PIN yang dimasukkan"
					disabled={isLoading}
				>
					Lanjutkan
				</button>
			</Box>
		</Box>
	);
};

const TokenSetor = ({ tokenData }) => {
	const { account } = useAuthContext();
	const fullName = account.full_name;
	const accountNumber = account.account_number;

	const formatedAccountNumber = accountNumber ? accountNumber.replace(/(\d{4})(?=\d)/g, "$1 ") : "";

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
					alt="Icon Checklist"
					style={{ margin: "10px", width: "136px", height: "136px" }}
				/>
				<Typography sx={{ fontWeight: "bold" }} variant={"h6"}>
					Uang Siap Disetor
				</Typography>
				<Typography sx={{ fontSize: "20px", color: "grey", mt: 2 }} aria-live="polite" aria-label="Tanggal dan waktu transaksi">
					{new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })} . {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
				</Typography>
				<Typography sx={{ fontSize: "20px", color: "grey", mb: 2 }} aria-live="polite" aria-label="Nomor referensi">
					No. Ref 12736192837636
				</Typography>
			</Box>

			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
				<Card component={Paper} elevation={4} sx={{ width: "550px", px: 4, py: 3 }}>
					<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
						<Box>
							<Typography sx={{ fontSize: "12px", color: "grey" }}>Metode</Typography>
							<Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0A3967" }}>
								ATM BCA
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
							<Typography>Kode Penyetoran</Typography>
							<Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0066AE" }} aria-live="polite">
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
							color: "#B3B3B3",
						}}
					>
						<Typography>Rekening Tujuan</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							mt: 1,
							color: "#0A3967",
							gap: 1,
						}}
					>
						<Typography variant='h6' sx={{ fontWeight: "bold" }} aria-label="Nama pemegang akun rekening">
							{fullName}
						</Typography>
						<Typography variant='h6'> - </Typography>
						<Typography variant='h6' aria-label="Nomor rekening">
							{formatedAccountNumber}
						</Typography>
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
						<ShareIcon aria-label="Share code icon" />
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
					aria-label="Buat token baru"
				>
					Buat Token Baru
				</button>
			</Box>
		</>
	);
};

export const SetorTunai = () => {
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
			{step === 1 && <SetorTunaiAwal onNext={handleNext} />}
			{step === 2 && <KonfirmasiSetor onNext={handleNext} />}
			{step === 3 && <InputPinForm onNext={handleNext} />}
			{step === 4 && <TokenSetor tokenData={tokenData} />}
		</>
	);
};
