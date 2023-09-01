import axios from "axios";
import { GET_ALL_PROGRAMS, GET_PROGRAM_DETAIL, FILTER_PROGRAMS_BY_GENRE, FILTER_PROGRAMS_BY_PLATFORM } from "./actions-type";

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

export const getProgramDetail = (ProgramsId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/programs/${ProgramsId}`);
      dispatch({ type: GET_PROGRAM_DETAIL, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProgramsByGenre = (genreName) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/programs/filter/${genreName}`);
      dispatch({ type: FILTER_PROGRAMS_BY_GENRE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProgramsByPlatform = (platformName) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/programs/filter/platform/${platformName}`);
      dispatch({ type: FILTER_PROGRAMS_BY_PLATFORM, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
