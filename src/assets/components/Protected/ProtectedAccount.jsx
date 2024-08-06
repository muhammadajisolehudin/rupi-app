import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAccountBank } from '../../../services/account/account-detail'; // Sesuaikan path ini

export const ProtectedAccount = ({ children }) => {
    const { data: Account, isLoading, error } = useGetAccountBank();
    const navigate = useNavigate();
    
    if (error) {
        navigate("/set-password");
    }

    if (isLoading) {
        return <div>Loading...</div>; // Tampilkan loader saat data di-fetch
    }

    return children;
};
