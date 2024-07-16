import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/auth/LoginPage";
import BuatPin from "../pages/auth/BuatPin";
import MasukPin from "../pages/auth/MasukPin";
import BuatPasswordBaru from "../pages/auth/BuatPassword";
// import { PinBaru } from "../pages/auth/PinBaru";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/buat-pin" element={<BuatPin />} />
        <Route path="/masuk-pin" element={<MasukPin/>}/>
        <Route path="/buat-password" element={<BuatPasswordBaru/>}/>
      </Routes>
    </BrowserRouter>
  );
};

// export default RouteList;
