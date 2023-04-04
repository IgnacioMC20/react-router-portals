import { useParams } from "react-router-dom"
import { Navbar } from "../components";

export const Card = () => {

    const { user = undefined } = useParams<{ user: string }>();

    console.log(user)
    return (
        <>
            <Navbar />
            <div className="card p-3">
                <h3 className="card-title">Card</h3>
                <p className="card-text">User: {user}</p>
            </div>
        </>
    )
}
