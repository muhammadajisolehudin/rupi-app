import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import arrowDownIcon from '../../img/icons/arrow down.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import creditCardBlack from "../../img/credit card black.png";
import { useState } from 'react';
import { formatAccountNumber, formatBalance } from '../../../utils/utilities';

const CardSaldo = ({ account }) => {
  const darkBlue = '#0A3967';
  const blue = '#0066AE';
  const [isNominalVisible, setIsNominalVisible] = useState(true);

  // Function to copy account number to clipboard
  const handleCopy = () => {
    navigator.clipboard
      .writeText(account.balance)
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
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1.5,
        bgcolor:"transparent",
        position: 'relative',
      }}
      
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: 2,
          // zIndex: 999,
          position: 'relative',
          bgcolor: "white",
          borderRadius: 1,
          width:"90%",
          height: "100%",
          p: { xs: 0, md: 3 },
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  sx={{
                    color: blue,
                    fontSize: { xs: '14px', md: '15px' },
                    fontWeight: 500,
                    marginBottom: 0,
                  }}
                >
                  Rekening {formatAccountNumber(account?.account_number)  }
                </Typography>
                <img
                  src={arrowDownIcon}
                  alt="arrow down"
                  style={{ width: '15px', height: '15px' }}
                />
              </Box>
              <Button
                sx={{ minWidth: 'auto', padding: 0 }}
                onClick={handleCopy}
              >
                <ContentCopyIcon />
              </Button>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: 4,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  color: darkBlue,
                  fontSize: { xs: '16px', md: '20px' },
                  fontWeight: 500,
                }}
              >
                IDR{' '}
                <span style={{ fontWeight: "bold" }}>
                  {isNominalVisible ? formatBalance(account?.balance) : '*****'}
                </span>
              </Typography>
              <Button
                sx={{ minWidth: 'auto' }}
                onClick={toggleNominalVisibility}
              >
                {isNominalVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          width: 110,
          height: '100%',
          backgroundImage: `url(${creditCardBlack})`,
          borderRadius: 1.5,
          backgroundSize: 'cover', // Untuk memastikan gambar menutupi seluruh area
          backgroundPosition: 'center', // Untuk memposisikan gambar di tengah
          backgroundRepeat: 'no-repeat',
          ml:"-1rem" // Untuk menghindari pengulangan gambar
        }}
      >
        {/* <img src={creditCardBlack} alt="" /> */}
        {/* Konten box di sini jika ada */}
      </Box>
      
    </Card>
  );
};

export default CardSaldo;
