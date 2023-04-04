import { useState } from "react"
import { Modal } from "../components/Modal"
import { Navbar } from "../components/Navbar"

export const Home = () => {

    const [showModal, setShowModal] = useState<boolean>(false)

    const changeState = (): void => {
        setShowModal(!showModal)
    }

    return (
        <div className="App">
            <Navbar/>
            <h1>Home Page</h1>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sunt molestiae magnam maiores soluta sed voluptas!
                Voluptatum, assumenda id praesentium sapiente, mollitia temporibus iure odit fuga ipsa aperiam incidunt maxime.
            </p>

            <button className="btn btn-dark" onClick={changeState}>Open Modal</button>

            {
                showModal && <Modal changeState={changeState} /> 
            }
        </div>
    )
}
