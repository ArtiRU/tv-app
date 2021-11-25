import React from 'react';
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import NotificationsItem from "../components/NotificationsItem";
import Typography from "@mui/material/Typography";

const Notifications = () => {
    const {favorite} = useSelector(state => state.films)
    return (
        <>
            <Typography variant="h5" component="div" color="primary">Список любимых фильмов</Typography>
            <Box sx={{display: 'flex', flexDirection: 'column-reverse'}}>
                {
                    favorite ? favorite.map(item => <NotificationsItem
                            key={item.title} {...item}/>)
                        :
                        <Typography variant="h5" component="div" color="primary" sx={{ml: '20px'}}>Список
                            пуст</Typography>
                }
            </Box>
        </>
    );
};

export default Notifications;