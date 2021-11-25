import {styled} from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


export const StyledBottomNav = styled(BottomNavigation)(({theme}) =>({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.secondary.dark,
    zIndex: 100,
}));

export const StyledBottomNavigationAction = styled(BottomNavigationAction)(({theme}) => ({
    color: theme.palette.primary.main,
}));