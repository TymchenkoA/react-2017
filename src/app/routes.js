import SearchPage from './scenes/search/index.jsx';
import FilmPage from './scenes/film/index.jsx';

export default [
    {
        path: '/',
        exact: true,
        component: SearchPage

    },
    {
        path: '/search/:type/:query',
        component: SearchPage
    },
    {
        path: '/film/:query',
        component: FilmPage
    }
];