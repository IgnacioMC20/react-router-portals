import { Link } from "react-router-dom"
import { Navbar } from "../components"
import { connect, useDispatch, useSelector } from "react-redux"
import { IRootReducer } from "../reducers/rootReducer";
import { deleteCard } from "../actions/cardAction";

const Contact = ({ cards }: IRootReducer) => {

    return (
        <div className="App">
            <Navbar />
            <h1>Contact Page</h1>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sunt molestiae magnam maiores soluta sed voluptas!
                Voluptatum, assumenda id praesentium sapiente, mollitia temporibus iure odit fuga ipsa aperiam incidunt maxime.
            </p>
{/* 
            <Link to={'/ign'} className="btn btn-dark">
                Ign contact
            </Link> */}
            {
                cards.map(card => (
                    <Link key={card.id} to={'/' + card.title}>
                        <div className="card">
                            <div className="card-title">{card.title}</div>
                            <div className="body">{card.body}</div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
};

const mapStateToProps = (state: IRootReducer) => {
    return {
        cards: state.cards,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // Aquí puedes mapear las acciones que quieres utilizar para actualizar el store
        deleteCard: (id: number) => { dispatch(deleteCard)}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);