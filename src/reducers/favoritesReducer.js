import { ADD_FAVORITE, DELETE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions"

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

        case TOGGLE_FAVORITES:
            return ({
                ...state,
                displayFavorites: !state.displayFavorites
            })

        default:
            return state
    }
}

export default reducer