import { Route, Routes } from "react-router-dom"
import { routes } from './routes';

export const RouteComponent = () => {
    return (
        <Routes>
            {
                routes.map(route => (
                    <Route key={route.name} path={route.pathname} Component={route.component} />
                ))
            }
        </Routes>
    )
}
