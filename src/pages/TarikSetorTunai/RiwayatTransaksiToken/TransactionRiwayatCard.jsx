import { Box, Typography, Card, Grid } from '@mui/material';

export const TransactionRiwayatCard = ({ transactionData }) => {
    const { type, is_success, code, created_at } = transactionData;

    return (
        <>
            <Card
                sx={{
                    padding: '15px 20px',
                    borderBottom: '1px solid #E0E0E0',
                    boxShadow: 'none',
                    borderRadius: '0',
                }}
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid item>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                                fontFamily: 'Calibri',
                                fontSize: '18px',
                                fontWeight: 700,
                                lineHeight: '24px',
                                letterSpacing: '0.15px',
                                marginBottom: '8px',
                            }}
                        >
                            {type === 'TOPUP' ? 'Setor Tunai' : 'Tarik Tunai'}
                        </Typography>
                        <Typography
                            sx={{
                                color: '#0066AE',
                                fontFamily: 'Calibri',
                                fontSize: '18px',
                                fontWeight: 400,
                                lineHeight: '24px',
                                margin: 0,
                            }}
                        >
                            {code}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            sx={{
                                color: '#1C1C1E',
                                textAlign: 'center',
                                fontFamily: 'Calibri',
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '23px',
                                marginBottom: '6px',
                            }}
                        >
                            {new Date(created_at).toLocaleString('id-ID', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true,
                            }).replace('pukul', ',')}
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: '#12D79C',
                                borderRadius: '20px',
                                padding: '5px',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    fontFamily: 'Calibri',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    lineHeight: '23px',
                                    margin: 0,
                                }}
                            >
                                {is_success ? 'Berhasil' : 'Gagal'}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};