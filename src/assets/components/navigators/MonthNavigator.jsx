import { useState, useEffect } from 'react';
import { IconButton, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PropTypes from 'prop-types';

export const MonthNavigator = ({ onMonthChange }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const nextMonth = () => {
        setCurrentMonth(prev => {
            const newMonth = new Date(prev.setMonth(prev.getMonth() + 1));
            onMonthChange(newMonth); // Notify parent component about the month change
            return newMonth;
        });
    };

    const prevMonth = () => {
        setCurrentMonth(prev => {
            const newMonth = new Date(prev.setMonth(prev.getMonth() - 1));
            onMonthChange(newMonth); // Notify parent component about the month change
            return newMonth;
        });
    };

    const formatMonth = (date) => {
        const options = { year: 'numeric', month: 'long' };
        return date.toLocaleDateString('id-ID', options);
    };

    // useEffect(() => {
    //     onMonthChange(currentMonth); // Notify parent component on initial render
    // }, [currentMonth, onMonthChange]);

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

MonthNavigator.propTypes = {
    onMonthChange: PropTypes.func.isRequired,
};