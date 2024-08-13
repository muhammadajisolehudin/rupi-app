import { Box, CssBaseline, Grid } from "@mui/material";
import PropTypes from "prop-types"; // Import PropTypes
import React from "react";
import { Footer } from "../assets/components/layoutsComponents/Footer";
import NavbarSecondary from "../assets/components/layoutsComponents/navbarSecondary";

export const LayoutSecondary = ({ children }) => {
    return (
        <React.Fragment>
            <CssBaseline>
                <Box style={{ width: '100%', height: '150vh' }}>
                    <NavbarSecondary />
                    <Box >
                        {children}
                    </Box>
                </Box>
                <Footer />
            </CssBaseline>
        </React.Fragment>
    );
};

// Tambahkan PropTypes untuk validasi
LayoutSecondary.propTypes = {
    children: PropTypes.node,
};
