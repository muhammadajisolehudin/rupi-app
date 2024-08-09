import { useState } from 'react';
import { Box, Button, Container, Typography } from "@mui/material";
import { Layout } from "../layout";
// import BreadcrumbsComponent from '../assets/components/layoutsComponents/Breadcrumbs';
import ilustrasi from '../assets/img/complete ilustrasi.png'; 
import SuccessNotificationModal from '../../assets/components/Modals/ModalNotifBerhasil';
import SuccessTransferModal from '../../assets/components/Modal/ModalTransferBerhasil';
import { Breadcrumb } from '../../assets/components/Breadcrumbs/Breadcrumb';

export const NotifikasiBerhasilPage = () => {
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);

    const handleOpenSuccess = () => setOpenSuccess(true);
    const handleCloseSuccess = () => setOpenSuccess(false);
    const handleOpenDetails = () => {
        setOpenSuccess(false);
        setOpenDetails(true);
    };
    const handleCloseDetails = () => setOpenDetails(false);
    
    const formatAccountNumber = (number) => {
        const visibleDigits = 4; 
        const hiddenDigits = number.length - visibleDigits;
        const stars = '*'.repeat(hiddenDigits);
    
        return `${stars}${number.slice(-visibleDigits)}`;
    };

    // const accountNumber = '992192925554';

    return (
        <Layout>
            <Container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                <Breadcrumb />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Transaksi Berhasil
                    </Typography>
                    <img src={ilustrasi} alt="Ilustrasi" style={{ width: '100%', maxWidth: '200px', height: 'auto' }} />
                    <Button 
                        onClick={handleOpenSuccess}
                        sx={{ 
                            backgroundColor: "#0066AE",
                            py: 2,
                            px: 6,
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '12px',
                            marginTop: '1.5rem',
                            '&:hover': { backgroundColor: '#004BA8' }
                        }}
                    >
                        Lihat Detail Transaksi
                    </Button>
                </Box>
                <SuccessNotificationModal open={openSuccess} handleClose={handleCloseSuccess} handleNext={handleOpenDetails} />
                <SuccessTransferModal open={openDetails} handleClose={handleCloseDetails} formatAccountNumber={formatAccountNumber} accountNumber={"8899101033"} />
            </Container>
        </Layout>
    );
};