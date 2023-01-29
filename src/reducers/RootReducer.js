
const initialState = {
    cards:[
        {
            id:1,
            name:'AneelKumar',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias dolorem cum culpa vero ab corporis magnam placeat quae harum?'
        },
        {
            id:2,
            name:'Alex',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias dolorem cum culpa vero ab corporis magnam placeat quae harum?'
        },
        {
            id:3,
            name:'Shyam',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias dolorem cum culpa vero ab corporis magnam placeat quae harum?'
        }
    ],
    users:[]
}

const RootReducer = (state = initialState, action)=>{

    switch (action.type) {
        case 'DELETE_CARD':
                const newCard = state.cards.filter((card)=>{
                    return action.id !== card.id;
                })

                return{
                    ...state,
                    cards:newCard
                }
    
        case 'FETCH_USERS':
            return {
                ...state,
                users:action.payload
            }
        default:
            return state;
    }
}

export default RootReducer