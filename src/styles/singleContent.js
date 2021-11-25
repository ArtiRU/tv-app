import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

export const StyledCard = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.secondary.dark,
    maxWidth: 300,
    cursor: 'pointer',
    color: theme.palette.primary.main,
    margin: 20,
    '&: hover': {
        backgroundColor: theme.palette.background.main,
    },
    '& .css-1qvr50w-MuiTypography-root': {
        fontSize: '16px',
    },
}));

export const StyledCardHeader = styled(CardHeader)(({theme}) => ({
    width: 200,
}));

export const Rating = styled('div')(({theme}) => ({
    position: 'absolute',
    top: 10,
    right: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 20,
    backgroundColor: theme.palette.background.green,
    fontSize: 13,
    fontWeight: 'bold',
}));

