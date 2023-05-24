import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

// customizing the default MUI theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#000"
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    fontSize: "15px",
                    '@media (max-width: 399px)': {
                        fontSize: "13px"
                    }
                },
                body: {
                    backgroundImage: "linear-gradient(to right, #692c98, #21367e, #ac1e1e) 100%)",
                },
                svg: {
                    verticalAlign: "middle"
                },
                img: {
                    maxWidth: "100%",
                    height: "100%",
                    verticalAlign: "middle"
                }
            }
        },
        MuiIconButton: {
            defaultProps: {
                sx: {
                    bgcolor: "primary.dark",
                    color: "#fff",

                    '&:hover': {
                        bgcolor: "primary.main",
                    }
                }
            }
        },
    }
});

const AppThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;