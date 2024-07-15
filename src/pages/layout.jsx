// Layout.tsx
import { Box, CssBaseline } from '@mui/material';
import React from "react"
import Navbar from '../assets/components/navbar/navbar';

export const Layout = ({ children }) => {

  return (
    <React.Fragment>
        <CssBaseline>
            <Box sx={{  }}>
                <Navbar />
                    
                    <Box sx={{ backgroundColor: "#F5F5F5" }}>
                    { children }
                    </Box>
                {/* footer */}

            </Box>

        </CssBaseline>
    </React.Fragment>
    
  );
};

