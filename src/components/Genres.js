import React, {useEffect} from 'react';
import Chip from "@mui/material/Chip";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";
import Box from "@mui/material/Box";


const Genres = () => {
    const {genres, selectedGenres} = useSelector(state => state.films);
    const {fetchGenres, setSelectedGenres, removeSelectedGenres} = useActions();

    useEffect(() => {
        fetchGenres();

        return () => {
            setSelectedGenres([]);
        }
    }, []);

    return (
        <Box>
            {
                selectedGenres.length > 0 && selectedGenres.map(genre => <Chip
                    clickable
                    size='small'
                    sx={{color: '#fff', backgroundColor: 'primary.chip', mt: '10px', mr: '10px'}}
                    label={genre.name}
                    key={genre.id}
                    onDelete={() => removeSelectedGenres(genre)}/>)
            }
            {
                genres.length > 0 && genres.map(genre => <Chip
                    clickable
                    size='small'
                    sx={{color: '#fff', backgroundColor: 'secondary.dark', mt: '10px', mr: '10px', padding: 2}}
                    label={genre.name}
                    key={genre.id}
                    onClick={() => setSelectedGenres({name: genre.name, id: genre.id})}/>)
            }
        </Box>
    );
};

export default Genres;