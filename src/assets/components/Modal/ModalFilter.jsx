import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, Stack } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import SearchIcon from '../../img/icons/Search.png'

const FilterModal = ({ open, handleClose }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isButtonActive, setIsButtonActive] = useState(false);

    useEffect(() => {
        if (startDate && endDate) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    }, [startDate, endDate]);

    const handleResetDates = () => {
        setStartDate(null);
        setEndDate(null);
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: 2,
        boxShadow: 24,
        minWidth: 300
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="filter-modal-title"
            aria-describedby="filter-modal-description"
        >
            <Box sx={modalStyle}>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography id="filter-modal-title" variant="h6" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
                    Filter
                </Typography>
                <TextField
                    fullWidth
                    label="Cari transaksi apa?"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ mb: 2, bgcolor: 'white', borderRadius: 1 }}
 		            // InputProps={{ 
                    //     startAdornment: (
                    //         <InputAdornment position="start">
                    //           <img src={SearchIcon} alt="search" style={{ width: '20px' }} />
                    //         </InputAdornment>
                    //       )
                    //  }}
                />
                <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <Typography sx={{ ml: 'auto', cursor: 'pointer', color: 'gray' }} onClick={handleResetDates}>
                        Reset
                    </Typography>
                </Stack>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
                        <DatePicker
                            label="Mulai dari"
                            value={startDate}
                            onChange={setStartDate}
                            renderInput={(params) => (
                                <TextField {...params} 
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton>
                                                <EventIcon />
                                            </IconButton>
                                        )
                                    }}
                                />
                            )}
                        />
                        <DatePicker
                            label="Sampai dengan"
                            value={endDate}
                            onChange={setEndDate}
                            renderInput={(params) => (
                                <TextField {...params} 
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton>
                                                <EventIcon />
                                            </IconButton>
                                        )
                                    }}
                                />
                            )}
                        />
                    </Stack>
                </LocalizationProvider>
                <Button variant="contained" color="primary" fullWidth onClick={handleClose} disabled={!isButtonActive} sx={{ bgcolor: isButtonActive ? 'primary.main' : 'grey' }}>
                    Terapkan
                </Button>
            </Box>
        </Modal>
    );
};

export default FilterModal;
