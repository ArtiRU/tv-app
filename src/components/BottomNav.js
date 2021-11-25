import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import Box from "@mui/material/Box";
import {StyledBottomNav, StyledBottomNavigationAction} from "../styles/bottonNav";


import FavoriteIcon from '@mui/icons-material/Favorite';
import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import {routes} from "../utils/consts";


const BottomNav = () => {
    const history = useHistory();
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (value === 0) history.push(routes.HOME);
        else if (value === 1) history.push(routes.FILMS);
        else if (value === 2) history.push(routes.FAVORITE);
        else if (value === 3) history.push(routes.SEARCH);
    }, [value, history]);

    return (
        <Box sx={{width: '100%'}}>
            <StyledBottomNav value={value} onChange={(event, newValue) => setValue(newValue)} showLabels>
                <StyledBottomNavigationAction label="Тренды" icon={<WhatshotIcon/>}/>
                <StyledBottomNavigationAction label="Фильмы" icon={<MovieIcon/>}/>
                <StyledBottomNavigationAction label="Любимое" icon={<FavoriteIcon/>}/>
                <StyledBottomNavigationAction label="Поиск" icon={<SearchIcon/>}/>
            </StyledBottomNav>
        </Box>
    );
};

export default BottomNav;