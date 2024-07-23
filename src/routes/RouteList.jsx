<<<<<<< HEAD

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { BerandaPage } from '../pages/BerandaPage';

=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/auth/LoginPage";
import BuatPin from "../pages/auth/BuatPin";
import MasukPin from "../pages/auth/MasukPin";
import BuatPasswordBaru from "../pages/auth/BuatPassword";
// import { PinBaru } from "../pages/auth/PinBaru";
>>>>>>> b74ba7821849e39e9030b8dfd1f1f8241e6ab18a

export const RouteList = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/beranda" element={ <BerandaPage/>}/>
        </Routes>
=======
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/buat-pin" element={<BuatPin />} />
        <Route path="/masuk-pin" element={<MasukPin/>}/>
        <Route path="/buat-password" element={<BuatPasswordBaru/>}/>
      </Routes>
>>>>>>> b74ba7821849e39e9030b8dfd1f1f8241e6ab18a
    </BrowserRouter>
  );
};

// export default RouteList;
