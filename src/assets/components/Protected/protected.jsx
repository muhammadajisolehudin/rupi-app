import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CookiesKey, CookiesStorage } from "../../../utils/cookies";
import FailAlert from "../Alerts/FailAlert";

export const ProtectedUser = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const TokenUser = CookiesStorage.get(CookiesKey.AuthToken);

  useEffect(() => {
<<<<<<< HEAD
    if (TokenUser == undefined) {
      setFirstLoad(true);
    }
  }, []);
=======
    const checkAuth = () => {
      // Jika token tidak ada, arahkan ke halaman login
      if (!TokenUser) {
        <FailAlert message="kamu harus melakukan login terlebih dahulu"/>
        if (location.pathname !== "/login") {
          navigate("/login");
        }
      } else {
        if (location.pathname === "/login") {
          navigate("/beranda");
        }
      }
      setLoading(false);
    };
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55

    checkAuth();
  }, [TokenUser, navigate, location.pathname]);


  if (loading) {
    return null; 
  }

  return children;
};
