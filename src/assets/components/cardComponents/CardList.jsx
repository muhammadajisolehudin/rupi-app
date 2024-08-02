import { Box, Card, CardContent, Button, Typography } from "@mui/material";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import bcaIcon from "../../img/icons/bcaIcon.png";

const cardData = [
  {
    id: 1,
    image: bcaIcon,
    title: "Transfer ke BCA",
    description: "Virtual Account",
  },
  {
    id: 2,
    image: bcaIcon,
    title: "Transfer ke BCA",
    description: "Virtual Account",
  },
  {
    id: 3,
    image: bcaIcon,
    title: "Transfer ke BCA",
    description: "Virtual Account",
  },
];

export const CardList = () => {
  return (
    <Box sx={{ minWidth: 275, boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)" }}>
      <Card sx={{ borderRadius: "10px" }}>
        <CardContent sx={{ backgroundColor: "white" }}>
          {cardData.map((card) => (
            <>
              <Box
                key={card.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "18px 50px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    width: "100%",
                  }}
                >
                  <img
                    src={card.image}
                    alt=""
                    style={{
                      width: "130px",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "28px",
                        fontWeight: 400,
                        color: "#1C1C1E",
                        lineHeight: "24px",
                        letterSpacing: "-0.15px",
                        marginBottom: "8px",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "18px",
                        fontWeight: 300,
                        color: "#1C1C1E",
                        lineHeight: "24px",
                        letterSpacing: "-0.15px",
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                </Box>
                <Button>
                  <ChevronRightRoundedIcon fontSize="large" />
                </Button>
              </Box>
              <hr />
            </>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};
