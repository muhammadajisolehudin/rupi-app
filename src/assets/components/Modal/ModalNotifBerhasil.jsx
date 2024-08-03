import React from 'react';
import { Modal, Box, Typography, Card, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconSuccess from '../../img/sukses-notif.png'; 
import IconSwipeUp from '../../img/swipe-up.png'; 

const getCurrentDateTime = () => {
    const now = new Date();
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const day = String(now.getDate()).padStart(2, '0');
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedDateTime = `${day} ${month} ${year} . ${hours}:${minutes} WIB`;
    return formattedDateTime;
};

const SuccessNotificationModal = ({ open, handleClose, handleNext }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Card sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                borderRadius: '12px',
                boxShadow: 24,
                p: 4,
                textAlign: 'center',
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <img src={IconSuccess} alt="Success Notification" />
                </Box>
                <Typography id="modal-title" variant="h5" component="h2" sx={{ mt: 2, fontWeight: 'bold' }}>
                    Berhasil
                </Typography>
                <Typography id="modal-description" sx={{ color: 'gray', mt: 2, mb:10 }}>
                    {getCurrentDateTime()}
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <img
                        src={IconSwipeUp}
                        alt="Swipe Up"
                        style={{ cursor: 'pointer' }}
                        onClick={handleNext}
                    />
                </Box>
                <Typography variant="body1" sx={{  cursor: 'pointer', color: 'gray', mb:5 }} onClick={handleNext}>
                    Lihat Resi
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, color: 'gray', mb:5 }}>
                    Lainnya
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, color: 'gray', mb:2 }}>
                    Penerima
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, fontSize:"18px", fontWeight: 'bold' }}>
                    Historia Coffen
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    BCA - 8899101033
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, color: 'gray' }}>
                    Jumlah Transfer
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, fontSize:"20px", fontWeight: 'bold' }}>
                    Rp 20.000
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    dari Samsul
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
                                Donwload
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            </Card>
        </Modal>
    );
};

export default SuccessNotificationModal;
