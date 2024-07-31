
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { BerandaPage } from '../pages/BerandaPage';
import BuatPin from "../pages/auth/SetPinPage";
import MasukPin from "../pages/auth/MasukPin";
import BuatPasswordBaru from "../pages/auth/SetPasswordPage";
import { TransferRupiahPage } from "../pages/TransferRupiah/TransferRupiahPage";
// import { PinBaru } from "../pages/auth/PinBaru";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/beranda" element={ <BerandaPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/set-pin" element={<BuatPin />} />
        <Route path="/masuk-pin" element={<MasukPin/>}/>
        <Route path="/set-password" element={<BuatPasswordBaru/>}/>
        <Route path="/transfer-rupiah" element={ <TransferRupiahPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

// export default RouteList;
