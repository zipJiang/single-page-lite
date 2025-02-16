import { Card, styled } from '@mui/material';
import { applyProps } from './utils';

// Define a QuestionForm component that generate ta section containing all
// the input instances.

const EmphCard = applyProps(
    styled(Card)(({ theme }) => ({
        margin: "5px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: theme.palette["card-bg-emph"].main
    })),
    { elevation: 5 }
);

const NormalCard = applyProps(
    styled(Card)({
        margin: "5px",
        padding: "20px",
        borderRadius: "10px",
    }),
    { elevation: 5 }
)


export { EmphCard, NormalCard };