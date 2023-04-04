import { Link } from "react-router-dom"
import { Navbar } from "../components"

export const Contact = () => {
    return (
        <div className="App">
            <Navbar />
            <h1>Contact Page</h1>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sunt molestiae magnam maiores soluta sed voluptas!
                Voluptatum, assumenda id praesentium sapiente, mollitia temporibus iure odit fuga ipsa aperiam incidunt maxime.
            </p>

            <Link to={'/ign'} className="btn btn-dark">
                Ign contact
            </Link>
        </div>
    )
}
