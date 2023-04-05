export interface IRootReducer {
    cards: {
        id: number;
        title: string;
        body: string;
    }[]
}

interface ICard {
    id: number;
    title: string;
    body: string;
}

const initialState: IRootReducer = {
    cards: [
        {
            id: 1,
            title: 'Ign',
            body: 'Ignbody'
        },
        {
            id: 2,
            title: 'Ign2',
            body: 'Ignbody2'
        },
    ]
}


type ActionType =
    { type: 'delete user', payload: number }


export const rootReducer = (state: IRootReducer = initialState, action: ActionType): IRootReducer => {

    switch (action.type) {
        case 'delete user':
            return {
                ...state,
                // cards: state.cards.filter((card) => {
                //   if(action.payload !== card.id) return card
                // })
                cards: state.cards.filter(c => action.payload !== c.id)
            }

        default:
            return state;
    }
}