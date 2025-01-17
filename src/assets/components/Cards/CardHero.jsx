import { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";
import bannerImage from "../../img/banner.png";
import calendarIcon from "../../img/icons/calendar.png";
import avatarWaveImage from "../../img/avatar and wave.png";

export const CardHero = ({ user }) => {
  const lightBlue = "#EDF4FF";
  const darkBlue = "#0A3967";
  const blue = "#0066AE";

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDateState(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "row",
        p: { xs: "20px 36px", lg: "3rem 4rem " },
        height: "auto",
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
      }}
      aria-label="Banner utama dengan informasi waktu dan sapaan"
    >
      <Box sx={{ flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: lightBlue,
            color: darkBlue,
            width: { xs: "100%", md: "auto", lg: "auto" },
            maxWidth: { xs: "100%", md: "90%", lg: "80%" },
            padding: "3.5px 27.5px",
            marginBottom: "40px",
            fontSize: "16px",
            fontWeight: "500",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
          aria-label="Tanggal dan waktu saat ini"
        >
          <img
            src={calendarIcon}
            alt="Calendar"
            style={{
              width: "24px",
              height: "24px",
              marginRight: "10px",
            }}
          />
          <Typography variant="body1" component="p" sx={{ marginBottom: 0 }}>
            {`${dateState.toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}, ${dateState
              .toLocaleTimeString("id-ID", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })
              .replace(/\./g, ":")}`}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: darkBlue,
            fontWeight: 700,
            marginBottom: "16px",
            maxWidth: "80%",

          }}
          aria-label="Ucapan selamat datang kepada anda"
        >
          Selamat Siang, {user.full_name}!
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: blue,
            fontSize: { xs: "14px", lg: "18px" },
            fontWeight: 500,
          }}
          aria-label="Ucapan semoga harimu menyenangkan"
        >
          Semoga harimu menyenangkan!
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: "auto",
          width: { xs: "100%", lg: "calc(100% - 430px)" },
          overflow: "hidden",
          p: 20
        }}
      >
        <img
          src={avatarWaveImage}
          alt="Avatar and Wave"
          style={{
            position: "absolute",
            right: 0,
            top: "42%",
            left: "50%",
            width: "100%",
            height: "80%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>
    </Box>
  );
};