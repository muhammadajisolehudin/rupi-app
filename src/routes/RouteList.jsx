
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { VerifyOtpPage } from '../pages/auth/VerifyOtpPage';
import { SetPinPage } from '../pages/auth/SetPinPage';
import { SetPasswordPage } from '../pages/auth/SetPasswordPage';
import { KonfirmasiPinPage } from '../pages/auth/KonfirmasiPinPage';
import { ProtectedUser } from '../assets/components/Protected/protected';
import { BerandaPage } from "../pages/BerandaPage";
import { TransferRupiahPage } from "../pages/TransferRupiah/TransferRupiahPage";
import { QRTerimaTransfer } from '../pages/QRTerimaTransfer';
import { TarikSetorTunaiPage } from "../pages/TarikSetorTunai/TarikSetorTunaiPage";
import { TransferRupiahProvider } from '../context/TransferRupiahContext';
import { QrisPage } from '../pages/Qris/QrisPage';
import TransferKePenerimaBaru from '../pages/TransferRupiah/TrasnferKePenerimaBaru';
import QrBayar from '../pages/Qris/QrBayar';
import { AuthProvider } from '../context/AuthContext';
import { ProtectedAccount } from '../assets/components/Protected/ProtectedAccount';



export const RouteList = () => {
  // const navigate = useNavigate()
  return (
    <BrowserRouter>
      <AuthProvider>
        <TransferRupiahProvider>
          <Routes>
            {/* <Route path="/transfer-rupiah" element={<TransferRupiahPage />} /> */}
              <Route
                path="/transfer-rupiah/transfer-ke-penerima-baru"
                element={<TransferKePenerimaBaru />}
              />
              <Route path="/qr-terima-transfer" element={<QRTerimaTransfer />} />

              <Route path="/qris" element={<QrisPage />} />
              <Route path="/qris/qr-bayar" element={<QrBayar />} />

              <Route path="/tarik-setor-tunai" element={<TarikSetorTunaiPage />} />
          </Routes>
        </TransferRupiahProvider>

        
        <Routes>
          {/* auth */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* <Route path="/verify" element={<VerifyOtpPage />} />
          <Route path="/beranda" element={<BerandaPage />} />
          
          <Route path="/set-password" element={<SetPasswordPage />} />
          <Route path="/set-pin" element={<SetPinPage />} />
          <Route path="/konfirm-pin" element={<KonfirmasiPinPage />} /> */}
          {/* <Route
            path="*"
            element={
              <ProtectedUser>
                
                <Routes>
                  <Route path="/verify" element={<VerifyOtpPage />} />
                  <Route path="/set-pin" element={<SetPinPage />} />
                  <Route path="/pin" element={<KonfirmasiPinPage />} />
                  <Route path="/set-password" element={<SetPasswordPage />} />
                </Routes>
              </ProtectedUser>
            }
          /> */}

          <Route
            path="/*"
            element={
              <ProtectedUser>
                <Routes>
                  <Route path="/verify" element={<VerifyOtpPage />} />
                  {/* <Route path="/beranda" element={<BerandaPage />} /> */}
                  <Route path="/set-pin" element={<SetPinPage />} />
                  <Route path="/konfirm-pin" element={<KonfirmasiPinPage />} />
                  <Route path="/set-password" element={<SetPasswordPage />} />
                  <Route
                    path="/*"
                    element={
                      <ProtectedAccount>
                        <Routes>
                          <Route path="/beranda" element={<BerandaPage />} />
                          <Route path="/transfer-rupiah" element={<TransferRupiahPage />} />
                          {/* Add more protected account routes here */}
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
    </BrowserRouter>
  );

};


