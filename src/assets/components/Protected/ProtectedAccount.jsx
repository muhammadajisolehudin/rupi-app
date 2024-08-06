import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAccountBank } from '../../../services/account/account-detail'; // Sesuaikan path ini
import { useAuthContext } from '../../../context/AuthContext';
import { Box, CircularProgress } from '@mui/material';

export const ProtectedAccount = ({ children }) => {
    const { account, setAccount } = useAuthContext()
    const { data: Account, isLoading, error } = useGetAccountBank();
    const navigate = useNavigate();
    
    // if (error) {
    //     navigate("/set-password");
    // }
    useEffect(() => {
        if (isLoading) return; // Jangan lakukan apapun saat loading

        if (error) {
            navigate("/set-password");
            return;
        }

        if (Account) {
            setAccount(Account);
        }
    }, [isLoading, error, Account, setAccount, navigate]);


    if (isLoading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh', // Menggunakan 100% dari tinggi viewport
                }}
            >
                <CircularProgress />
            </Box>
        ); // Tampilkan loader saat data di-fetch
    }

    return children;
};
