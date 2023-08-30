import axios from 'axios'
import {
    GET_ALL_MOVIES,
    
} from './actions-type'

export const getAllMovies = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('https://eecsj67ln9.execute-api.us-east-2.amazonaws.com/moviespf')
           return dispatch({ type: GET_ALL_MOVIES, payload: data })

        } catch (error) {
            console.log(error)
        }
    }
}

export const searchMovie = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://eecsj67ln9.execute-api.us-east-2.amazonaws.com/moviespf/${name}`)
           return dispatch({ type: GET_ALL_MOVIES, payload: data })

        } catch (error) {
            console.log(error)
        }
    }
}

