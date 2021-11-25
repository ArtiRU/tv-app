import {styled} from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";

export const StyledPaper = styled(Paper)(({theme}) => ({
    width: '80%',
    backgroundColor: '#39445a',
    border: '1px solid #282c34',
    borderRadius: '10px',
    color: '#fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
}));

export const StyledModal = styled(Modal)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const FlexContainer = styled('div')(({theme}) => ({
    display: 'flex',
    overflow: 'hidden',
    [theme.breakpoints.between('mobile', 'laptop')]: {
        flexDirection: 'column',
    },
}));

export const LargeImage = styled('img')(({theme}) => ({
    display: 'none',
    [theme.breakpoints.up('laptop_medium')]: {
        display: 'block',
        width: '400px',
    },
    [theme.breakpoints.between('laptop_small', 'laptop_medium')]: {
        display: 'block',
        width: '350px',
    },
    [theme.breakpoints.between('laptop', 'desktop_small')]: {
        display: 'block',
        width: '300px',
    },
}));

export const SmallImage = styled('img')(({theme}) => ({
    display: 'none',
    [theme.breakpoints.between('mobile', 'laptop')]: {
        display: 'block',
    },
}));