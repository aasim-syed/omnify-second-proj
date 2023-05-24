import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingPop = () => {
    return (
        <Box mt={5}>
            <CircularProgress />
            <Typography variant="h5" mt={2}>
                Fetching...
            </Typography>
        </Box>
    );
};

export default LoadingPop;