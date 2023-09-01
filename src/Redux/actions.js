import axios from "axios";
import { GET_ALL_PROGRAMS, GET_PROGRAM_DETAIL, GET_PROGRAMS_BY_GENRE } from "./actions-type";

export const getAllPrograms = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/programs");
      dispatch({ type: GET_ALL_PROGRAMS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
//CAMBIAR LO DE CONSOLE.LOG
export const getProgramDetail = (ProgramsId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/programs/${ProgramsId}`);
      return dispatch({ type: GET_PROGRAM_DETAIL, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getProgramsByGenre = (genreName) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/programs/filter/${genreName}`);
      dispatch({ type: GET_PROGRAMS_BY_GENRE, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

