import { Box, Card, Container, Typography } from "@mui/material"
import { Layout } from "./layout"
import user from "../assets/img/icons/user.png"


export const BerandaPage = () =>{

    return(
        <Layout>
            <Container sx={{ height:"100vh" }}>
                {/* content */}
                 <Card sx={{ minWidth: 275, height:70, bgcolor:"transparent",display:"flex", alignItems:"center" }}>
                    <Box sx={{ display:"flex", alignItems:"center", p:2}}>
                        <img src={user} alt="user" />
                        <Typography variant="body2" sx={{ marginLeft:2 }}>
                            Selamat Siang, Samsul
                        </Typography>
                    </Box>
                </Card>

            </Container>
        </Layout>
    )

}