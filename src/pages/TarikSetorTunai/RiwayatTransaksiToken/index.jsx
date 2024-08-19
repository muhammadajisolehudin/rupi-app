import { Box, Typography } from '@mui/material';
import { TransactionRiwayatCard } from './TransactionRiwayatCard';
import { useTransactionHistory } from '../../../services/tarik-setor-tunai/riwayat-token';

export const RiwayatTransaksiToken = () => {
    const { data, isLoading, isError, error } = useTransactionHistory();

    const transactionData = data?.data?.data;

    if (isLoading) {
        return <Typography
            variant="h6"
            component="h2"
            sx={{
                fontFamily: 'Calibri',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '24px',
                letterSpacing: '0.15px',
                textAlign: 'center',
                marginTop: '3rem',
                marginBottom: '3rem',
            }}
        >Please wait...</Typography>;
    }

    if (isError) {
        return <Typography
            color="error"
            variant="h6"
            component="h2"
            sx={{
                fontFamily: 'Calibri',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '24px',
                letterSpacing: '0.15px',
                textAlign: 'center',
                marginTop: '3rem',
                marginBottom: '3rem',
            }}>{error.message}</Typography>;
    }

    return (
        <Box px={5}>
            <Typography
                variant="h6"
                component="h2"
                sx={{
                    fontFamily: 'Calibri',
                    fontSize: '24px',
                    fontWeight: 700,
                    lineHeight: '24px',
                    letterSpacing: '0.15px',
                    textAlign: 'left',
                    marginTop: '3rem',
                    marginBottom: '1rem',
                }}
            >
                Hari ini
            </Typography>

            <hr style={{
                border: '1px solid #E0E0E0',
                margin: 0
            }} />

            {transactionData.map((transactionItem) => (
                <TransactionRiwayatCard key={transactionItem.code} transactionData={transactionItem} />
            ))}
        </Box>
    );
};
