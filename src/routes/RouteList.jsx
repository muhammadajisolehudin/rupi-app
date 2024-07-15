
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { BerandaPage } from '../pages/BerandaPage';


export const RouteList = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/beranda" element={ <BerandaPage/>}/>
        </Routes>
    </BrowserRouter>
  );
};

// export default RouteList;
