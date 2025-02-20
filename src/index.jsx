
import { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { lightPalette } from './components/theme';
import Interface from './Interface';
import { EmphCard } from './components/Card';
import { useSpring, animated } from '@react-spring/web';


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
    // const [payloads, setPayloads] = useState(null);

    // useEffect(() => {
    //   setPayloads(
    //     [JSON.parse(document.getElementById("payload-read").textContent)]
    //   );
    // }, []);
    const payloads = "This is empty payloads.";

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Interface payload={payloads} theme={theme} />
        </ThemeProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);