import {actions} from "../../../utils/consts";
import api from '../../../axios/api';

export const filmActions = {
    setIsLoading: payload => ({type: actions.SET_IS_LOADING, payload}),
    setError: error => ({type: actions.SET_ERROR, payload: error}),
    setFilms: payload => ({type: actions.SET_FILMS, payload}),
    setPage: payload => ({type: actions.SET_PAGE, payload}),
    setFavorite: payload => ({type: actions.SET_FAVORITE, payload}),
    setGenres: payload => ({type: actions.SET_GENRES, payload}),
    setSearch: payload => ({type: actions.SET_SEARCH, payload}),
    setCredits: payload => ({type: actions.SET_CREDITS, payload}),
    setSelectedGenres: payload => ({type: actions.SET_SELECTED_GENRES, payload}),
    removeSelectedGenres: payload => ({type: actions.REMOVE_SELECTED_GENRES, payload}),
    fetchAllFilms: (url, page, genres) => async (dispatch) => {
        try {
            dispatch(filmActions.setIsLoading(true));
            const response = await api.get(url + `?page=${page}&with_genres=${genres}`);
            dispatch(filmActions.setFilms(response.data.results));
            setTimeout(() => {
                dispatch(filmActions.setIsLoading(false));
            }, 1000);
        } catch (e) {
            dispatch(filmActions.setError(e));
        }
    },
    addFavorite: (favorite) => async (dispatch) => {
        dispatch(filmActions.setIsLoading(true));
        const items = await JSON.parse(localStorage.getItem('favorite')) || [];

        if (!items.find(item => item.title === favorite.title)) {
            dispatch(filmActions.setFavorite([...items, favorite]));
            localStorage.setItem('favorite', JSON.stringify([...items, favorite]));
        }

        dispatch(filmActions.setIsLoading(false));
    },
    removeFavorite: (title) => async (dispatch) => {
        const items = await JSON.parse(localStorage.getItem('favorite')) || [];
        const filteredItems = items.filter(item => item.title !== title);
        dispatch(filmActions.setFavorite(filteredItems));
        localStorage.setItem('favorite', JSON.stringify(filteredItems));
    },
    fetchGenres: () => async (dispatch) => {
        dispatch(filmActions.setIsLoading(true));

        const response = await api.get('/genre/movie/list');

        dispatch(filmActions.setGenres(response.data.genres));
        dispatch(filmActions.setIsLoading(false));
    },
    fetchSearch: (searchText) => async (dispatch) => {
        dispatch(filmActions.setIsLoading(true));

        const response = await api.get(`/search/movie?query=${searchText}&include_adult=false`);

        dispatch(filmActions.setSearch(response.data.results));

        dispatch(filmActions.setIsLoading(false));
    },
    fetchCredits: (id) => async (dispatch) => {
        dispatch(filmActions.setIsLoading(true));

        const response = await api.get(`/movie/${id}/credits`);

        dispatch(filmActions.setCredits(response.data.cast));

        dispatch(filmActions.setIsLoading(false));
    }
}