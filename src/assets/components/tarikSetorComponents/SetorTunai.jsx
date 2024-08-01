import React, { useState, useEffect } from "react";
import { Box, Container, Card, Paper, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import ShareIcon from "@mui/icons-material/Share";
import checklistIcon from "../../img/checklist-icon.png";

const SetorTunaiAwal = ({ onNext }) => {
	const formik = useFormik({
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
		<form onSubmit={formik.handleSubmit}>
			<Container>
				<Typography variant="h6" sx={{ mt: 5 }}>
					Sumber Rupiah
				</Typography>
				<Card variant="outlined" sx={{ borderRadius: 2, p: 2, my: 2 }}>
					<div>
						<Typography>
							<span style={{ color: "grey" }}>No. Rekening:</span> <span>5667 2323 1444 5554</span>
						</Typography>
					</div>
					<div>
						<Typography>
							<span style={{ color: "grey" }}>Saldo:</span> <span>Rp {"5300000".toLocaleString("id-ID")}</span>
						</Typography>
					</div>
				</Card>
				<Typography variant="h6" sx={{ mt: 5 }}>
					Metode
				</Typography>
				<Card variant="outlined" sx={{ marginBottom: 4, borderRadius: 2 }}>
					<Typography sx={{ backgroundColor: "white", padding: 1, paddingBottom: '8px !important' }}>
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
							marginTop: "50px"
						}}
					>
						Lanjutkan
					</button>
				</Box>
			</Container>
		</form>
	);
};

const KonfirmasiSetor = ({ onNext }) => {
	const formik = useFormik({
		initialValues: {},
		onSubmit: (values) => {
			onNext(values);
		},
	});

	return (
		<Container sx={{ paddingTop: 10 }}>
			<Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', gap: '8px', mb: 3}}>
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
				<Card variant="outlined" sx={{ borderRadius: 2, p: 2, my: 2 }}>
					<div>
						<Typography>
							<span style={{ color: "grey" }}>No. Rekening:</span> <span>5667 2323 1444 5554</span>
						</Typography>
					</div>
					<div>
						<Typography>
							<span style={{ color: "grey" }}>Saldo:</span> <span>Rp {"5300000".toLocaleString("id-ID")}</span>
						</Typography>
					</div>
				</Card>
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
							borderRadius: "12px",
							border: 0,
							padding: "8px",
							width: "1000px",
							backgroundColor: "#0066AE",
							color: "white",
						}}
					>
						Lanjutkan
					</button>
				</Box>
			</form>
		</Container>
	);
};


const PinInput = ({ onSubmit }) => {
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
      onSubmit({ pin: parseInt(pinValue, 10) });
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
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 10 }}
      >
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
        >
          Lanjutkan
        </button>
      </Box>
    </Box>
  );
};


const KodeSetor = () => {
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
				Uang Siap Disetor
			</Typography>
			<Typography sx={{ fontSize: "20px", color: "grey", mt: 2 }}>12 Jul 2024 . 11:35 WIB</Typography>
			<Typography sx={{ fontSize: "20px", color: "grey", mb: 2 }}>No. Ref 12736192837636</Typography>
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
							12.35
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						my: 2,
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
						<Typography sx={{ fontWeight: "bold", fontSize: "20px", color: "#0066AE" }}>
							222488
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
					<Typography variant='h6' sx={{ fontWeight: "bold"}} >Samsul</Typography>
					<Typography variant='h6'> - </Typography>
						<Typography variant='h6'>
						5667 2323 1444 5554 
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


export const SetorTunai = () => {
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
			{step === 1 && <SetorTunaiAwal onNext={handleNext} />}
			{step === 2 && <KonfirmasiSetor onNext={handleNext} />}
			{step === 3 && <PinInput onSubmit={handleSubmit} />}
			{step === 4 && <KodeSetor />}
		</>
	);
};
