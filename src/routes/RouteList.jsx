
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { VerifyOtpPage } from '../pages/auth/VerifyOtpPage';
import { SetPinPage } from '../pages/auth/SetPinPage';
import { SetPasswordPage } from '../pages/auth/SetPasswordPage';
import { KonfirmasiPinPage } from '../pages/auth/KonfirmasiPinPage';
import { ProtectedUser } from '../assets/components/Protected/protected';
import { BerandaPage } from '../pages/BerandaPage';
import { TransferRupiahPage } from '../pages/TransferRupiahPage';
import { NotifikasiBerhasilPage } from '../pages/NotifikasiBerhasilPage';
import QRTerimaTransfer from '../pages/QRTerimaTransfer/QRTerimaTransfer';
import QRRiwayatTransfer from '../pages/QRTerimaTransfer/QRRiwayatTransfer';
import BuatPin from "../pages/auth/BuatPin";
import MasukPin from "../pages/auth/MasukPin";
import BuatPasswordBaru from "../pages/auth/BuatPassword";
// import { PinBaru } from "../pages/auth/PinBaru";
import { AuthProvider } from '../context/AuthContext';
import { ProtectedAccount } from '../assets/components/Protected/ProtectedAccount';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <ProtectedUser>
                <Routes>
                  <Route path="/verify" element={<VerifyOtpPage />} />
                  <Route path="/set-pin" element={<SetPinPage />} />
                  <Route path="/konfirm-pin" element={<KonfirmasiPinPage />} />
                  <Route path="/set-password" element={<SetPasswordPage />} />
                  <Route
                    path="/*"
                    element={
                      <ProtectedAccount>
                        <Routes>
                          <Route path="/login" element={<LoginPage />} />
                          <Route path="/beranda" element={<BerandaPage />} />
                          <Route path="/transfer-rupiah" element={<TransferRupiahPage />} />
                          <Route path="/notif-success" element={<NotifikasiBerhasilPage />} />
                          <Route path="/QR-terima-transfer" element={<QRTerimaTransfer />} />
                          <Route path="/QR-terima-transfer/riwayat" element={<QRRiwayatTransfer />} />

                          <Route path="/login" element={<LoginPage />} />
                          <Route path="/buat-pin" element={<BuatPin />} />
                          <Route path="/masuk-pin" element={<MasukPin />} />
                          <Route path="/buat-password" element={<BuatPasswordBaru />} />
                        </Routes>
                      </ProtectedAccount>
                    }
                  />
                </Routes>

              </ProtectedUser>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter >
  );
};

// export default RouteList;
