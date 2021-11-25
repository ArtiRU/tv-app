import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {StyledAppBar} from "../styles/header";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import {routes} from "../utils/consts";
import {useHistory} from 'react-router-dom'

const Header = () => {
    const history = useHistory();
    const {setDrawer} = useActions();
    const {favorite} = useSelector(state => state.films)
    return (
        <StyledAppBar>
            <Toolbar>
                <IconButton color="primary" size="large" edge="start" onClick={() => setDrawer(true)}>
                    <MenuIcon/>
                </IconButton>
                <Typography sx={{cursor: 'pointer'}} variant="h6" component="div" color="primary"
                            onClick={() => history.push(routes.HOME)}>
                    FILMS HUB
                </Typography>
                <Box sx={{flexGrow: 1}}/>
                <Box>
                    <IconButton color="primary" size="large" edge="end"
                                onClick={() => history.push(routes.NOTIFICATIONS)}>
                        <Badge badgeContent={favorite ? favorite.length : 0} color="error">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;