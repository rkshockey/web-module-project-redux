import { ADD_FAVORITE } from "../actions/favoritesActions"

const initialState = {
    favorites: [],
    displayFavorites: true
}

function reducer (state = initialState, action){
    switch(action.type){
        case ADD_FAVORITE:
            return ({
                ...state,
                favorites: [...state.favorites, action.payload]
            })

        default:
            return state
    }
}

export default reducer