// TransferRupiahPage.js
<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> bdd4ab2b76c76108da3d3a89cb309d18f3175e77
import { Box, Button, Card, Grid } from "@mui/material";
import { Layout } from "../layout";
import QrisIcon from "../../assets/img/icons/QRIS-Icon.svg"
import ImgPlaceHolder from "../../assets/img/icons/Image placeholder 1.svg"
import Flashlight from "../../assets/img/icons/flashlight 1.svg"
import IconScan from "../../assets/img/icons/scan-netral.svg"
import IconScanPrimary from "../../assets/img/icons/scan-primary.svg"
import IconQrCode from "../../assets/img/icons/qr-code-netral.svg"
import IconQrCodePrimary from "../../assets/img/icons/qr-code-primary.svg"
<<<<<<< HEAD
import BreadcrumbsComponent from '../../assets/components/Breadcrumbs/Breadcrumbs';
import { Html5QrcodeScanner  } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';
=======
import { Breadcrumb } from '../../assets/components/Breadcrumbs/Breadcrumb';


// import Breadcrumb from '../../assets/components/breadCrumbs/Breadcrumbs';
>>>>>>> bdd4ab2b76c76108da3d3a89cb309d18f3175e77

export const QrisPage = () => {

    const [currentView, setCurrentView] = useState("scan");
    const navigate = useNavigate()
    // const [ scanResult, setScanResult ] = useState(null)
    const [flashlightOn, setFlashlightOn] = useState(false);
    const readerRef = useRef(null);

<<<<<<< HEAD
    useEffect(()=>{
        // Initialize and start scanning
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: { width: 250, height: 250 },
            fps: 10
        });
=======
    return (
        <Layout>
            <Box sx={{ mx: 6, paddingTop: "1.5rem", paddingBottom: "2rem" }}>
                <Breadcrumb />
                <Box sx={{ display: "flex", mt: 10, gap: 5, flexDirection: "column" }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={QrisIcon} height={60} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3, flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 2rem)' }}>
                        <Card
                            sx={{
                                width: '100%', maxWidth: '450px', p: '2rem', borderRadius: '12px', height: "623px", display: "flex",
                                flexDirection: "column", border:"1px solid #B3B3B3 "
                            }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mt:"auto" }}>
                                <img src={ImgPlaceHolder} />
                                <img src={Flashlight} />
                            </Box>
                        </Card>
                        <Grid container sx={{ width: '450px' }}>
                           
                            <Grid item xs={6} onClick={() => setCurrentView("scan")} sx={{ display: "flex", alignItems: "center", justifyContent: "center", pl: 5 }}>
                                <Button sx={{ display: "flex", flexDirection: "column" }}>
                                    <hr
                                        style={{
                                            border: `2px solid ${currentView === "scan" ? '#0066AE' : 'transparent'}`, width: "100%", borderRadius: "10px", transition: 'border-color 0.3s ease'
                                        }}
                                    />
                                    <img src={currentView === "scan" ? IconScanPrimary : IconScan} />
                                </Button>
                            </Grid>
                            <Grid item xs={6} onClick={() => setCurrentView("tampilkan")} sx={{ display: "flex", alignItems: "center", justifyContent: "center", pr: 5 }}>
                                <Button sx={{ display: "flex", flexDirection: "column" }}>
                                    <hr
                                        style={{
                                            border: `2px solid ${currentView === "tampilkan" ? '#0066AE' : 'transparent'}`, width: "100%", borderRadius: "10px", transition: 'border-color 0.3s ease'
                                        }}
                                    />
                                    <img src={currentView === "tampilkan" ? IconQrCodePrimary : IconQrCode} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
>>>>>>> bdd4ab2b76c76108da3d3a89cb309d18f3175e77

        const success = (result) => {
            scanner.clear(); 
            console.log("data hasil sacnne :", result)
            navigate("/qris/qr-bayar", { state: { qris: result } })
        };

        const error = (error) => {
            console.warn(error);
        };
        // Render scanner and start scanning
        scanner.render(success, error);
        // Cleanup on component unmount
        return () => {
            scanner.clear();
        };
    },[])

    const toggleFlashlight = () => {
        setFlashlightOn(!flashlightOn);
        // Implement flashlight toggle if the library supports it
    };
   
	return (
		<Layout>
			<Box sx={{ mx: 6, paddingTop: "1.5rem", paddingBottom: "2rem" }}>
				<BreadcrumbsComponent />
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
							sx={{
								width: "100%",
								maxWidth: "450px",
								p: "2rem",
								borderRadius: "12px",
								height: "623px",
								display: "flex",
								flexDirection: "column",
								border: "1px solid #B3B3B3 ",
							}}
							aria-label="QRIS Code"
							role="group"
						>
							<div id="reader" ref={readerRef} style={{ width: '100%', height: '100%' }}></div>
							<Box sx={{ display: "flex", justifyContent: "space-between", mt: "auto" }}>
								<img src={ImgPlaceHolder} alt="library" role="button" />
								<img src={Flashlight} alt="flashlight" role="button" onClick={() => { toggleFlashlight }}/>
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
