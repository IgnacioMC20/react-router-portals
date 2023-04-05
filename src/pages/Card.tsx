import { useNavigate, useParams } from "react-router-dom"
import { Navbar } from "../components";
import { useSelector, useDispatch } from 'react-redux';
import { IRootReducer } from "../reducers/rootReducer";
import { useEffect } from 'react';
import { deleteCard } from "../actions/cardAction";

export const Card = () => {



    const { user = undefined } = useParams<{ user: string }>();
    const navigate = useNavigate()


    const {cards} = useSelector((state: IRootReducer) => state);

    useEffect(() => {
        console.log(cards)
    }, [cards])

    const card = useSelector((state: IRootReducer) => state.cards.find((card) => card.title === user));

    const dispatch = useDispatch();


    const onButtonClick = (): void => {
      dispatch(deleteCard(card?.id!))
      navigate('/Contact')
    }
    return (
        <>
            <Navbar />
            <div className="card p-3">
                <h3 className="card-title">Card</h3>
                <p className="card-text">User: {user}</p>
                <button onClick={onButtonClick} className="btn btn-danger">Delete</button>
            </div>
        </>
    )
}
