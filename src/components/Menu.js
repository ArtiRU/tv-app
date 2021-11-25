import React from 'react';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from '@mui/icons-material/MoveToInbox';

const Menu = () => {
    const menuItems = [
        'Компании',
        'Актеры',
    ]
    return (
        <Box sx={{width: 250}}>
           <nav>
               <List>
                   {
                       menuItems.map(text => (
                           <ListItem key={text}>
                               <ListItemIcon>
                                   <InboxIcon />
                               </ListItemIcon>
                               <ListItemText primary={text} />
                           </ListItem>
                       ))
                   }
               </List>
           </nav>
        </Box>
    );
};

export default Menu;