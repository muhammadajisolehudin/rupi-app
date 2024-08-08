import React from 'react';
import { Box, Button, Card, Container, Typography } from "@mui/material";
import { Layout } from "../layout";
// import BreadcrumbsComponent from '../assets/components/breadCrumbs/Breadcrumbs';
import QRISIcon from '../assets/img/icons/QRIS-Icon.png'; 
import LogoIcon from '../assets/img/icons/3.png'; 
import QRImage from '../assets/img/Rupi App QR.png'; 
import ScanIcon from '../assets/img/icons/mage_scan.png'; 
import ShareIcon from '../assets/img/icons/mdi_share.png'; 
import RiayatIcon from '../assets/img/icons/Document.png'; 
import BreadcrumbsComponent from '../../assets/components/Breadcrumbs/Breadcrumbs';
import { useNavigate } from 'react-router-dom';

export const QRTerimaTransfer = () => {
    const navigate = useNavigate(); 

    const formatAccountNumber = (number) => {
        const visibleDigits = 4; 
        const hiddenDigits = number.length - visibleDigits;
        const stars = '*'.repeat(hiddenDigits);
        return `${stars}${number.slice(-visibleDigits)}`;
    };

    const accountNumber = '62340989';
    const currentDate = new Date();
    const expiryDate = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 hari

    const formatExpiryDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
        return date.toLocaleDateString('id-ID', options);
    };

    const goToRiwayat = () => {
        navigate('/QR-terima-transfer/riwayat');
    };

    return (
        <Layout>
            <Container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                <BreadcrumbsComponent />
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
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 2rem)' }}>
                    <Card sx={{ backgroundColor: '#0066AE', color: '#fff', width: '100%', maxWidth: '450px', p: '2rem', borderRadius: '12px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '1rem' }}>
                            <img src={QRISIcon} alt="QRIS Icon" style={{ width: '59px', height: '23px' }} />
                            <img src={LogoIcon} alt="Logo Icon" style={{ width: '30px', height: 'auto' }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                            Samsul
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'center', mb: '2rem' }}>
                            RupiApp by BCA - {formatAccountNumber(accountNumber)}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: '2rem' }}>
                            <img src={QRImage} alt="QR Code" style={{ width: '200px', height: 'auto' }} />
                        </Box>
                        <Button 
                            variant="outlined" 
                            sx={{ borderColor: '#fff', color: '#fff', width: '100%', mb: '2rem' }}
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
            </Container>
        </Layout>
    );
};

export default QRTerimaTransfer;
