// import React from "react";

import { Box, Card, Paper, TextField, Typography } from "@mui/material";
import { CardAccountInfo } from "../cardComponents/CardAccountInfo";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import checklistIcon from "../../img/checklist-icon.png";
import logoIcon from "/logo.png";

const RequestNominalForm = ({ onNext }) => {
	const formik = useFormik({
		initialValues: {
			nominal: "",
			namaToken: "",
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
			<Formik
				initialValues={formik.initialValues}
				validationSchema={formik.validationSchema}
				onSubmit={formik.onSubmit}
			>
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
					>
						Lanjutkan
					</button>
				</Box>
			</Formik>
		</>
	);
};

const KonfirmasiForm = ({ onNext }) => {
	const formik = useFormik({
		initialValues: {
			pin: "",
		},
		validationSchema: Yup.object({
			pin: Yup.string().required("PIN is required").min(6, "PIN must be at least 4 characters"),
		}),
		onSubmit: (values) => {
			onNext(values);
		},
	});

	return (
		<>
			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", my: 2 }}>
				<img src={logoIcon} alt="" style={{ marginRight: "5px" }} />
				<Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
					Rupi App
				</Typography>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 4, mt: 2 }}>
				<Typography variant={"h6"} sx={{ fontWeight: "bold" }}>
					Konfirmasi Tarik Tunai
				</Typography>
			</Box>

			<Box sx={{ my: 2 }}>
				<hr />
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography>Nominal Penarikan</Typography>
					<Typography sx={{ fontWeight: "bold" }}>Rp.100.000</Typography>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography>Nama Token</Typography>
					<Typography sx={{ fontWeight: "bold" }}>Tarik Senin</Typography>
				</Box>
			</Box>
			<hr />
			<Box sx={{ my: 3 }}>
				<Typography variant="h6" sx={{ mt: 5 }}>
					Sumber Rupiah
				</Typography>
				<CardAccountInfo accountNumber={"5667 2323 1444 5554"} balance={5000000} />
			</Box>
			<hr />

			<Formik
				initialValues={formik.initialValues}
				validationSchema={formik.validationSchema}
				onSubmit={formik.onSubmit}
			>
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
					>
						Lanjutkan
					</button>
				</Box>
			</Formik>
		</>
	);
};

const InputPinForm = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues: {
			pin: "",
		},
		validationSchema: Yup.object({
			pin: Yup.string().required("PIN is required").min(6, "PIN must be at least 4 characters"),
		}),
		onSubmit: (values) => {
			onSubmit(values);
		},
	});

	return (
		<>
			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", my: 4 }}>
				<Typography variant={"h5"} sx={{ color: "#0A3967", fontWeight: "bold" }}>
					Masukkan PIN
				</Typography>
			</Box>

			{/* <MasukPin /> */}
			<TextField
				aria-label="masukkan pin"
				margin="normal"
				name="pin"
				type="text"
				id="pin"
				placeholder="masukan pin"
				autoComplete="current-nominal"
				fullWidth
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.pin}
			/>
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
				>
					Lanjutkan
				</button>
			</Box>
		</>
	);
};

const GetToken = () => {
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
				>
					Buat Token Baru
				</button>
			</Box>
		</>
	);
};

export const TarikTunai = () => {
	const formik = useFormik({
		initialValues: {
			nominal: "",
			namaToken: "",
		},
		validationSchema: Yup.object({
			nominal: Yup.number().min(50000, "Nominal Tarik Tunai minimal IDR 50.000").required("Required"),
			namaToken: Yup.string().min(6, "Must be at least 6 characters"),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	const handleClick = () => {
		console.log("handle lanjut clicked");
	};
	return (
		<>
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
					onClick={handleClick}
					style={{
						borderRadius: "15px",
						border: 0,
						padding: "8px",
						width: "500px",
						backgroundColor: "#0066AE",
						color: "white",
					}}
				>
					Lanjutkan
				</button>
			</Box>
		</>
	);
};
