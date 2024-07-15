
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';


export const RouteList = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>
  );
};

// export default RouteList;
