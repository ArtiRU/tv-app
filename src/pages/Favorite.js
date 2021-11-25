import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Wrapper} from "../styles/home";
import {useSelector} from "react-redux";
import SingleContent from "../components/SingleContent";

const Favorite = () => {
    const {favorite} = useSelector(state => state.films);

    return (
        <Box>
            <Typography variant="h5" component="div" color="primary" sx={{pl: '20px'}}>Любимые фильмы</Typography>
            <Wrapper>
                {
                    favorite ? favorite.map(item => item.title && <SingleContent key={item.title} {...item}/>)
                        :
                        <Typography sx={{mt: 5}} variant="h5" color="primary">Список любимых фильмов пуст</Typography>
                }
            </Wrapper>
        </Box>
    );
};

export default Favorite;