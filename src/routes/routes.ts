import { About, Card, Contact, Home } from "../pages";

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