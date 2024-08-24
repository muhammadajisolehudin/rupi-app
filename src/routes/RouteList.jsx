import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { VerifyOtpPage } from '../pages/auth/VerifyOtpPage';
import { SetPinPage } from '../pages/auth/SetPinPage';
import { SetPasswordPage } from '../pages/auth/SetPasswordPage';
import { KonfirmasiPinPage } from '../pages/auth/KonfirmasiPinPage';
import { ProtectedUser } from '../assets/components/Protected/protected';
import { BerandaPage } from '../pages/BerandaPage';
import { TransferRupiahPage } from '../pages/TransferRupiah/TransferRupiahPage';
import { QRTerimaTransfer } from '../pages/QRTerimaTransfer/QRTerimaTransfer';
import { TarikSetorTunaiPage } from "../pages/TarikSetorTunai/TarikSetorTunaiPage";
import { QrisPage } from '../pages/Qris/QrisPage';
import TransferKePenerimaBaru from '../pages/TransferRupiah/TrasnferKePenerimaBaru';
import QrBayar from '../pages/Qris/QrBayar';
import QrMerchan from '../pages/Qris/QrMerchan';
import { AuthProvider } from '../context/AuthContext';
import { ProtectedAccount } from '../assets/components/Protected/ProtectedAccount';
import { InfoSaldoPage } from '../pages/InfoSaldo/InfoSaldoPage';
import { PengaturanPage } from '../pages/Pengaturan';
import { RiwayatTransfer } from '../pages/QrTerimaTransfer/RiwayatTransfer';
import { MutasiPage } from '../pages/Mutasi/MutasiPage';
import { TransferProvider } from '../context/TransferContext';
import { QrProvider } from '../context/QrContext';
import { ForgotPasswordPage } from '../pages/auth/ForgotPassword';
import { NotifikasiAktivitasPage } from "../pages/Notifikasi/NotifikasiAktivitasPage";

export const RouteList = () => {
  // const navigate = useNavigate()
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/*"
            element={
              <ProtectedUser>
                <TransferProvider>
                  <QrProvider>
                  <Routes>
                    {/* auth */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/verify" element={<VerifyOtpPage />} />
                    <Route path="/set-pin" element={<SetPinPage />} />
                    <Route
                      path="/konfirm-pin"
                      element={<KonfirmasiPinPage />}
                    />
                    <Route path="/set-password" element={<SetPasswordPage />} />
                    <Route
                      path="/*"
                      element={
                        <ProtectedAccount>
                          <Routes>
                            <Route path="/" element={<BerandaPage />} />
                            <Route path="/info-saldo" element={<InfoSaldoPage />} />
                            <Route path="/mutasi" element={<MutasiPage />} />

                            {/* transfer */}
                            <Route path="/transfer-rupiah" element={<TransferRupiahPage />} />
                            <Route
                              path="/transfer-rupiah/transfer-ke-penerima-baru"
                              element={<TransferKePenerimaBaru />}
                            />
                            <Route path="/qr-terima-transfer" element={<QRTerimaTransfer />} />
                            <Route path="/qr-terima-transfer/riwayat" element={<RiwayatTransfer />} />
                            <Route path="/qris" element={<QrisPage />} />
                            <Route path="/qris/qr-bayar" element={<QrBayar />} />
                            <Route path="/qris/qr-merchan" element={<QrMerchan />} />
                            <Route path="/tarik-setor-tunai" element={<TarikSetorTunaiPage />} />

                            {/* pengaturan */}
                            <Route path="/pengaturan" element={<PengaturanPage />} />

                            {/* notifikasi aktivitas */}
                            <Route path="/notifikasi-aktivitas" element={<NotifikasiAktivitasPage />} />
                          </Routes>
                        </ProtectedAccount>
                      }
                    />
                  </Routes>
                  </QrProvider>
                </TransferProvider>
              </ProtectedUser>
            }
          />
        </Routes>
        {/* </TransferRupiahProvider> */}
      </AuthProvider>
    </BrowserRouter>
  );
};
