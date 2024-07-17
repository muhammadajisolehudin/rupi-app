// Layout.tsx
import { Box, CssBaseline } from '@mui/material';
import React from "react"
import Navbar from '../assets/components/layoutsComponents/navbar';
import { Footer } from '../assets/components/layoutsComponents/Footer';

export const Layout = ({ children }) => {

  return (
    <React.Fragment>
        <CssBaseline>
            <Box sx={{  }}>
                <Navbar />
                    
                    <Box sx={{ backgroundColor: "#F5F5F5" }}>
                      { children }
                    </Box>
                    
                <Footer />

            </Box>

        </CssBaseline>
    </React.Fragment>
    
  );
};

