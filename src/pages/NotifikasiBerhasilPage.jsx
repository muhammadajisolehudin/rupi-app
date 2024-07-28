import React, { useState } from 'react';
import { Box, Button, Container, Typography, Modal, Card, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import { Layout } from "./layout";
import BreadcrumbsComponent from '../assets/components/layoutsComponents/Breadcrumbs';
import ilustrasi from '../assets/img/complete ilustrasi.png'; 

export const NotifikasiBerhasilPage = () => {
    const [open, setOpen] = useState(false); 

    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false); 
    
    const formatAccountNumber = (number) => {
       
        const visibleDigits = 4; 
        const hiddenDigits = number.length - visibleDigits;
        const stars = '*'.repeat(hiddenDigits);
    
        return `${stars}${number.slice(-visibleDigits)}`;
    };

    const accountNumber = '992192925554';

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        zIndex: 1300,
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    return (
        <Layout>
            <Container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                <BreadcrumbsComponent />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Transaksi Berhasil
                    </Typography>
                    <img src={ilustrasi} alt="Ilustrasi" style={{ width: '100%', maxWidth: '200px', height: 'auto' }} />
                    <Button 
                        onClick={handleOpen}
                        sx={{ 
                            backgroundColor: "#0066AE",
                            py: 2,
                            px: 18,
                            borderRadius: "12px",
                            textTransform: "capitalize",
                            mt: 4,
                        }}
                        variant="contained"
                    >
                        Lihat Bukti Transfer
                    </Button>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                      <Card sx={style}>
                            <IconButton 
                                style={{ float: 'right', color: '#0066AE' }} 
                                onClick={handleClose}
                            >
                                <CloseIcon />
                            </IconButton>
                            <Box sx={contentStyle}>
                                <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', mb: 2 }}>
                                    <img src="/logo.png" alt="Logo" style={{ width: '30px', height: 'auto', marginRight: '8px' }} />
                                    <Typography variant="h6" component="h2">
                                        Rupi App
                                    </Typography>
                                </Box>
                                <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Transfer Berhasil
                                </Typography>
                            </Box>
                            
                            <Divider sx={{ mb: 2, borderColor: '#021526' }} />
                            <Typography variant="subtitle1" sx={{ color: '#6c757d', mb: 1 }}>
                                Penerima
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                HISTORIA COFFEN
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Bank Central Asia - 8899101033
                            </Typography>
                            <Divider sx={{ my: 2 }} /> 
                            <Typography variant="subtitle1" sx={{ color: '#6c757d', mb: 1 }}>
                                Rincian Transfer
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Nominal Transfer: 
                                </Typography>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Rp 20.000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body2">
                                    Metode Transfer: 
                                </Typography>
                                <Typography variant="body2">
                                     Antar BCA
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body2">
                                    Biaya Transfer: 
                                </Typography>
                                <Typography variant="body2">
                                    Rp 0
                                </Typography>
                            </Box>
                            <Divider sx={{ my: 2, borderColor: '#021526' }} /> 
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="subtitle1" >
                                    Total Transaksi:
                                </Typography>
                                <Typography variant="subtitle1" >
                                    Rp 20.000
                                </Typography>
                            </Box>
                            
                            <Divider sx={{ mb: '2rem', borderColor: '#021526' }} /> 
                            <Typography variant="subtitle1" sx={{ color: '#6c757d' }}>
                                Rekening Sumber
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                SAMSUL
                            </Typography>
                            <Typography variant="body2">
                                Bank Central Asia {formatAccountNumber(accountNumber)}
                            </Typography>
                            <Card sx={{ 
                                backgroundColor: 'white', 
                                padding: '1.5rem', 
                                borderRadius: '12px',
                                boxShadow: 3,
                                textAlign: 'center', 
                                display: 'flex',
                                flexDirection: 'column', 
                                gap: '1rem',
                                marginTop: '2rem'
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                                <Box sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    gap: '0.5rem', 
                                    '&:hover img': {
                                        transform: 'scale(1.1)', 
                                        transition: 'transform 0.3s ease', 
                                    } 
                                    }}>
                                    <img 
                                        src="../src/assets/img/icons/Icon_share.png" 
                                        alt="Share Icon" 
                                        style={{ width: '14px', height: '14px' }} 
                                    />
                                    <Typography 
                                        variant="p" 
                                        sx={{ 
                                            fontWeight: 'bold', 
                                            color: '#0066AE',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                transform: 'scale(1.05)', 
                                                transition: 'transform 0.3s ease', 
                                            }
                                        }}
                                        component="a" 
                                        href="/notif-success" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Bagikan Resi
                                    </Typography>
                                </Box>
                                <Box sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    gap: '0.5rem', 
                                    '&:hover img': {
                                        transform: 'scale(1.3)', 
                                        transition: 'transform 0.3s ease', 
                                    } 
                                    }}>
                                    <img 
                                        src="../src/assets/img/icons/Icon_download.png" 
                                        alt="Download Icon" 
                                        style={{ width: '14px', height: '14px' }} 
                                    />
                                    <Typography 
                                        variant="p" 
                                        sx={{ 
                                            fontWeight: 'bold', 
                                            color: '#0066AE',
                                            textDecoration: 'none' ,
                                            '&:hover': {
                                                transform: 'scale(1.05)', 
                                                transition: 'transform 0.3s ease', 
                                            }
                                                    }}
                                        component="a" 
                                        href="/notif-success" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Download
                                    </Typography>
                                </Box>
                                </Box>
                                
                            </Card>
                        </Card>
                    </Modal>
                </Box>
            </Container>
        </Layout>
    );
};

export default NotifikasiBerhasilPage;
