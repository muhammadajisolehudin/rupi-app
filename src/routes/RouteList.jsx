
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { VerifyOtpPage } from '../pages/auth/VerifyOtpPage';
import { SetPin } from '../pages/auth/SetPinPage';
import { SetPasswordPage } from '../pages/auth/SetPasswordPage';
import { PinPage } from '../pages/auth/MasukPin';
import { ProtectedUser } from '../assets/components/Protected/protected';
import { BerandaPage } from "../pages/BerandaPage";
import { TransferRupiahPage } from "../pages/TransferRupiah/TransferRupiahPage";
import { NominalTransferPage } from '../pages/TransferRupiah/NominalTransferPage';
import { RekeningBaruPage } from '../pages/TransferRupiah/RekeningBaruPage';
import { KonfirmasiTransferPage } from '../pages/TransferRupiah/konfirmasiTransferPage';
import { MasukanPinPage } from '../pages/TransferRupiah/MasukanPinPage';
import { TransferBerhasilPage } from '../pages/TransferRupiah/TransferBerhasilPage';
import { QRTerimaTransfer } from '../pages/QRTerimaTransfer';
import { TarikSetorTunaiPage } from "../pages/TarikSetorTunaiPage";


export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/transfer-rupiah" element={<TransferRupiahPage />} />
        <Route
          path="/transfer-rupiah/transfer-ke-penerima-baru/masukan-nomor-rekening"
          element={<RekeningBaruPage />}
        />
        <Route
          path="/transfer-rupiah/transfer-ke-penerima-baru/masukan-nominal-transfer"
          element={<NominalTransferPage />}
        />
        <Route
          path="/transfer-rupiah/transfer-ke-penerima-baru/konfirmasi-transfer"
          element={<KonfirmasiTransferPage />}
        />
        <Route
          path="/transfer-rupiah/transfer-ke-penerima-baru/masukan-pin"
          element={<MasukanPinPage />}
        />
        <Route
          path="/transfer-rupiah/transfer-ke-penerima-baru/transfer-berhasil"
          element={<TransferBerhasilPage />}
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
    </BrowserRouter>
  );


// import { PinBaru } from "../pages/auth/PinBaru";

};

// export default RouteList;
