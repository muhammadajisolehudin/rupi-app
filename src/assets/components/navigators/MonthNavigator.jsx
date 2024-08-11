import { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const MonthNavigator = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const nextMonth = () => {
        setCurrentMonth(prev => new Date(prev.setMonth(prev.getMonth() + 1)));
    };

    const prevMonth = () => {
        setCurrentMonth(prev => new Date(prev.setMonth(prev.getMonth() - 1)));
    };

    const formatMonth = (date) => {
        const options = { year: 'numeric', month: 'long' };
        return date.toLocaleDateString('id-ID', options);
    };

    return (
        <>
            <IconButton size="small" sx={{ color: 'white' }} onClick={prevMonth}>
                <ChevronLeftIcon />
            </IconButton>
            <Typography
                variant="h6"
                component="div"
                sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                    lineHeight: '24px',
                }}
            >
                {formatMonth(currentMonth)}
            </Typography>
            <IconButton size="small" sx={{ color: 'white' }} onClick={nextMonth}>
                <ChevronRightIcon />
            </IconButton>
        </>
    );
};

// export default MonthNavigator;
