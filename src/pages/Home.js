import React from 'react';
import {Wrapper} from "../styles/home";
import Typography from "@mui/material/Typography";
import SingleContent from "../components/SingleContent";
import Pagination from '@mui/material/Pagination';
import {useHistory} from 'react-router-dom';
import Box from "@mui/material/Box";
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import Genres from "../components/Genres";


const Home = ({films}) => {
    const history = useHistory();
    const {isLoading} = useSelector(state => state.films);
    const {setPage} = useActions();

    const handleChange = (e, value) => {
        setPage(value);
        window.scrollBy({
            behavior: "smooth",
            top: -1000,
        })
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Box sx={{flex: '1 1 auto'}}>
                <Typography variant="h5" component="div" color="primary"
                            sx={{ml: '20px'}}>{history.location.pathname === '/' ? 'Тренды' : 'Фильмы'}</Typography>

                {
                    history.location.pathname === '/films' &&
                    <Box sx={{ml: '20px'}}>
                        <Genres/>
                    </Box>
                }
                <Wrapper>
                    {
                        films.map(film => film.title && <SingleContent key={film.id} {...film}/>)
                    }
                </Wrapper>
            </Box>
            {<Box sx={{display: !isLoading ? 'flex' : 'none', justifyContent: 'center'}}>
                <Pagination count={1000} color="primary" onChange={handleChange}/>
            </Box>}
        </Box>
    );
};

export default Home;