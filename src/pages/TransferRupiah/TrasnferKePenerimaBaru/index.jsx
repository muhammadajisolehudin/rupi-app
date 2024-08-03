// src/pages/transferRupiah/Index.js
import React from 'react';
import { Box, Card, Container } from '@mui/material';
import { Layout } from '../../layout';
import BreadcrumbsComponent from '../../../assets/components/breadCrumbs/Breadcrumbs';
import { BreadcrumbsTranferRupiah } from '../../../assets/components/breadCrumbs/BreadcrumbsTransferRupiah';
// import { useTransferRupiah } from '../../../context/transferRupiahContext';
import { RekeningBaru } from './RekeningBaru';
import { NominalTransfer } from './NominalTransfer';
import { KonfirmasiTransfer } from './konfirmasiTransfer';
import { TransferBerhasil } from './TransferBerhasil';
import { MasukanPin } from './MasukanPin';
import { useTransferRupiahContext } from '../../../context/TransferRupiahContext';

const Index = () => {
    const { step, handleNext, handleSubmit } = useTransferRupiahContext();

    return (
        <Layout>
            <Box sx={{ px: 6, paddingTop: '1.5rem', paddingBottom: '2rem' }}>
                <BreadcrumbsComponent />
                <Card sx={{ mt: 6, mb: 4 }}>
                    <BreadcrumbsTranferRupiah />
                    <Container>
                        <>
                            {step === 1 && <RekeningBaru onNext={handleNext} />}
                            {step === 2 && <NominalTransfer onNext={handleNext} />}
                            {step === 3 && <KonfirmasiTransfer onNext={handleNext} />}
                            {step === 4 && <MasukanPin onNext={handleNext} />}
                            {step === 5 && <TransferBerhasil onSubmit={handleSubmit} />}
                        </>
                    </Container>
                </Card>
            </Box>
        </Layout>
    );
};

export default Index;
