import { OnlyHeader } from '~/Components/Layout/Layout';

import Home from '~/Pages/Home/Home';
import Following from '~/Pages/Following/Following';
import Profile from '~/Pages/Profile/Profile';
import Upload from '~/Pages/Upload/Upload';
import Search from '~/Pages/Search/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: OnlyHeader },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
