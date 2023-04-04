import { Link, useLocation } from "react-router-dom"
import { routes } from "../routes/routes"



export const Navbar = () => {

    const location = useLocation()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Navbar</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            routes.map(({ pathname, name, show = true }) => {

                                if (show) {
                                    return (
                                        <li className="nav-item" key={pathname}>
                                            <Link
                                                className={pathname === location.pathname ? 'nav-link active' : 'nav-link'}
                                                to={pathname}
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
