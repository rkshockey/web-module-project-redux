export const ADD_FAVORITE = 'ADD_FAVORITE'

export const addFavorite = (movieObj) => {
    return ({type: ADD_FAVORITE, payload: movieObj})
}