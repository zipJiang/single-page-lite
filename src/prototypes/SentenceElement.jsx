import { alpha, Typography, Box } from "@mui/material"
import { useSpring, animated, config } from '@react-spring/web'
// import { DoneAll } from '@mui/icons-material';


function SentenceElement(props) {
    const {
        sentence,
        index,
        sentSelect,
        setSentSelect,
        // highlighting,
        disableFurtherSelection,
        setSnackOpen,
        theme
    } = props;

    const [spring, setSpring] = useSpring(() => ({
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.1)", // Initial shadow
        config: { tension: 300, friction: 15 },
    }))

    const onMouseEnter = () => {
        setSpring.start({
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Increase shadow
        });
    }

    const onMouseLeave = () => {
        setSpring.start({
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)", // Increase shadow
        });
    };

    return (
        <animated.div
            style={{...spring}}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={() => {
                if (disableFurtherSelection) {
                    if (sentSelect) {
                        setSentSelect(false);
                    }
                    else {
                        setSnackOpen(true);
                    }
                }
                else{
                    setSentSelect(!sentSelect);
                }
            }}
        >
            <Box 
                sx={{
                    padding: "10px",
                    // backgroundColor: theme.palette["card-bg-emph"].main
                    opacity: sentSelect ? 1.0 : 0.5,
                }}
            >
                <Typography variant='body1'>
                    {index + 1}. {sentence}
                    {sentSelect && "✔"}
                </Typography>
            </Box>
        </animated.div>
    );
}

export default SentenceElement;