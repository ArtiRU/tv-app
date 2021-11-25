export const routes = {
    HOME: '/',
    FAVORITE: '/favorite',
    FILMS: '/films',
    NOTIFICATIONS: '/notifications',
    SEARCH: '/search',
}

export const config = {
    img_300: 'https://image.tmdb.org/t/p/w300',
    img_500: 'https://image.tmdb.org/t/p/w500',
    unavailable: 'https://www.movienewz.com/img/films/poster-holder.jpg',
    noPicture: 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg',
};

export const actions = {
    SET_ERROR: 'SET_ERROR',
    SET_IS_LOADING: 'SET_IS_LOADING',
    SET_FILMS: 'SET_FILMS',
    SET_DRAWER: 'SET_DRAWER',
    SET_PAGE: 'SET_PAGE',
    SET_FAVORITE: 'SET_FAVORITE',
    SET_GENRES: 'SET_GENRES',
    SET_SELECTED_GENRES: 'SET_SELECTED_GENRES',
    REMOVE_SELECTED_GENRES: 'REMOVE_SELECTED_GENRES',
    SET_SEARCH: 'SET_SEARCH',
    SET_CREDITS: 'SET_CREDITS',
}