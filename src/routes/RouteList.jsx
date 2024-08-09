import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { VerifyOtpPage } from '../pages/auth/VerifyOtpPage';
import { SetPin } from '../pages/auth/SetPinPage';
import { SetPasswordPage } from '../pages/auth/SetPasswordPage';
import { PinPage } from '../pages/auth/MasukPin';
import { ProtectedUser } from '../assets/components/Protected/protected';
import { BerandaPage } from '../pages/BerandaPage';
import { TransferRupiahPage } from '../pages/TransferRupiah/TransferRupiahPage';

import { QRTerimaTransfer } from '../pages/QRTerimaTransfer';
import { TarikSetorTunaiPage } from '../pages/TarikSetorTunai/TarikSetorTunaiPage';
import Index from '../pages/TransferRupiah/TrasnferKePenerimaBaru';
import { TransferRupiahProvider } from '../context/TransferRupiahContext';
import InfoSaldoPage from '../pages/InfoSaldo/InfoSaldoPage';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <TransferRupiahProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/info-saldo" element={<InfoSaldoPage />} />

          <Route path="/transfer-rupiah" element={<TransferRupiahPage />} />
          <Route
            path="/transfer-rupiah/transfer-ke-penerima-baru"
            element={<Index />}
          />

          {/* auth */}
          <Route path="/QR-terima-transfer" element={<QRTerimaTransfer />} />
          <Route path="/tarik-setor-tunai" element={<TarikSetorTunaiPage />} />
          <Route path="/verify" element={<VerifyOtpPage />} />
          <Route path="/beranda" element={<BerandaPage />} />
          <Route path="/set-pin" element={<SetPin />} />
          <Route path="/pin" element={<PinPage />} />
          <Route path="/set-password" element={<SetPasswordPage />} />
          {/* <Route
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
        /> */}
        </Routes>
      </TransferRupiahProvider>
    </BrowserRouter>
  );

  // import { PinBaru } from "../pages/auth/PinBaru";
};

// export default RouteList;
