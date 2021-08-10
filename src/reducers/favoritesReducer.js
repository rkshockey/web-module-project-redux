import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/favoritesActions"

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
        
        case DELETE_FAVORITE:
            return ({
                ...state,
                favorites: state.favorites.filter(item => action.payload !== item.id)
            })

        default:
            return state
    }
}

export default reducer