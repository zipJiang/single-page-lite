
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
    const payload = {
        "report-id": "a45c314656ea282f83524488f20abf12ca6c32ebc6d7de94e5f832246c5bf9a3",
        "report-title": "Fouad Ajami",
        "section-title": "Early life and education",
        "section-header-elt-index": 2,
        "paragraph-elt-idx": 3,
        "claim-sentence": "His Shia Islam great-grandfather had immigrated to Arnoun from Tabriz, Iran in the 1850s.",
        "sentence-idx": 1,
        "intro-text": [
            "Fouad A. Ajami (; September 18, 1945 \u2013 June 22, 2014) was a Lebanon-born American university professor and writer on Middle Eastern issues.", "He was a senior fellow at Stanford University's Hoover Institution.", "Ajami was an outspoken supporter of the Bush Doctrine and the 2003 invasion of Iraq, which he believed to have been a \"noble war\" and a \"gift\" to the people of Iraq."], "paragraph-text": ["Ajami was born in Arnoun, a rocky Hamlet (place) in the south of Lebanon into a Lebanese Shia Muslims family.", "His Shia Islam great-grandfather had immigrated to Arnoun from Tabriz, Iran in the 1850s.", "In Arabic (language), the word \"Ajam\" means \"non-Arab\" or \"non-Arabic-speaker\"; specifically in this context, it means \"Persian people\" or \"Persian language.\"", "Ajami arrived in the United States in the fall of 1963, just before he turned 18.", "He did some of his undergraduate work at Eastern Oregon State College (now Eastern Oregon University) in La Grande, Oregon.", "He did his graduate work at the University of Washington, where he wrote his thesis on international relations and world government, and earned a PhD."
        ],
        "source-link": "https://books.google.com/books?id=vZsMhk6BM68C&q=great-grandfather",
        "source-title": "The Vanished Imam: Musa al Sadr and the Shia of Lebanon \u2013 Google Books",
        "source-text": ["Search\nImages\nMaps\nPlay\nYouTube\nNews\nGmail\nDrive\nMore\n\u00bb\nSign in\nBooks\nTry the new Google Books\nCheck out the new look and enjoy easier access to your favorite features\nTry it now\nNo thanks\nTry the new Google Books\nTry the new Google Books\nMy library\nHelp\nAdvanced Book Search\nBuy eBook - $14.74\nGet this book in print\nAmazon.com\nBarnes&Noble.com\nBooks-A-Million\nIndieBound\nFind in a library\nAll sellers\n\u00bb\nThe Vanished Imam: Musa al Sadr and the Shia of Lebanon\nBy Fouad Ajami\nAbout this book\nTerms of Service\nPages displayed by permission of\nCornell University Press\n.", "Copyright\n.", "Pages\nRestricted Page\nYou have reached your viewing limit for this book (\nwhy?", ")."],
        "sentence-subclaims": ["His great-grandfather was of Shia Islam faith.", "His great-grandfather had immigrated to Arnoun.", "Arnoun is a place in Lebanon.", "His great-grandfather immigrated from Tabriz.", "Tabriz is a place in Iran.", "His great-grandfather immigrated in the 1850s."],
        "sentence-subclaims-decontextualized": ["His great-grandfather, who practiced Shia Islam, was of Shia Islam faith.", "His great-grandfather, who was of Shia Islam faith, had immigrated to Arnoun, a place in Lebanon.", "Arnoun is a rocky hamlet located in the south of Lebanon.", "His great-grandfather had immigrated from Tabriz, a city in Iran.", "Tabriz is a city located in Iran.", "His great-grandfather immigrated from Tabriz, Iran to Arnoun, Lebanon in the 1850s."],
        "subclaim-index": 0
    };
    // const payloads = "This is empty payloads.";

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Interface payload={payload} theme={theme} />
        </ThemeProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);