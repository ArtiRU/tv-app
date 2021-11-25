import React, {useEffect, useState} from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import {StyledCard, Rating, StyledCardHeader} from '../styles/singleContent';
import Box from "@mui/material/Box";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {config} from "../utils/consts";
import IconButton from "@mui/material/IconButton";
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import Skeleton from '@mui/material/Skeleton';
import formatDate from "../utils/formatDate";
import ContentModal from "./ContentModal";



const SingleContent = ({id, vote_average, title, poster_path, release_date, media_type}) => {
    const [favoriteIcon, setFavoriteIcon] = useState(false);
    const {favorite, isLoading} = useSelector(state => state.films);
    const {addFavorite} = useActions();

    const now = new Date();

    const handleAdd = (e) => {
        e.stopPropagation();
        addFavorite({id, vote_average, title, poster_path, release_date, media_type, date: formatDate(now)});
    }

    const renderFavorite = (
        <IconButton color={favoriteIcon ? "primary" : "secondary"} onClick={handleAdd}>
            <FavoriteIcon/>
        </IconButton>
    );

    useEffect(() => {
        if (localStorage.getItem('favorite')) {
            const items = JSON.parse(localStorage.getItem('favorite') || []);
            if (items.find(item => item.title === title)) {
                setFavoriteIcon(true);
            }
        }
    }, [favorite, title]);

    return (
        <ContentModal id={id}>
            <StyledCard>
                <StyledCardHeader title={isLoading ? <Skeleton width="80%" height="30px"/> : title}
                                  action={isLoading ? <Skeleton width="40px" height="40px"/> : renderFavorite}/>
                <Box sx={{position: 'relative'}}>
                    {
                        isLoading ? <Skeleton width="100%" height="250px"/>
                            :
                            <CardMedia component="img"
                                       height="300"
                                       image={poster_path ? config.img_300 + poster_path : config.noPicture}
                                       alt={title}
                            />
                    }
                    {
                        !isLoading &&
                        <Rating sx={{bgcolor: vote_average > 6.6 ? 'background.green' : 'gray'}}>
                            <Box>
                                {vote_average}
                            </Box>
                        </Rating>
                    }
                </Box>
                {
                    isLoading ? <Skeleton width="100%"/>
                        :
                        <CardContent>
                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                <Typography variant="body2"
                                            color="text.light">{release_date ? release_date : 'Release date is not found'}
                                </Typography>
                            </Box>
                        </CardContent>
                }

            </StyledCard>
        </ContentModal>
    );
};

export default SingleContent;