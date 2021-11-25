import React, {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import useGenres from "../hooks/useGenres";

const withFilms = (Component, url) => {
    const NewComponent = props => {
        const {fetchAllFilms} = useActions();
        const {films, page, selectedGenres} = useSelector(state => state.films)

        const genres = useGenres(selectedGenres);

        useEffect(() => {
            fetchAllFilms(url, page, genres);
        }, [page, genres]);

        return <Component {...props} films={films}/>
    }
    return NewComponent;
};

export default withFilms;