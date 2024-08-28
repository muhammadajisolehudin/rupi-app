import { Box, Card, CardContent, Typography, Button } from "@mui/material";

import buttonEnter from "../../img/icons/button enter.svg";
import arrowDownIcon from "../../img/icons/arrow down.png";
import copyIcon from "../../img/icons/copy.png";
// import showIcon from "../../img/icons/show.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import creditCardBlack from "../../img/credit card black.png";
import { useState } from "react";
import { formatAccountNumber, formatRupiah } from "../../../utils/utilities";

export const CardBalance = ({ user }) => {
	const lightBlue = "#EDF4FF";
	const darkBlue = "#0A3967";
	const blue = "#0066AE";
	const neutral = "#FFF";

	const [isNominalVisible, setIsNominalVisible] = useState(true);

	const handleCopy = () => {
		navigator.clipboard
			.writeText(user?.account_number)
			.then(() => {
				alert('Rekening number copied to clipboard!');
			})
			.catch((err) => {
				console.error('Failed to copy:', err);
			});
	};

	const toggleNominalVisibility = () => {
		setIsNominalVisible(!isNominalVisible);
	};


	return (
		<Card sx={{ borderRadius: 3 }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '9px 25px',
					backgroundColor: lightBlue,
					// mt: "4px",
					marginBottom: '24px',
					borderRadius: '10px',
				}}
				aria-label="Informasi saldo pengguna"
			>
				<Typography sx={{ color: darkBlue, fontSize: '20px', fontWeight: 700 }}>
					Info Saldo
				</Typography>
				<Box component="a" href="/info-saldo">
					<Button
						role="button"
						aria-label="Info Saldo, ini akan membawa Anda ke halaman info saldo"
						sx={{ minWidth: "auto", padding: 0 }}
					>
						<img src={buttonEnter} alt="info saldo" style={{ width: "28px" }} />
					</Button>
				</Box>
			</Box>
			<Card
				sx={{
					position: 'relative',
					borderRadius: '10px',
					boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
					mr: "25px"
				}}
			>
				<CardContent
					sx={{
						position: 'absolute',
						margin: 0,
						zIndex: 1,
						overflow: 'hidden',
						p: '3rem 2rem',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						backgroundColor: neutral,
						width: '86%',
						height: '100%',
						borderRadius: '10px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
						aria-label="Informasi rekening pengguna dan tombol salin"
					>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Typography
								sx={{
									color: blue,
									fontSize: '20px',
									fontWeight: 500,
									marginBottom: 0,
									marginRight: '8px',
								}}
							>
								Rekening 1{formatAccountNumber(user?.account_number)}
							</Typography>
							<img
								src={arrowDownIcon}
								alt=""
								style={{ width: 'auto', height: '20px' }}
							/>
						</Box>
						<Button
							role="Button"
							aria-label="salin, ini akan menyalin nomor rekening pengguna"
							sx={{ minWidth: "auto" }}
							onClick={handleCopy}
						>
							<img src={copyIcon} alt="salin" style={{ width: "24px" }} />
						</Button>
					</Box>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
						aria-label="Informasi saldo pengguna saat ini dan tombol tampilkan saldo"
					>
						<Typography
							variant="h5"
							sx={{
								color: darkBlue,
								// fontSize: '32px',
								fontWeight: 500,
								marginBottom: 0,
							}}
							aria-label="Saldo pengguna saat ini"
						>
							IDR{' '}
							<span style={{ fontWeight: "bold" }}>
								{isNominalVisible ? formatRupiah(user?.balance) : '*****'}
							</span>
						</Typography>
						<Button
							sx={{ minWidth: 'auto', }}
							onClick={toggleNominalVisibility}
							aria-label='tampilkan saldo'
						>
							{isNominalVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
						</Button>
					</Box>
				</CardContent>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						borderRadius: '10px',
					}}
				>
					<img src={creditCardBlack} alt="" style={{ borderRadius: '10px' }} />
				</Box>
			</Card>
		</Card>
	);
};