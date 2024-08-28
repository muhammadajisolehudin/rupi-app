import { Box, Paper, ButtonBase, Typography, Divider } from '@mui/material';

const SettingsNavigator = ({ activeSection, setActiveSection, renderContent }) => {

    const getTabStyle = (section) => ({
        position: "relative",
        "&::after": {
            content: '""',
            position: "absolute",
            bottom: -2,
            left: 0,
            width: "100%",
            height: 3,
            backgroundColor: "#0066AE",
            borderRadius: "5px",
            visibility: activeSection === section ? "visible" : "hidden",
            transition: " bottom 0.2s ease",
        },
    });

    return (
        <Paper elevation={5} sx={{ height: "100vh", display: "box" }}>
            <Box
                sx={{ display: "flex", justifyContent: "space-between", pt: 3, px: 5, zIndex: 1 }}
                role="region"
                aria-label="Tab Bar Pengaturan"
            >
                <ButtonBase
                    id="TabAkun"
                    onClick={() => setActiveSection("Akun")}
                    sx={getTabStyle("Akun")}
                    aria-label="Tab Akun"
                >
                    <Typography
                        aria-labelledby="TabAkun"
                        role="button"
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: activeSection === "Akun" ? "bold" : "normal",
                            color: activeSection === "Akun" ? "#0066AE" : "#dedede",
                            cursor: "pointer",
                        }}
                    >
                        Akun
                    </Typography>
                </ButtonBase>
                <ButtonBase
                    id="TabUbahPin"
                    onClick={() => setActiveSection("Ubah Pin")}
                    sx={getTabStyle("Ubah Pin")}
                    aria-label="Tab Ubah Pin"
                >
                    <Typography
                        aria-labelledby="TabUbahPin"
                        role="button"
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: activeSection === "Ubah Pin" ? "bold" : "normal",
                            color: activeSection === "Ubah Pin" ? "#0066AE" : "#dedede",
                            cursor: "pointer",
                        }}
                    >
                        Ubah Pin
                    </Typography>
                </ButtonBase>
                <ButtonBase
                    id="TabUbahPassword"
                    onClick={() => setActiveSection("Ubah Password")}
                    sx={getTabStyle("Ubah Password")}
                    aria-label="Tab Ubah Password"
                >
                    <Typography
                        aria-labelledby="TabUbahPassword"
                        role="button"
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: activeSection === "Ubah Password" ? "bold" : "normal",
                            color: activeSection === "Ubah Password" ? "#0066AE" : "#dedede",
                            cursor: "pointer",
                        }}
                    >
                        Ubah Password
                    </Typography>
                </ButtonBase>
                <ButtonBase
                    id="TabUbahHP"
                    onClick={() => setActiveSection("Ubah No Handphone")}
                    sx={getTabStyle("Ubah No Handphone")}
                    aria-label="Tab Ubah No Handphone"
                >
                    <Typography
                        aria-labelledby="TabUbahHP"
                        role="button"
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: activeSection === "Ubah No Handphone" ? "bold" : "normal",
                            color: activeSection === "Ubah No Handphone" ? "#0066AE" : "#dedede",
                            cursor: "pointer",
                        }}
                    >
                        Ubah No Handphone
                    </Typography>
                </ButtonBase>
                <ButtonBase
                    id="TabInformasi"
                    onClick={() => setActiveSection("Informasi Rupi App")}
                    sx={getTabStyle("Informasi Rupi App")}
                    aria-label="Tab Informasi Rupi App"
                >
                    <Typography
                        aria-labelledby="TabInformasi"
                        role="button"
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: activeSection === "Informasi Rupi App" ? "bold" : "normal",
                            color: activeSection === "Informasi Rupi App" ? "#0066AE" : "#dedede",
                            cursor: "pointer",
                        }}
                    >
                        Informasi Rupi App
                    </Typography>
                </ButtonBase>
            </Box>
            <Divider
                sx={{
                    width: "100%",
                    backgroundColor: "#B3B3B3", // Warna garis
                }}
            />
            <Box sx={{ bgcolor: "white" }}>{renderContent()}</Box>
        </Paper>
    );
};

export default SettingsNavigator;
