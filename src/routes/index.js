import Home from "../pages/Home";
import {routes} from '../utils/consts'
import withFilms from "../hoc/withFilms";
import Favorite from "../pages/Favorite";
import Notifications from "../pages/Notifications";
import Search from "../pages/Search";

const Trending = withFilms(Home, '/trending/all/day');
const Films = withFilms(Home, '/discover/movie');

export const publicRoutes = [
    {path: routes.HOME, component: Trending, exact: true},
    {path: routes.FILMS, component: Films, exact: true},
    {path: routes.FAVORITE, component: Favorite, exact: true},
    {path: routes.NOTIFICATIONS, component: Notifications, exact: true},
    {path: routes.SEARCH, component: Search, exact: true},
]