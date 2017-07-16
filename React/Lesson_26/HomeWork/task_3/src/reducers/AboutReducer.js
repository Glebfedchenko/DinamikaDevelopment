export default function aboutStore(state=[3,4,5,6,4], action) {

    if ( action.type === "ADD-NEW-RATE" ) {
        return [...state,action.payload]
    }
    return state;
}

