import React, {useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import Box from "@mui/material/Box";
import {config} from "../utils/consts";

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({id}) => {
    const {fetchCredits} = useActions();
    const {credits} = useSelector(state => state.films)

    useEffect(() => {
        fetchCredits(id);
    }, [id]);

    const items = credits?.map((credit) => (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            objectFit: 'contain',
            padding: '10px',
            alignItems: 'center',
        }}>
            <img
                src={credit.profile_path ? `${config.img_300}/${credit.profile_path}` : config.noPicture}
                alt={credit?.name}
                width={200}
                onDragStart={handleDragStart}
                style={{borderRadius: '10px', marginBotton: '5px', boxShadow: '0px 0px 5px black'}}
            />
            <b>{credit?.name}</b>
        </Box>
    ));

    const responsive = {
        0: {
            items: 1,
        },
        580: {
            items: 2,
        },
        800: {
            items: 3,
        },
        1366: {
            items: 4,
        },
        1600: {
            items: 5,
        },
        2000: {
            items: 7,
        },

    }
    return (
        <AliceCarousel
            autpPlay
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
        />
    );
}

export default Carousel;