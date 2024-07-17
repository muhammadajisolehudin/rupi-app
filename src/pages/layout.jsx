// Layout.tsx
import { Box, CssBaseline } from '@mui/material';
import React from "react"

export const Layout = ({ children }) => {

  return (
    <React.Fragment>
        <CssBaseline>
            <Box sx={{  }}>
                {/* navbar */}
                    
                    <Box sx={{ backgroundColor: "#F5F5F5" }}>
                      { children }
                    </Box>
                {/* footer */}

            </Box>

        </CssBaseline>
    </React.Fragment>
    
  );
};

