import { useEffect, useRef, useState } from 'react';
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { Layout } from "../layout";
import QrisIcon from "../../assets/img/icons/QRIS-Icon.svg"
import ImgPlaceHolder from "../../assets/img/icons/Image placeholder 1.svg"
import Flashlight from "../../assets/img/icons/flashlight 1.svg"
import IconScan from "../../assets/img/icons/scan-netral.svg"
import IconScanPrimary from "../../assets/img/icons/scan-primary.svg"
import IconQrCode from "../../assets/img/icons/qr-code-netral.svg"
import IconQrCodePrimary from "../../assets/img/icons/qr-code-primary.svg"
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from '../../assets/components/Breadcrumbs/Breadcrumb';
import Webcam from 'react-webcam';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';


export const QrisPage = () => {

	const [currentView, setCurrentView] = useState("scan");
	const navigate = useNavigate()
	const webcamRef = useRef(null);
	const [imageSrc, setImageSrc] = useState(null);
	// const [scanResult, setScanResult] = useState('');
	const [isWebcamOpen, setIsWebcamOpen] = useState(true);
	const [uploading, setUploading] = useState(false);

	useEffect(() => {
		let intervalId;

		if (isWebcamOpen) {
			intervalId = setInterval(() => {
				captureAndScan();
			}, 3000); // Capture every 3 seconds
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [isWebcamOpen]);

	const captureAndScan = async () => {
		const imageSrc = webcamRef.current.getScreenshot();
		if (imageSrc) {
			setImageSrc(imageSrc);

			try {
				const result = await scanQRCode(imageSrc);
				if (result && isQRISCode(result)) {
					// setScanResult(result);
					navigate("/qris/qr-bayar", { state: { qris: result } })
					setIsWebcamOpen(false); // Stop scanning once QRIS Code is detected
				}
			} catch (error) {
				console.error('Scan error:', error);
			}
		}
	};

	const scanQRCode = async (imageSrc) => {
		const codeReader = new BrowserMultiFormatReader();
		try {
			// Decode from base64 image
			const result = await codeReader.decodeFromImageUrl(imageSrc);
			return result.text;
		} catch (error) {
			if (error instanceof NotFoundException) {
				// QR Code tidak ditemukan
				return null;
			} else {
				// Kesalahan lain saat pemindaian
				throw error;
			}
		}
	};


	const isQRISCode = (code) => {
		// QRIS Code harus dimulai dengan '000201' dan memiliki panjang minimal tertentu
		if (!code.startsWith('000201')) {
			return false;
		}

		// QRIS Code harus memiliki panjang minimal
		// Panjang QRIS Code yang valid bisa bervariasi
		const minLength = 60;
		const maxLength = 500;

		if (code.length < minLength || code.length > maxLength) {
			return false;
		}
		// Tambahkan validasi lain jika diperlukan, misalnya memeriksa struktur data
		// Berdasarkan spesifikasi QRIS yang lebih rinci

		return true;
	};

	const handleFileUpload = async (event) => {
		setUploading(true);
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onload = async () => {
			const imageSrc = reader.result;
			setImageSrc(imageSrc);

			try {
				console.log('Image source:', imageSrc);

				const result = await scanQRCode(imageSrc);
				console.log('Scan result:', result); // Log the raw result from scanQRCode

				if (result && isQRISCode(result)) {
					// setScanResult(result);
					navigate("/qris/qr-bayar", { state: { qris: result } })
				} else {
					console.log('Not a valid QRIS code');
				}
			} catch (error) {
				console.error('Scan error:', error);
			}
			setUploading(false);
		};

		reader.readAsDataURL(file);
	};

	return (
		<Layout>
			<Box sx={{ mx: 6, paddingTop: "1.5rem", paddingBottom: "2rem" }}>
				<Breadcrumb />
				<Box sx={{ display: "flex", mt: 10, gap: 5, flexDirection: "column" }}>
					<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<img src={QrisIcon} height={60} aria-hidden="true" />
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: 3,
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							height: "calc(100vh - 2rem)",
						}}
					>
						<Card
						elevation={3}
							sx={{
								width: "100%",
								maxWidth: "22rem",
								// p: "2rem",
								borderRadius: 3,
								height: "38rem",
								display: "flex",
								flexDirection: "column",
								border: "1px solid #B3B3B3 ",
							}}
							aria-label="QRIS Code"
							role="group"
						>
							

							<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
								<Box
									sx={{
										width: '100%',
										height: '100%',
										position: 'relative',
										display:"flex",
										justifyContent:"center",
										alignItems:"center",
										
									}}
								>
									{isWebcamOpen ? (
										<>
											<Webcam
												audio={false}
												ref={webcamRef}
												screenshotFormat="image/jpeg"
												width="100%"
												height="100%"
												style={{ borderRadius: '4px' }}
											/>
											<Box
												sx={{
													position: 'absolute',
													top: '28%',
													left: '20%',
													width: '60%',
													height: '45%',
													border: '2px solid transparent', // Transparent border to center the lines
													borderRadius: '8px',
													pointerEvents: 'none', // Allow clicks to pass through
													'&::before': {
														content: '""',
														position: 'absolute',
														top: 0,
														left: 0,
														width: '20px',
														height: '20px',
														borderTop: '2px solid #0000FF', // Blue top border
														borderLeft: '2px solid #0000FF', // Blue left border
														borderTopLeftRadius: '8px',
														borderTopRightRadius: '0',
														borderBottomRightRadius: '0',
														borderBottomLeftRadius: '0',
														zIndex: 10,
													},
													'&::after': {
														content: '""',
														position: 'absolute',
														top: 0,
														right: 0,
														width: '20px',
														height: '20px',
														borderTop: '2px solid #0000FF', // Blue top border
														borderRight: '2px solid #0000FF', // Blue right border
														borderTopRightRadius: '8px',
														borderTopLeftRadius: '0',
														borderBottomRightRadius: '0',
														borderBottomLeftRadius: '0',
														zIndex: 10,
													},
													'& .bottom-left': {
														content: '""',
														position: 'absolute',
														bottom: 0,
														left: 0,
														width: '20px',
														height: '20px',
														borderBottom: '2px solid #0000FF', // Blue bottom border
														borderLeft: '2px solid #0000FF', // Blue left border
														borderBottomLeftRadius: '8px',
														borderTopLeftRadius: '0',
														borderTopRightRadius: '0',
														borderBottomRightRadius: '0',
														zIndex: 10,
													},
													'& .bottom-right': {
														content: '""',
														position: 'absolute',
														bottom: 0,
														right: 0,
														width: '20px',
														height: '20px',
														borderBottom: '2px solid #0000FF', // Blue bottom border
														borderRight: '2px solid #0000FF', // Blue right border
														borderBottomRightRadius: '8px',
														borderTopRightRadius: '0',
														borderTopLeftRadius: '0',
														borderBottomLeftRadius: '0',
														zIndex: 10,
													}
												}}
											>
												<Box className="bottom-left" />
												<Box className="bottom-right" />
											</Box>
										</>
									) : imageSrc? (
										
										<Box sx={{ display: "flex", flexDirection:"column", mt: 4, mx:5, width:"90%", height:"auto", borderRadius: 3 }}>
											<Typography variant="body1">Uploaded Image:</Typography>
											<img src={imageSrc} alt="Captured" style={{ width: '100%' }} />
											
										</Box>
										) : uploading && <Typography variant="body1">Uploading...</Typography>}
								</Box>
							
								<Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", p:4 }}>
									<label htmlFor="file-upload" style={{ display: 'inline-block', cursor: 'pointer' }}>
										<Button
											sx={{
												minWidth: '50px',
												height: '50px',
												borderRadius: '4px',
												boxShadow: 'none',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												padding: 0,
												backgroundColor: '#fff',
												position: 'relative'
											}}
											component="span" 
											onClick={() => setIsWebcamOpen(!isWebcamOpen)}
										>
											<img
												src={ImgPlaceHolder}
												alt="Placeholder"
												style={{ width: '30px', height: '30px' }} // Ukuran ikon
											/>
										</Button>
										{
											!isWebcamOpen ? <input
												id="file-upload"
												type="file"
												hidden
												accept="image/*"
												onChange={handleFileUpload}
											/>: ""
										}
										
									</label>
									<Button
										sx={{
											minWidth: '50px',
											height: '50px',
											borderRadius: '4px',
											boxShadow: 'none',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
										component="label"
									>
										<img
											src={Flashlight}
											alt={isWebcamOpen ? 'Placeholder' : 'Flashlight'}
											height={30}
											width={30}
										/>
										{/* </input> */}
									</Button>
								</Box>
							</Box>

						</Card>
						<Grid container sx={{ width: "450px" }}>
							<Grid
								item
								xs={6}
								onClick={() => setCurrentView("scan")}
								sx={{ display: "flex", alignItems: "center", justifyContent: "center", pl: 5 }}
							>
								<Button
									sx={{ display: "flex", flexDirection: "column" }}
									aria-label={currentView === "scan" ? "Scanning QRIS" : "Button QRIS"}
								>
									<hr
										style={{
											border: `2px solid ${currentView === "scan" ? "#0066AE" : "transparent"}`,
											width: "100%",
											borderRadius: "10px",
											transition: "border-color 0.3s ease",
										}}
										aria-hidden="true"
									/>
									<img src={currentView === "scan" ? IconScanPrimary : IconScan} alt="" aria-hidden="true" />
								</Button>
							</Grid>
							<Grid
								item
								xs={6}
								onClick={() => setCurrentView("tampilkan")}
								sx={{ display: "flex", alignItems: "center", justifyContent: "center", pr: 5 }}
							>
								<Button
									sx={{ display: "flex", flexDirection: "column" }}
									aria-label={currentView === "tampilkan" ? "QRIS Barcode Ditampilkan" : "QRIS Barcode"}
								>
									<hr
										style={{
											border: `2px solid ${currentView === "tampilkan" ? "#0066AE" : "transparent"}`,
											width: "100%",
											borderRadius: "10px",
											transition: "border-color 0.3s ease",
										}}
										aria-hidden="true"
									/>
									<img
										src={currentView === "tampilkan" ? IconQrCodePrimary : IconQrCode}
										alt="Qr Code"
										aria-hidden="true"
									/>
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};
