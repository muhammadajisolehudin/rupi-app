
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { BerandaPage } from '../pages/BerandaPage';
import { TransferRupiahPage } from "../pages/TransferRupiah/TransferRupiahPage";
import VerifyOtpPage from '../pages/auth/VerifyOtpPage';
import SetPin from '../pages/auth/SetPinPage';
import SetPasswordPage from '../pages/auth/SetPasswordPage';
import PinPage from '../pages/auth/MasukPin';
import { ProtectedUser } from '../assets/components/Protected/protected';
// import { PinBaru } from "../pages/auth/PinBaru";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/transfer-rupiah" element={ <TransferRupiahPage/>}/>
        <Route
          path="*"
          element={
            <ProtectedUser>
              <Routes>
                <Route path="/verify" element={<VerifyOtpPage />} />
                <Route path="/beranda" element={<BerandaPage />} />
                <Route path="/set-pin" element={<SetPin />} />
                <Route path="/pin" element={<PinPage />} />
                <Route path="/set-password" element={<SetPasswordPage />} />
              </Routes>
            </ProtectedUser>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

// export default RouteList;
