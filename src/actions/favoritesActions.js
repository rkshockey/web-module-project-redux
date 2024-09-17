export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'

export const addFavorite = (movieObj) => {
    return ({type: ADD_FAVORITE, payload: movieObj})
}

export const deleteFavorite = (movieId) => {
    return ({type: DELETE_FAVORITE, payload: movieId})
}

export const toggleFavorites = () => {return({type: TOGGLE_FAVORITES})}