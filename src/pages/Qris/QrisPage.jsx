// TransferRupiahPage.js
import { useState } from 'react';
import { Box, Button, Card, Grid } from "@mui/material";
import { Layout } from "../layout";
import QrisIcon from "../../assets/img/icons/QRIS-Icon.svg"
import ImgPlaceHolder from "../../assets/img/icons/Image placeholder 1.svg"
import Flashlight from "../../assets/img/icons/flashlight 1.svg"
import IconScan from "../../assets/img/icons/scan-netral.svg"
import IconScanPrimary from "../../assets/img/icons/scan-primary.svg"
import IconQrCode from "../../assets/img/icons/qr-code-netral.svg"
import IconQrCodePrimary from "../../assets/img/icons/qr-code-primary.svg"
import { BreadcrumbsComponent } from '../../assets/components/Breadcrumbs/Breadcrumb';


// import BreadcrumbsComponent from '../../assets/components/breadCrumbs/Breadcrumbs';

export const QrisPage = () => {

    const [currentView, setCurrentView] = useState("scan");

    return (
        <Layout>
            <Box sx={{ mx: 6, paddingTop: "1.5rem", paddingBottom: "2rem" }}>
                <BreadcrumbsComponent />
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


            </Box>
        </Layout>
    );
};
