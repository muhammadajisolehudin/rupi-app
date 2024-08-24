import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Box, Button, Card, Typography, TextField } from "@mui/material";

import { Layout } from "../layout";

import QRISIcon from '../../assets/img/icons/QRIS-Icon.png';
import LogoIcon from '../../assets/img/icons/3.png';
import ScanIcon from '../../assets/img/icons/mage_scan.png';
import ShareIcon from '../../assets/img/icons/mdi_share.png';
import RiayatIcon from '../../assets/img/icons/Document.png';
import { Breadcrumb } from '../../assets/components/Breadcrumbs/Breadcrumb';

import { QRTerimaTransferCode } from "../../assets/components/QRTransferComponents/QRTerimaTransferCode";

import { useAuthContext } from "../../context/AuthContext";
import { useGenerateTransactionQR } from "../../services/qr-transfer/generate-qr";

export const QRTerimaTransfer = () => {
	const navigate = useNavigate();
	const { account } = useAuthContext();
	const [amount, setAmount] = useState(undefined); // Awalnya undefined
	const [inputAmount, setInputAmount] = useState(0);
	const [expiryDate, setExpiryDate] = useState('');
	const { mutate } = useGenerateTransactionQR();

	const formatAccountNumber = (number) => {
		const visibleDigits = 4;
		const hiddenDigits = number?.length - visibleDigits;
		const stars = '*'.repeat(hiddenDigits);
		return `${stars}${number?.slice(-visibleDigits)}`;
	};

	useEffect(() => {
		if (amount !== undefined) {
			setExpiryDate('');

			mutate({ amount }, {
				onSuccess: (response) => {
					if (response.data.success) {
						setExpiryDate(response.data.data.expiredAt);
					}
				},
				onError: (err) => {
					console.error('Error generating QR code:', err);
				},
			});
		}
	}, [amount, mutate]);

	const fullName = account.full_name;
	const accountNumber = account.account_number;

	const formatExpiryDate = (dateString) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
		const date = new Date(dateString);
		date.setHours(date.getHours() - 7);
		return `${date.toLocaleDateString('id-ID', options)}`;
	};

	const goToRiwayat = () => {
		navigate('/QR-terima-transfer/riwayat');
	};

	const handleGenerateQRCode = () => {
		setAmount(inputAmount);
	};

	const handleGenerateNewQRCode = () => {
		setAmount(undefined);
		setInputAmount(0);

		handleGenerateQRCode();
	};

	useEffect(() => {
		handleGenerateQRCode();
	}, []);

	return (
		<Layout>
			<Box sx={{ mx: 6, paddingTop: "1.5rem", paddingBottom: "2rem", height:"160vh" }}>
				<Breadcrumb />
				<Box sx={{ px: 6, mt: 6, mb: 4 }}>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Button
							variant="contained"
							sx={{ backgroundColor: '#0066AE', color: '#fff', ml: 'auto', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem 3rem' }}
							onClick={goToRiwayat}
						>
							<img src={RiayatIcon} alt="Riwayat" style={{ width: '20px', height: '20px', marginRight: '4px', marginBottom: '2px' }} />
							Riwayat
						</Button>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Typography variant="h6" component="div" sx={{ textAlign: 'center', flexGrow: 1 }}>
							QR Terima Transfer
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 2rem)', mt:15 }}>
						<Card sx={{ backgroundColor: '#0066AE', color: '#fff', width: '100%', maxWidth: '450px', p: '2rem', borderRadius: '12px' }}>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '1rem' }}>
								
								<img src={QRISIcon} alt="QRIS Icon" style={{ width: '59px', height: '23px' }} />
								<img src={LogoIcon} alt="Logo Icon" style={{ width: '30px', height: 'auto' }} />
							</Box>
							<Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
								{fullName}
							</Typography>
							<Typography variant="body1" sx={{ textAlign: 'center', mb: '2rem' }}>
								RupiApp by BCA - {formatAccountNumber(accountNumber)}
							</Typography>
							{/* <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: -15 }}>
								<QRTerimaTransferCode amount={amount} />
							</Box> */}
							<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '2rem' }}>
								<QRTerimaTransferCode height={60} amount={amount} />
							</Box>
							<Typography variant="body2" sx={{ textAlign: 'left', mb: '1rem' }}>
								Masukkan nominal yang ingin Anda terima
							</Typography>
							<TextField
								type="number"
								// variant="outlined"
								value={inputAmount}
								onChange={(e) => {
									const value = e.target.value;

									if (/^\d*$/.test(value)) {
										setInputAmount(value === '' ? '' : Number(value));
									}
								}}
								onBlur={() => {
									setInputAmount(prev => prev === '' ? 0 : Number(prev));
								}}
								sx={{
									mb: '1rem', width: '100%', height: "45px", color: '#fff',
									'& .MuiInputBase-root': {
										height: '45px', // Menentukan tinggi dari input
										// border: 'none',
										color: '#fff',
										borderRadius: 1,
										border: '1px solid #fff' // Mengatur border-radius jika diinginkan
									},
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: 'none', // Mengatur warna border pada mode outlined
									}, }}
								InputProps={{
									style: { color: '#fff' }
								}}
							/>
							<Button
								variant="outlined"
								sx={{ borderColor: '#fff', color: '#fff', width: '100%', mb: '2rem' }}
								onClick={handleGenerateQRCode}
							>
								Tambah Nominal
							</Button>
							<Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
								QR ini hanya untuk 1 kali transaksi
							</Typography>

							<Typography variant="body2" sx={{ textAlign: 'center', mb: '2rem' }}>
								Berlaku hingga {formatExpiryDate(expiryDate)} WIB
							</Typography>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '1rem' }}>
								<Button
									variant="contained"
									sx={{
										backgroundColor: '#fff',
										color: '#0066AE',
										width: '48%',
										'&:hover': {
											backgroundColor: '#f0f0f0'
										}
									}}
									onClick={handleGenerateNewQRCode}
								>
									<img src={ScanIcon} alt="Scan QR" style={{ width: '20px', height: '20px', marginRight: '4px', marginBottom: '2px' }} />
									Buat QR Baru
								</Button>
								<Box sx={{ width: '7%', textAlign: 'center' }}>
									|
								</Box>
								<Button
									variant="contained"
									sx={{
										backgroundColor: '#fff',
										color: '#0066AE',
										width: '48%',
										'&:hover': {
											backgroundColor: '#f0f0f0'
										}
									}}
								>
									<img src={ShareIcon} alt="Share" style={{ width: '20px', height: '20px', marginRight: '4px', marginBottom: '3px' }} />
									Bagikan QR
								</Button>
							</Box>
						</Card>
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default QRTerimaTransfer;
