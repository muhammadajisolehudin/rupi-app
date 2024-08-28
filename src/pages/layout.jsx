import { Box, CssBaseline } from "@mui/material";
import PropTypes from "prop-types"; // Import PropTypes
import React from "react";
import Navbar from "../assets/components/layoutsComponents/navbar";
import { Footer } from "../assets/components/layoutsComponents/Footer";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ backgroundColor: "white", width: '100%', height: '100vh' }}>
        <Navbar />
        <Box sx={{ backgroundColor: "white", marginTop: "5.5rem" }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
};

// Tambahkan PropTypes untuk validasi
Layout.propTypes = {
  children: PropTypes.node,
};
