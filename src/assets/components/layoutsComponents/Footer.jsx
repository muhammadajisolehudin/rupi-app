import Toolbar from '@mui/material/Toolbar';

export const Footer = () => {
  return (
    <Toolbar
      sx={{
        backgroundColor: "#0066AE",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        bottom: 0,
        width: "100%",
        padding: "10px",
      }}
    >
      <p style={{ color: "#FFF" }}>© Copyright 2024 Tim 7 SYNRGY 7</p>
    </Toolbar>
  );
};
