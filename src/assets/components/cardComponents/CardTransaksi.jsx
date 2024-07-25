import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export const CardTransaksi = ({ cardData, handleToggleFavorite }) => {
    return (
        <Box sx={{ minWidth: 275 }}>
            {cardData.map(card => (
                <Card key={card.id} variant="outlined" sx={{ marginBottom: 4, borderRadius: 3 }}>
                    <CardContent sx={{ backgroundColor: "white", padding: 1, paddingBottom: '8px !important' }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginX: "3rem" }}>
                            <Box sx={{ display: "flex", gap: 4, width: "100%", alignItems: "center" }}>
                                <img 
                                    src={card.image} 
                                    alt={card.name}
                                    style={{ height: 40 }} 
                                />
                                <Box>
                                    <Typography>{card.name}</Typography>
                                    <Typography variant="caption">{card.noRekening}</Typography>
                                </Box>
                            </Box>
                            <StarRoundedIcon 
                                fontSize='large' 
                                sx={{ 
                                    color: card.favorite ? '#FFB831' : '#B3B3B3', 
                                    cursor: "pointer" 
                                }} 
                                onClick={() => handleToggleFavorite(card.id)}
                            />
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

CardTransaksi.propTypes = {
    cardData: PropTypes.array.isRequired,
    handleToggleFavorite: PropTypes.func.isRequired
};
