import { ADD_MOVIE, DELETE_MOVIE, ADD_COUNTER } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database",
    counter: 6
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            return {
                ...state,
                movies: [
                    ...state.movies,
                    action.payload
                ]
            }
        case ADD_COUNTER:
            return({
                ...state,
                counter: state.counter + 1
            })
        default:
            return state;
    }
}

export default reducer;