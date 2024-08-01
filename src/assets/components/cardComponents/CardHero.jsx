import { Card, Box, Container, Grid, Typography } from "@mui/material";
import bannerImage from "../../../images/banner.png";
import calendarIcon from "../../../icons/calendar.png";
import avatarWaveImage from "../../../images/avatar and wave.png";

export const CardHero = () => {
  return (
    <Card sx={{ py: { xs: 4, lg: 8 }, px: { xs: 2, lg: 7 } }}>
      <Container maxWidth={false} sx={{ p: 0 }}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <Box
              sx={{
                backgroundImage: `url(${bannerImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "row",
                padding: { xs: "20px 36px", lg: "40px 72px" },
                height: "248px",
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Box sx={{ flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#EDF4FF",
                    color: "#0A3967",
                    width: { xs: "100%", lg: "80%" },
                    padding: "3.5px 27.5px",
                    marginBottom: "40px",
                    fontSize: "16px",
                    fontWeight: "500",
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={calendarIcon}
                    alt="Calendar"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "10px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ marginBottom: 0 }}
                  >
                    29 Juli 2024, 10:00 AM
                  </Typography>
                </Box>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: "#0A3967",
                    fontSize: { xs: "24px", lg: "32px" },
                    fontWeight: 700,
                    marginBottom: "16px",
                  }}
                >
                  Selamat Siang, Samsul!
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    color: "#0066AE",
                    fontSize: { xs: "14px", lg: "18px" },
                    fontWeight: 500,
                    marginBottom: "40px",
                  }}
                >
                  Semoga harimu menyenangkan!
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: "auto",
                  width: { xs: "100%", lg: "calc(100% - 430px)" },
                  overflow: "hidden",
                }}
              >
                <img
                  src={avatarWaveImage}
                  alt="Avatar and Wave"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    left: "50%",
                    width: "auto",
                    height: "100%",
                    transform: "translate(-50%, -50%)",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}></Grid>
        </Grid>
      </Container>
    </Card>
  );
};
