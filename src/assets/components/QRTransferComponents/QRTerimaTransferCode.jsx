import { useState, useEffect } from 'react';
import { useGenerateTransactionQR } from '../../../services/qr-transfer/generate-qr';
import { Box } from '@mui/system';

export const QRTerimaTransferCode = ({ amount }) => {
    const [qrCode, setQrCode] = useState(null);
    const { mutate, isLoading, error, isError } = useGenerateTransactionQR();

    useEffect(() => {
        if (amount !== undefined && amount > 0) {
            setQrCode(null);

            mutate({ amount }, {
                onSuccess: (response) => {
                    if (response.data.success) {
                        setQrCode(response.data.data.qrCode);
                    } else {
                        setQrCode(null);
                    }
                },
                onError: (err) => {
                    console.error('Error generating QR code:', err);
                    setQrCode(null);
                },
            });
        }
    }, [amount, mutate]);

    return (
        <Box >
            {!qrCode && !isLoading && !error && <p>Generating your QR Code...</p>}

            {isError && <p>{error?.message}</p>}

            {qrCode && !isLoading && (
                <div>
                    <img src={qrCode} alt="QR Code" style={{ width: '15rem', height: '15rem', borderRadius: '10px' }} />
                </div>
            )}
        </Box>
    );
};
