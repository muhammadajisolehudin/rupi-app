import { Box, CssBaseline, Grid, Typography } from "@mui/material"
import React from "react"
import vektor from "../../assets/img/vector-bg.png"
import imgWallet from "../../assets/img/e-wallet-pana.png"
// import { NotifBerhasil } from "../../assets/components/notifikasi/notifBerhasil"
export const LoginPage= () =>{

    return(
        <React.Fragment>
            <CssBaseline>
                <Grid container style={{ width: "100%", height:"100vh" }}>
                    <Grid item xs={6} sx={{ p:"3rem", paddingX:22  }}>
                        <img src="/logo-frame.png" alt="Logo" />
                        
                        <Box sx={{ 
                            paddingY: 10,
                            height: "100%", 
                            display: 'flex',
                            flexDirection:"column",
                            justifyContent: 'center'
                        }}>
                            {/* masukan kontent */}
                            {/* <NotifBerhasil/> */}
                        </Box>
                    </Grid>
                    <Grid item xs={6} style={{ backgroundColor: "#E4EDFF", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={vektor} alt="vektor" style={{ height:"15rem", width:"100%" }} />
                        <img src={imgWallet} alt="img wallet" height={400} style={{ marginTop: '-5rem' }}/>
                        <Typography variant="h5" style={{ fontWeight: 'bold', marginTop: '10px' }}>Selamat datang di Rupi App</Typography>
                        <Typography variant="body1" style={{ marginTop: '10px', textAlign: "center" }}>Cek saldo, transfer cepat dan aman, serta mutasi rekening bersama Rupi App. <br/> Semua jadi mudah dalam genggaman Anda!</Typography>
                    </Grid>
                </Grid>
            </CssBaseline>
        </React.Fragment>
    )
    
}