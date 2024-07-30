import * as React from 'react';
import { Box, Typography } from '@mui/material';
import addIcon from '../../img/icons/Add-Rectangle.svg';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useNavigate } from 'react-router-dom';

export const TambahRekening = () => {
  const navigate = useNavigate();

  const handlePageChange = ( path) => {
    navigate(path);
  };

    return (
        <Box sx={{ backgroundColor: "#EFEFEF", marginY: 5}}>
          <Box sx={{ display: "flex",  justifyContent: "space-between", alignItems: 'center', padding: 3 }}>
            <img 
              src={addIcon} alt="" 
              style={{ cursor: "pointer" }} 
              onClick={() => handlePageChange('/')}
            />
            <Typography variant="body1" sx={{ color: "#0A3967" }}>
              Tambah rekening baru
            </Typography>
            <ArrowForwardIosRoundedIcon 
              style={{ color: "#0066AE", cursor: "pointer" }} 
              onClick={() => handlePageChange('/')}
            />
          </Box>
        </Box>
    );
};
