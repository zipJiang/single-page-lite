import { Box, LinearProgress } from '@mui/material';

function ProgressBar(props) {
    const { progress, numSteps } = props;

    const normalize = (val, max) => {
        return val / max * 100;
    };

  return (
    <Box sx={{ padding: "20px" }}>
        <LinearProgress
            variant="determinate"
            value={normalize(progress, numSteps)}
            thickness={4}
            sx={{
                height: "20px",
                borderRadius: "5px",
            }}
        />
    </Box>
  );
}

export default ProgressBar;