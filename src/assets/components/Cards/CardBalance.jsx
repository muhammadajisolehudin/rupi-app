import { Box, Card, CardContent, Typography, Button } from "@mui/material";

import buttonEnter from "../../img/icons/button enter.svg";
import arrowDownIcon from "../../img/icons/arrow down.png";
import copyIcon from "../../img/icons/copy.png";
import showIcon from "../../img/icons/show.png";
import creditCardBlack from "../../img/credit card black.png";
<<<<<<< HEAD

const formatAccountNumber = (number) => {
  // Menghapus karakter non-digit dari nomor rekening
  const cleaned = ('' + number).replace(/\D/g, '');

  // Membagi nomor rekening setiap 4 digit dan menyatukan dengan strip
  const formatted = cleaned.replace(/(.{4})/g, '$1-').slice(0, -1);

  return formatted;
};
=======
import { useState } from "react";
import { formatAccountNumber, formatBalance } from "../../../utils/utilities";
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55

export const CardBalance = ({ user }) => {
  const lightBlue = "#EDF4FF";
  const darkBlue = "#0A3967";
  const blue = "#0066AE";
  const neutral = "#FFF";

<<<<<<< HEAD
  

  const formattedAccountNumber = formatAccountNumber(user.account_number);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "9px 30px",
          backgroundColor: lightBlue,
          marginBottom: "24px",
          borderRadius: "10px",
        }}
        aria-label="Informasi saldo pengguna"
      >
        <Typography sx={{ color: darkBlue, fontSize: "20px", fontWeight: 700 }}>
          Info Saldo
        </Typography>
        <Box component="a" href="/saldo">
=======
  const [isNominalVisible, setIsNominalVisible] = useState(true);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(user.account_number)
      .then(() => {
        alert('Rekening number copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };

  const toggleNominalVisibility = () => {
    setIsNominalVisible(!isNominalVisible);
  };


  return (
    <Card sx={{ borderRadius:3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '9px 25px',
          backgroundColor: lightBlue,
          // mt: "4px",
          marginBottom: '24px',
          borderRadius: '10px',
        }}
        aria-label="Informasi saldo pengguna"
      >
        <Typography sx={{ color: darkBlue, fontSize: '20px', fontWeight: 700 }}>
          Info Saldo
        </Typography>
        <Box component="a" href="/info-saldo">
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
          <Button
            sx={{ minWidth: "auto", padding: 0 }}
            aria-label="Tombol Info Saldo, ini akan membawa Anda ke halaman Saldo"
          >
            <img src={buttonEnter} alt="" style={{ width: "28px" }} />
          </Button>
        </Box>
      </Box>
      <Card
        sx={{
<<<<<<< HEAD
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
=======
          position: 'relative',
          borderRadius: '10px',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          mr:"25px"
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
        }}
      >
        <CardContent
          sx={{
<<<<<<< HEAD
            position: "absolute",
            margin: 0,
            zIndex: 1,
            overflow: "hidden",
            padding: "26px 35px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: neutral,
            width: "86%",
            height: "100%",
            borderRadius: "10px",
=======
            position: 'absolute',
            margin: 0,
            zIndex: 1,
            overflow: 'hidden',
            p: '3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: neutral,
            width: '86%',
            height: '100%',
            borderRadius: '10px',
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
          }}
        >
          <Box
            sx={{
<<<<<<< HEAD
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            aria-label="Informasi rekening pengguna dan tombol salin"
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: blue,
                  fontSize: "20px",
                  fontWeight: 500,
                  marginBottom: 0,
                  marginRight: "8px",
                }}
              >
                Rekening 1{ formattedAccountNumber }
=======
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            aria-label="Informasi rekening pengguna dan tombol salin"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{
                  color: blue,
                  fontSize: '20px',
                  fontWeight: 500,
                  marginBottom: 0,
                  marginRight: '8px',
                }}
              >
                Rekening 1{formatAccountNumber(user?.account_number) }
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
              </Typography>
              <img
                src={arrowDownIcon}
                alt=""
<<<<<<< HEAD
                style={{ width: "24px", height: "24px" }}
=======
                style={{ width: '24px', height: '24px' }}
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
              />
            </Box>
            <Button
              sx={{ minWidth: "auto", padding: 0 }}
              aria-label="Tombol Salin, ini akan menyalin nomor rekening pengguna"
<<<<<<< HEAD
=======
              onClick={handleCopy}
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
            >
              <img src={copyIcon} alt="" style={{ width: "24px" }} />
            </Button>
          </Box>

          <Box
            sx={{
<<<<<<< HEAD
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
=======
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
            }}
            aria-label="Informasi saldo pengguna saat ini dan tombol tampilkan"
          >
            <Typography
<<<<<<< HEAD
              sx={{
                color: darkBlue,
                fontSize: "32px",
=======
            variant="h5"
              sx={{
                color: darkBlue,
                // fontSize: '32px',
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
                fontWeight: 500,
                marginBottom: 0,
              }}
              aria-label="Saldo pengguna saat ini"
            >
<<<<<<< HEAD
              IDR <span style={{ fontWeight: 700 }}>{ user.balance }</span>
=======
              IDR{' '}
              <span style={{ fontWeight: "bold" }}>
                {isNominalVisible ? formatBalance(user?.balance) : '*****'}
              </span>
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
            </Typography>
            <Button
              sx={{ minWidth: "auto", padding: 0 }}
              aria-label="Tombol Tampilkan, ini akan menampilkan saldo pengguna"
<<<<<<< HEAD
=======
              onClick={toggleNominalVisibility}
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
            >
              <img
                src={showIcon}
                alt=""
<<<<<<< HEAD
                style={{ width: "32px", height: "32px" }}
=======
                style={{ width: '32px', height: '32px' }}
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
              />
            </Button>
          </Box>
        </CardContent>

        <Box
          sx={{
<<<<<<< HEAD
            display: "flex",
            justifyContent: "flex-end",
            borderRadius: "10px",
          }}
        >
          <img src={creditCardBlack} alt="" style={{ borderRadius: "10px" }} />
        </Box>
      </Card>
    </>
=======
            display: 'flex',
            justifyContent: 'flex-end',
            borderRadius: '10px',
          }}
        >
          <img src={creditCardBlack} alt="" style={{ borderRadius: '10px' }} />
        </Box>
      </Card>
    </Card>
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
  );
};
