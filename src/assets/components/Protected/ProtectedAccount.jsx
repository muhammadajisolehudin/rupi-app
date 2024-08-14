import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAccountDetail } from '../../../services/account/account-detail'; // Sesuaikan path ini
import { useAuthContext } from '../../../context/AuthContext';
import { Box, CircularProgress } from '@mui/material';
import { CookiesKey, CookiesStorage } from '../../../utils/cookies';

export const ProtectedAccount = ({ children }) => {
    // const { logout } = useAuthContext()
    const { account, setAccount, logout } = useAuthContext();
    const { data: Account, isLoading, error } = useGetAccountDetail();
    const navigate = useNavigate();
    // if (error) {
    //     navigate("/set-password");
    // }
    useEffect(() => {

<<<<<<< HEAD
        const handleError = async () => {
=======
        const handleError= async()=>{
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
            if (isLoading) return;

            if (error) {
                console.log("ini error : ", error.response.status)
                if (error.response.status === 403) {
                    navigate("/set-password");
                }
                if (error.response.status === 401) {
<<<<<<< HEAD
=======
                    
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
                    CookiesStorage.remove(CookiesKey.AuthToken);
                    CookiesStorage.remove(CookiesKey.User);
                    logout();
                    setTimeout(() => {
                        navigate('/login');
<<<<<<< HEAD
                    }, 1000);
                }


=======
                    }, 1000); 
                }
                
               
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
                return;
            }


            if (Account) {
                setAccount(Account);
            }
<<<<<<< HEAD
        }

        handleError()
        console.log("ini akun :", account)
    }, [isLoading, error, Account, setAccount, logout]);
=======
        } 
        
        handleError()
        console.log("ini akun :", account)
    }, [isLoading, error, Account, setAccount, logout ]);
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55


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


