import { useState, useEffect } from 'react';
import { useGenerateTransactionQR } from '../../../services/qr-transfer/generate-qr';
import { Box } from '@mui/system';

export const QRTerimaTransferCode = ({ amount }) => {
    const [qrCode, setQrCode] = useState(null);
    const { mutate, isLoading, error } = useGenerateTransactionQR();

    useEffect(() => {
        if (amount !== undefined) {

            setQrCode(null);

            mutate({ amount }, {
                onSuccess: (response) => {
                    if (response.data.success) {
                        setQrCode(response.data.data.qrCode);
                    }
                },
                onError: (err) => {
                    console.error('Error generating QR code:', err);
                },
            });
        }
    }, [amount, mutate]);

    return (
        <Box >
            {!qrCode && !isLoading && !error && <p>Generating your QR Code...</p>}

            {error && <p>Something went wrong while generating the QR code. Please try again later</p>}

            {qrCode && !isLoading && (
                <div>
                    <img src={qrCode} alt="QR Code" style={{ width: '15rem', height: '15rem', borderRadius: '10px' }} />
                </div>
            )}
        </Box>
    );
};
