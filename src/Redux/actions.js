import axios from "axios";
import { GET_ALL_MOVIES, GET_PROGRAM_DETAIL } from "./actions-type";

export const getAllMovies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/programs");
      dispatch({ type: GET_ALL_MOVIES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProgramDetail = (ProgramsId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/programs/${ProgramsId}`
      );
      return dispatch({ type: GET_PROGRAM_DETAIL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const searchMovie = (title) => {
//     return async (dispatch) => {
//         try {
//             const { data } = await axios.get(`http://localhost:3001/programs?title=${title}`)
//            return dispatch({ type: GET_ALL_MOVIES, payload: data })

//         } catch (error) {
//             console.log(error)
//         }
//     }
// }
