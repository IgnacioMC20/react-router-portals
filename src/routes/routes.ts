import { About, Card, Home } from "../pages";
import Contact from "../pages/Contact";

interface IRoutes {
    pathname: string;
    name: string;
    component: React.FC
    show?: boolean
}

export const routes: IRoutes[] = [
    {
        pathname: '/home',
        name: 'Home',
        component: Home,
    },
    {
        pathname: '/about',
        name: 'About',
        component: About,
    },
    {
        pathname: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        pathname: '/:user',
        name: 'User',
        component: Card,
        show: false
    },
]