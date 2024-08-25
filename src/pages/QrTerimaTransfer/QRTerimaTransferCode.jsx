import { useState, useEffect } from 'react';
import useGenerateTransactionQR from '../../services/qr-transfer/generate-qr';

export const QRTerimaTransferCode = () => {
    const [qrCode, setQrCode] = useState(null);
    const { mutate, isLoading, error, isError } = useGenerateTransactionQR();

    useEffect(() => {
        mutate(undefined, {
            onSuccess: (response) => {
                if (response.data.success) {
                    setQrCode(response.data.data);
                }
            },
            onError: (err) => {
                console.error('Error generating QR code:', err);
            },
        });
    }, [mutate]);

    return (
        <div>
            {!qrCode && !error && isLoading && <p>Generating your QR Code...</p>}

            {isError && <p>{error?.response.message}</p>}

            {qrCode && !isLoading && (
                <div>
                    <img src={qrCode} alt="QR Code" style={{ width: '300px', height: '300px', borderRadius: '10px' }} />
                </div>
            )}
        </div>
    );
};
