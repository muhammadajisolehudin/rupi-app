import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import profileIcon from '../../img/icons/placeholder-profile.png';

export const CardTransaksi = ({ data, handleToggleFavorite }) => {
    return (
        <Box sx={{ minWidth: 275 }}>
            {data.map(card => (
                <Card key={card.id} variant="outlined" sx={{ marginBottom: 4, borderRadius: 2 }}>
                    <CardContent sx={{ backgroundColor: "white", padding: 1, paddingBottom: '8px !important' }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginX: "3rem" }}>
                            <Box sx={{ display: "flex", gap: 4, width: "100%", alignItems: "center" }}>
                                <img 
                                    src={profileIcon} 
                                    alt={card.fullname}
                                    style={{ height: 40 }} 
                                />
                                <Box>
                                    <Typography>{card.fullname}</Typography>
                                    <Typography variant="caption">{card.account_number}</Typography>
                                </Box>
                            </Box>
                            <StarRoundedIcon 
                                fontSize='large' 
                                sx={{ 
                                    color: card.favorites ? '#FFB831' : '#B3B3B3', 
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
    data: PropTypes.array.isRequired,
    handleToggleFavorite: PropTypes.func.isRequired
};
