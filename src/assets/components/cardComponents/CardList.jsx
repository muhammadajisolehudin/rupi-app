import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import bcaIcon from '../../img/icons/bcaIcon.png';

const cardData = [
    {
        id: 1,
        image: bcaIcon,
        title: 'Transfer Ke BCA',
        description: 'Virtual Account'
    },
    {
        id: 2,
        image: bcaIcon,
        title: 'Transfer Ke BCA',
        description: 'Virtual Account'
    },
    {
        id: 3,
        image: bcaIcon,
        title: 'Transfer Ke BCA',
        description: 'Virtual Account'
    },
    // tambahkan data kartu lainnya sesuai kebutuhan
];

export const CardList = () => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent sx={{ backgroundColor: "white" }}>
                    {cardData.map(card => (
                      <>
                        <Box key={card.id} sx={{ display: "flex", justifyContent: "space-between", marginX: "3rem" }}>
                            <Box sx={{ display: "flex", gap: 4, width: "100%" }}>
                                <img src={card.image} alt="" />
                                <Box>
                                    <Typography>{card.title}</Typography>
                                    <Typography variant="caption">{card.description}</Typography>
                                </Box>
                            </Box>
                            <Button>
                                <ChevronRightRoundedIcon fontSize='large' />
                            </Button>
                        </Box>
                        <hr />
                      </>
                    ))}
                   
                </CardContent>
            </Card>
        </Box>
    );
}
