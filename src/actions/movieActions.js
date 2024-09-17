export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = 'ADD_MOVIE'
export const ADD_COUNTER = 'ADD_COUNTER'

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movieObj) => {
    return({type: ADD_MOVIE, payload: movieObj})
}

export const addCounter = () => {
    return ({type: ADD_COUNTER})
}