import React from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, Stack } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';

const FilterModal = ({ open, handleClose, startDate, endDate, setStartDate, setEndDate }) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const isButtonActive = startDate && endDate;

    const handleResetDates = () => {
        setStartDate(null);
        setEndDate(null);
    };
    const formatDate = (date) => {
        if (!date) return null;
        // Format date as YYYY-MM-DD
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleStartDateChange = (date) => {
        setStartDate(formatDate(date));
    };

    const handleEndDateChange = (date) => {
        setEndDate(formatDate(date));
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
                <Typography id="filter-modal-title" variant="h6" component="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
                    Filter
                </Typography>
                <TextField
                    fullWidth
                    label="Cari transaksi apa?"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ mb: 4, bgcolor: 'white', borderRadius: 1 }}
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
                            value={startDate ? new Date(startDate) : null}
                            onChange={handleStartDateChange}
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
                            value={endDate ? new Date(endDate) : null}
                            onChange={handleEndDateChange}
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
