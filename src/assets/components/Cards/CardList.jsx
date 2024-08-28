import { Box, Card, CardContent, Button, Typography, Divider } from "@mui/material";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import bcaWhiteIcon from "../../img/icons/bca-white-icon.svg";
import { styled } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { useTransferContext } from "../../../context/TransferContext";


const Dots = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'radial-gradient(circle, rgba(255,255,255,0.5) 20%, transparent 20%)',
  backgroundSize: '20px 20px', // Ukuran bintik-bintik
  transform: 'scale(0)', // Awalnya tidak terlihat
  transition: 'transform 0.5s ease', // Transisi halus untuk transformasi bintik-bintik
  pointerEvents: 'none', // Tidak memblokir interaksi dengan elemen lain
}));

export const CardList = ({ cardData }) => {

  const { setStep, handleNext } = useTransferContext();
  const navigate = useNavigate();
  const handleClick = (receiver) => {
    setStep(1);
    handleNext({
      account_number: receiver.account_number, fullname: receiver.fullname, destination_id: receiver.id
    });
    navigate('/transfer-rupiah/transfer-ke-daftar-rekening');
  };

  return (
    <Box sx={{ minWidth: 275, boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)" }}
      aria-label="daftar transaksi favorite"
    >
      <Card sx={{ borderRadius: 1 }}>
        <CardContent sx={{ backgroundColor: "white", pt:3 }}>
          {cardData?.map((data) => (
            <>
              <Box
                key={data.id}
                onClick={() => { handleClick(data) }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "18px 50px",
                  transition: 'background-color 0.5s ease', // Transisi halus untuk perubahan warna latar belakang
                  overflow: 'hidden', // Menghindari bintik-bintik meluas ke luar elemen
                  '&:hover': {
                    backgroundColor: '#0A3967',
                    color: 'white',
                    cursor:"pointer",
                    borderRadius:1
                  },
                  '&:hover .dots': {
                    transform: 'scale(1)', // Tampilkan bintik-bintik saat hover
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    width: "100%",
                  }}
                >
                  <img
                    src={bcaWhiteIcon}
                    alt=""
                    style={{
                      width: "130px",
                    }}
                  />
                  <Box>
                    <Typography
                    variant="h6"
                      sx={{
                        // fontSize: "16px"
                        fontWeight: 400,
                        // color: "#1C1C1E",
                        lineHeight: "24px",
                        letterSpacing: "-0.15px",
                        marginBottom: "8px",
                        
                      }}
                    >
                      Transfer Intra Bank
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        // fontSize: "18px",
                        fontWeight: 300,
                        // color: "#1C1C1E",
                        lineHeight: "24px",
                        letterSpacing: "-0.15px",
                      }}
                    >
                      { data?.fullname }
                      {/* {card.description} */}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  onClick={() => handleClick(data)}
                  aria-label={`Tombol navigasi cepat untuk transfer ke rekening di transaksi favorite, ini akan membawa Anda ke halaman transfer`}
                  role="button"
                >
                  <ChevronRightRoundedIcon fontSize="large" />
                </Button>
                
              </Box>
              <Divider/>
            </>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};