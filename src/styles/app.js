import {styled} from '@mui/material/styles';

export const Wrapper = styled('div')(({theme}) => ({
    minHeight: '100vh',
    backgroundColor: theme.palette.secondary.main,
    padding: '76px 16px 80px 16px',
}));