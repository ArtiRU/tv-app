import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import {config} from "../utils/consts";
import {StyledModal, StyledPaper, LargeImage, FlexContainer, SmallImage} from "../styles/modal";
import api from "../axios/api";
import {YouTube} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Carousel from "./Carousel";

const ContentModal = ({children, id}) => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState({});
    const [video, setVideo] = useState({});

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        let isMounted = true;
        const fetchVideo = async () => {
            const response = await api.get(`/movie/${id}/videos`);
            if (isMounted) {
                setVideo(response.data.results[0]?.key);
            }
        }
        const fetchContent = async () => {
            const response = await api.get(`/movie/${id}`);
            if (isMounted) {
                setContent(response.data);
            }
        }

        fetchVideo();
        fetchContent();

        return () => isMounted = false;
    }, [id]);


    return (
        <>
            <Box onClick={handleOpen}>
                {children}
            </Box>
            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Fade in={open}>
                    {content && <StyledPaper>
                        <FlexContainer>
                            <LargeImage
                                src={content.poster_path ? `${config.img_500}/${content.poster_path}` : config.unavailable}
                                alt={content.name || content.title}
                            />
                            <SmallImage
                                src={content.backdrop_path ? `${config.img_500}/${content.backdrop_path}` : config.unavailable}
                                alt={content.name || content.title}
                            />

                            <Box sx={{ml: '10px', width: '100%'}}>
                                <Box sx={{fontWeight: 'bold', fontSize: '22px'}}>
                                    {content.name || content.title}, {(content.first_air_date || content.release_date || '----').substr(0, 4)}
                                </Box>
                                <Box sx={{mt: '5px'}}>{content.tagline && <i>{content.tagline}</i>}</Box>
                                <Box sx={{mt: '10px'}}>{content.overview}</Box>
                                <Carousel id={id}/>
                                <Button variant="contained" startIcon={<YouTube/>} target="_blank"
                                        href={`https://youtube.com/watch?v=${video}`}
                                        sx={{mt: '10px', backgroundColor: 'red', color: '#fff'}}>
                                    Смотреть трейлер
                                </Button>
                            </Box>
                        </FlexContainer>
                    </StyledPaper>}
                </Fade>
            </StyledModal>
        </>
    );
};

export default ContentModal