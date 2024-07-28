
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { BerandaPage } from '../pages/BerandaPage';
import { TransferRupiahPage } from '../pages/TransferRupiahPage';
import { NotifikasiBerhasilPage } from '../pages/NotifikasiBerhasilPage';
import { QRTerimaTransfer } from '../pages/QRTerimaTransfer';
import BuatPin from "../pages/auth/BuatPin";
import MasukPin from "../pages/auth/MasukPin";
import BuatPasswordBaru from "../pages/auth/BuatPassword";
// import { PinBaru } from "../pages/auth/PinBaru";

export const RouteList = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/beranda" element={ <BerandaPage/>}/>
          <Route path="/transfer-rupiah" element={ <TransferRupiahPage/>}/>
          <Route path="/notif-success" element={ <NotifikasiBerhasilPage/>}/>
          <Route path="/QR-terima-transfer" element={ <QRTerimaTransfer/>}/>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/buat-pin" element={<BuatPin />} />
          <Route path="/masuk-pin" element={<MasukPin/>}/>
          <Route path="/buat-password" element={<BuatPasswordBaru/>}/>
        </Routes>
    </BrowserRouter>
  );
};

// export default RouteList;
