import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

export const StyledAppBar = styled(AppBar)(({theme}) => ({
    boxShadow: '0px 1px 5px black',
    backgroundColor: theme.palette.secondary.main,
}));