import { Box, Card, Container } from '@mui/material';
import { Layout } from '../../layout';
import { useTransferRupiahContext } from '../../../context/TransferRupiahContext';
import { BreadcrumbsQrBayar } from '../../../assets/components/Breadcrumbs/BreadCrumbsQrBayar';
import { InputNominalBayarForm } from './InputNominalBayarForm';
import { KonfirmasiBayarForm } from './KonfirmasiBayarForm';
import { InputPinForm } from './InputPinForm';
import { SuccesInfoBayar } from './SuccesInfoBayar';
import { Breadcrumb } from '../../../assets/components/Breadcrumbs/Breadcrumb';

const QrBayar = () => {
    const { step, handleNext, handleSubmit } = useTransferRupiahContext();

    return (
        <Layout>
            <Box sx={{ px: 6, paddingTop: '1.5rem', paddingBottom: '2rem' }}>
                <Breadcrumb />
                <Card sx={{ mt: 6, mb: 4 }}>
                    <BreadcrumbsQrBayar />
                    <Container>
                        <>
                            {step === 1 && <InputNominalBayarForm onNext={handleNext} />}
                            {step === 2 && <KonfirmasiBayarForm onNext={handleNext} />}
                            {step === 3 && <InputPinForm onNext={handleNext} />}
                            {step === 4 && <SuccesInfoBayar onSubmit={handleSubmit} />}
                        </>
                    </Container>
                </Card>
            </Box>
        </Layout>
    );
};

export default QrBayar;
