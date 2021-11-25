import React from 'react';
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import {useActions} from "../hooks/useActions";

const NotificationsItem = ({title, date}) => {
    const {removeFavorite} = useActions();
    return (
        <Box key={title} sx={{
            mb: '20px',
            backgroundColor: 'secondary.dark',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '15px',
        }}>
            <Box sx={{color: '#fff'}}><Box sx={{color: 'red', display: 'inline'}}>{date}:  </Box> Фильм <Box
                sx={{color: 'red', display: 'inline'}}>{title}</Box> добавлен в список
                любимых
                фильмов</Box>
            <IconButton sx={{color: '#fff'}} onClick={() => removeFavorite(title)}>
                <DeleteIcon/>
            </IconButton>
        </Box>

    );
};

export default NotificationsItem;