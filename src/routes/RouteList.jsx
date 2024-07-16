import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/auth/LoginPage";
import BuatPin from "../pages/auth/BuatPin";
import MasukPin from "../pages/auth/MasukPin";
// import { PinBaru } from "../pages/auth/PinBaru";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/buat-pin" element={<BuatPin />} />
        <Route path="/masuk-pin" element={<MasukPin/>}/>
      </Routes>
    </BrowserRouter>
  );
};

// export default RouteList;
