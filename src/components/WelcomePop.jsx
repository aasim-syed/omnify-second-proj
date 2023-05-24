import React from 'react';
import { Box, Typography } from '@mui/material';

const WelcomePop = () => {
    return (
        <>
            <Box mt={8} mb={4}>
                <Typography variant="h4" color="primary.main">
                    Omnify Assigment⚡
                </Typography>
                <Typography variant="h6" fontWeight={400}>
                    Find the weather of any city built with 💓 OpenweatherAPI and ReactJS
                </Typography>
            </Box>
            <Box>
                <Box
                    component="img"
                    src="/img/weather-img.svg"
                />
            </Box>
        </>
    );
};

export default WelcomePop;