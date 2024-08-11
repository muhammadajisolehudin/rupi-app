import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import arrowDownIcon from '../../img/icons/arrow down.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';

const CardSaldo = ({ account }) => {
  const darkBlue = '#0A3967';
  const blue = '#0066AE';
  const [isNominalVisible, setIsNominalVisible] = useState(true);

  // Function to copy account number to clipboard
  const handleCopy = () => {
    navigator.clipboard
      .writeText('123-456-7890')
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
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: 2,
          p: { xs: 0, md: 3 },
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
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
                  Rekening { account.account_number }
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
                gap: 1,
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
                <span style={{ fontWeight: 800 }}>
                  {isNominalVisible ?  account.balance : '*****'}
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
          width: 100,
          bgcolor: 'black',
          color: 'white',
          height: '100%',
        }}
      />
    </Card>
  );
};

export default CardSaldo;
