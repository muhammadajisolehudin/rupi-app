import { Box, Card, Container } from '@mui/material';
import { Layout } from '../../layout';
import { InputPinForm } from './InputPinForm';
import { Breadcrumb } from '../../../assets/components/Breadcrumbs/Breadcrumb';
import { useTransferContext } from '../../../context/TransferContext';
import { QrisMerchan } from './qrisMerchan';

const QrMerchan = () => {
    const { step, handleNext } = useTransferContext();

    return (
        <Layout>
            <Box sx={{ px: 6, paddingTop: '1.5rem', paddingBottom: '2rem' }}>
                <Breadcrumb />
                <Card sx={{ mt: 6, mb: 4 }}>
                    {/* <BreadcrumbsQrBayar /> */}
                    <Container>
                        <>
                            {step === 1 && <InputPinForm onNext={handleNext} />}
                            {step === 2 && <QrisMerchan />}
                            {/* {step === 3 && <InputPinForm onNext={handleNext} />}
                            {step === 4 && <SuccesInfoBayar onSubmit={handleSubmit} />} */}
                        </>
                    </Container>
                </Card>
            </Box>
        </Layout>
    );
};

export default QrMerchan;
