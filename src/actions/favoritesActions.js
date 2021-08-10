export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'

export const addFavorite = (movieObj) => {
    return ({type: ADD_FAVORITE, payload: movieObj})
}

export const deleteFavorite = (movieId) => {
    return ({type: DELETE_FAVORITE, payload: movieId})
}