import axios from "axios";
import { GET_ALL_PROGRAMS, GET_PROGRAM_DETAIL } from "./actions-type";

export const getAllPrograms = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/programs");
      dispatch({ type: GET_ALL_PROGRAMS, payload: data });
      console.log(data);
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

