import { Box, Card, Container } from '@mui/material';
import { Layout } from '../../layout';
import { BreadcrumbsTranferRupiah } from '../../../assets/components/Breadcrumbs/BreadcrumbsTransferRupiah';
import { RekeningBaruForm } from './RekeningBaruFrom';
import { InputNominalTransferForm } from './InputNominalTransferForm';
import { KonfirmasiTransferForm } from './KonfirmasiTransferForm';
import { SuccesTransferInfo } from './SuccesTransferInfo';
import { InputPinForm } from './InputPinForm';
import { useTransferRupiahContext } from '../../../context/TransferRupiahContext';
import { Breadcrumb } from '../../../assets/components/Breadcrumbs/Breadcrumb';

const TransferKePenerimaBaru = () => {
    const { step, handleNext, handleSubmit } = useTransferRupiahContext();

    return (
        <Layout>
            <Box sx={{ px: 6, paddingTop: '1.5rem', paddingBottom: '2rem' }}>
                <Breadcrumb />
                <Card sx={{ mt: 6, mb: 4 }}>
                    <BreadcrumbsTranferRupiah />
                    <Container>
                        <>
                            {step === 1 && <RekeningBaruForm onNext={handleNext} />}
                            {step === 2 && <InputNominalTransferForm onNext={handleNext} />}
                            {step === 3 && <KonfirmasiTransferForm onNext={handleNext} />}
                            {step === 4 && <InputPinForm onNext={handleNext} />}
                            {step === 5 && <SuccesTransferInfo onSubmit={handleSubmit} />}
                        </>
                    </Container>
                </Card>
            </Box>
        </Layout>
    );
};

export default TransferKePenerimaBaru;
