import { Box, Button, Card, Container, Typography } from "@mui/material"
import { Layout } from "./layout"
import user from "../assets/img/icons/user.png"
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { CardList } from "../assets/components/cardComponents/CardList"
import { InfoSaldo } from "../assets/components/dashboard/InfoSaldo"
import { Menu } from "../assets/components/dashboard/Menu"



export const BerandaPage = () =>{

    return(
        <Layout>
            <Container sx={{ paddingTop:"2rem", paddingBottom:"2rem" }}>
                {/* content */}
                 <Card sx={{ minWidth: 275, height:70, bgcolor:"transparent",display:"flex", alignItems:"center" }}>
                    <Box sx={{ display:"flex", alignItems:"center", p:2}}>
                        <img src={user} alt="user" />
                        <Typography variant="body2" sx={{ marginLeft:2 }}>
                            Selamat Siang, Samsul
                        </Typography>
                    </Box>
                </Card>
                <InfoSaldo/>
                <Menu/>
                <Box sx={{ display:"flex", alignItems:"center", justifyContent: "space-between", marginTop:"2rem", marginBottom:"1rem" }}>
                    <Typography> Transaksi Favorit</Typography>
                    <Button sx={{ backgroundColor:"#0066AE", color:"white" }}>
                        <Typography variant="body2" sx={{ textTransform: 'none' }}>Lihat Semua</Typography>
                        <ChevronRightRoundedIcon />
                    </Button>
                </Box>
                <CardList />

            </Container>
        </Layout>
    )

}