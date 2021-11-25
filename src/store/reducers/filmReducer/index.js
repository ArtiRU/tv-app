import {actions} from "../../../utils/consts";

const initialState = {
    films: [],
    page: 1,
    favorite: [],
    genres: [],
    selectedGenres: [],
    search: [],
    credits: [],
    isLoading: false,
    error: null,
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_IS_LOADING:
            return {...state, isLoading: action.payload};
        case actions.SET_ERROR:
            return {...state, error: action.payload, isLoading: false};
        case actions.SET_FILMS:
            return {...state, films: action.payload};
        case actions.SET_PAGE:
            return {...state, page: action.payload};
        case actions.SET_FAVORITE:
            return {...state, favorite: action.payload};
        case actions.SET_GENRES:
            return {...state, genres: action.payload};
        case actions.SET_SELECTED_GENRES: {
            if (action.payload.length === 0) {
                return {...state, selectedGenres: []};
            } else {
                return {
                    ...state,
                    selectedGenres: [...state.selectedGenres, {name: action.payload.name, id: action.payload.id}],
                    genres: state.genres.filter(genre => genre.id !== action.payload.id),
                };
            }
        }
        case actions.REMOVE_SELECTED_GENRES:
            return {
                ...state,
                selectedGenres: state.selectedGenres.filter(genre => genre.id !== action.payload.id),
                genres: [...state.genres, {name: action.payload.name, id: action.payload.id}],
            };
        case actions.SET_SEARCH:
            return {...state, search: action.payload};
        case actions.SET_CREDITS:
            return {...state, credits: action.payload};
        default:
            return state;
    }
}

export default filmReducer;