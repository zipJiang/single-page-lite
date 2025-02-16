import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { lightPalette } from './components/theme';
import { EmphCard } from './components/Card';


const lightTheme = createTheme({
        ...lightPalette,
        typography: {
        prevRead: {
            fontWeight: 'normal',
            color: "lightgrey",
            lineHeight: 2.0,
        },
        reading: {
            fontWeight: 'bold',
            color: lightPalette.palette.black.main,
            lineHeight: 2.0,
        },
        prompt: {
            color: lightPalette.palette.black.main,
            lineHeight: 2.0,
        },
        italicPrompt: {
            color: lightPalette.palette.black.main,
            lineHeight: 2.0,
            fontStyle: 'italic',
            textDecoration: 'underline',
        },
        highlightPrompt: {
            color: lightPalette.palette.black.main,
            lineHeight: 2.0,
            fontWeight: 'bold',
        },
        question: {
            fontWeight: 'bold',
            color: lightPalette.palette.black.main,
            lineHeight: 2.0,
        },
        answer: {
            fontWeight: 'bold',
            color: lightPalette.palette.black.main,
            lineHeight: 2.0,
        },
        progress: {
            fontSize: 12,
        },
        buttonText: {
            color: lightPalette.palette.white.main,
        }
    }
});


const App = () => {
    const theme = lightTheme;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <EmphCard>
                <div>
                    <h1>Hello, React with esbuild!</h1>
                </div>
            </EmphCard>
        </ThemeProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);