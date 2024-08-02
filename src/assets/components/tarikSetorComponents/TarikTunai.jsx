// import React from "react";

import { Box, Card, Container, Paper, TextField, Typography } from "@mui/material";
import { CardAccountInfo } from "../cardComponents/CardAccountInfo";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import checklistIcon from "../../img/checklist-icon.png";
import logoIcon from "/logo.png";
import { Link } from "react-router-dom";

const RequestNominalForm = ({ onNext }) => {
	const formik = useFormik({
		initialValues: {
			nominal: "",
			namaToken: "",
			accountNumber: "5667 2323 1444 5554",
			balance: 5000000,
		},
		validationSchema: Yup.object({
			nominal: Yup.number().min(50000, "Nominal Tarik Tunai minimal IDR 50.000").required("Required"),
			namaToken: Yup.string().min(6, "Must be at least 6 characters"),
		}),
		onSubmit: (values) => {
			onNext(values);
		},
	});

	return (
		<>
			<Container>
				<form onSubmit={formik.handleSubmit}>
					<Typography variant="h6" sx={{ mt: 5 }}>
						Rekening Tujuan
					</Typography>
					<CardAccountInfo accountNumber={"5667 2323 1444 5554"} balance={5000000} />

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
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.nominal}
						/>
					</Box>
					{formik.touched.nominal && formik.errors.nominal ? (
						<Typography sx={{ fontSize: 10, color: "red", mt: 2 }}>{formik.errors.nominal}</Typography>
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
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.namaToken}
					/>
					{formik.touched.namaToken && formik.errors.namaToken ? (
						<Typography sx={{ fontSize: 10, color: "red", mt: 2 }}>{formik.errors.namaToken}</Typography>
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

const KonfirmasiForm = ({ onNext }) => {
	const formik = useFormik({
		initialValues: {},
		onSubmit: (values) => {
			onNext(values);
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
						<Typography sx={{ fontWeight: "bold" }}>Rp.100.000</Typography>
					</Box>
					<Box
						sx={{ display: "flex", justifyContent: "space-between" }}
						aria-label="nama token penarikan"
					>
						<Typography>Nama Token</Typography>
						<Typography sx={{ fontWeight: "bold" }}>Tarik Senin</Typography>
					</Box>
				</Box>
				<hr />
				<Box sx={{ my: 3 }}>
					<Typography variant="h6" sx={{ mt: 5 }} aria-label="sumber dana rupiah">
						Sumber Rupiah
					</Typography>
					<CardAccountInfo accountNumber={"5667 2323 1444 5554"} balance={5000000} />
				</Box>
				<hr />

				<form onSubmit={formik.handleSubmit}>
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

const InputPinForm = ({ onSubmit }) => {
	const [pin, setPin] = useState(["", "", "", "", "", ""]);
	const [error, setError] = useState("");

	useEffect(() => {
		const handleKeyDown = (event) => {
			const key = event.key;
			if (key === "Enter") {
				handleButtonClick();
			}

			if (key >= "0" && key <= "9") {
				const index = pin.findIndex((entry) => entry === "");
				if (index !== -1) {
					const newpin = [...pin];
					newpin[index] = key;
					setPin(newpin);
				}
			} else if (key === "Backspace") {
				const index = pin
					.slice()
					.reverse()
					.findIndex((entry) => entry !== "");
				if (index !== -1) {
					const newpin = [...pin];
					const originalIndex = pin.length - 1 - index;
					newpin[originalIndex] = "";
					setPin(newpin);
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
		const pinValue = pin.join("");
		try {
			pinSchema.validateSync(pinValue);
			setError("");
			onSubmit({ pin: String(pinValue, 10) });
		} catch (validationError) {
			setError(validationError.message);
		}
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
			{error && (
				<Typography color="error" sx={{ mt: 3, fontSize: "14px" }}>
					{error}
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
				>
					Lanjutkan
				</button>
			</Box>
		</Box>
	);
};

const TokenTarik = () => {
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
				<Typography sx={{ fontSize: "20px", color: "grey", mt: 2 }}>12 Jul 2024 . 11:35 WIB</Typography>
				<Typography sx={{ fontSize: "20px", color: "grey", mb: 2 }}>No. Ref 12736192837636</Typography>
			</Box>

			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
				<Card component={Paper} elevation={4} sx={{ width: "550px", px: 4, py: 3 }}>
					<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
						<Box>
							<Typography sx={{ fontSize: "12px", color: "grey" }}>Nominal</Typography>
							<Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0A3967" }}>
								Rp 100.000
							</Typography>
						</Box>

						<Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
							<Typography sx={{ fontSize: "12px", color: "grey" }}>Berlaku Hingga</Typography>
							<Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0A3967" }}>
								12.35
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
								654888
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
					type="submit"
					style={{
						borderRadius: "10px",
						border: 0,
						padding: "11px",
						width: "800px",
						backgroundColor: "#0066AE",
						color: "white",
					}}
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

	const handleNext = (values) => {
		console.log("handleNext called with values:", values);
		setFormData((prevData) => ({ ...prevData, ...values }));
		setStep((prevStep) => prevStep + 1);
	};

	const handleSubmit = (values) => {
		console.log("Final Submission", { ...formData, ...values });
		setStep((prevStep) => prevStep + 1);
	};

	return (
		<>
			{step === 1 && <RequestNominalForm onNext={handleNext} />}
			{step === 2 && <KonfirmasiForm onNext={handleNext} />}
			{step === 3 && <InputPinForm onSubmit={handleSubmit} />}
			{step === 4 && <TokenTarik />}
		</>
	);
};
