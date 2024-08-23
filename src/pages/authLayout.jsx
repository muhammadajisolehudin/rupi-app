import { Box, CssBaseline, Grid, Typography } from "@mui/material"
import React from "react"
import vektor from "../assets/img/vector-bg.png"
import imgWallet from "../assets/img/e-wallet-pana.png"

export const AuthLayout = ({ children }) => {

    return (
        <React.Fragment>
            <CssBaseline>
                <Grid container style={{ width: "100%", height:"100vh" }}>
                    <Grid item xs={6.5} sx={{ py:"2rem", px:20 }}>
                        <img src="/logo-frame.png" alt="Logo Rupi App" />
                        
                        <Box sx={{ 
                            paddingY: 2,
                            height: "100%", 
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: 'center'
                        }}>
                            {/* masukan kontent */}
                            {children}
                        </Box>
                    </Grid>
                    <Grid item xs={5.5} style={{ backgroundColor: "#E4EDFF", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={vektor} style={{ height:"12rem", width:"100%" }} />
                        <img src={imgWallet} alt="Illustrasi M-Banking" height={400} style={{ marginTop: '-3rem' }}/>
                        <Typography variant="h5" style={{ fontWeight: 'bold', marginTop: '10px' }}>Selamat datang di Rupi App</Typography>
                        <Typography variant="body1" style={{ marginTop: '10px', textAlign: "center" }}>Cek saldo, transfer cepat dan aman, serta mutasi rekening bersama Rupi App. <br /> Semua jadi mudah dalam genggaman Anda!</Typography>
                    </Grid>
                </Grid>
            </CssBaseline>
        </React.Fragment>
    )

}