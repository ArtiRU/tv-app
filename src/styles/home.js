import {styled} from '@mui/material/styles';

export const Wrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('desktop_small')]: {
        justifyContent: 'center',
    }
}));