import {
  GET_ALL_PROGRAMS,
  GET_PROGRAM_DETAIL,
  GET_PROGRAMS_BY_GENRE,
} from "./actions-type";

const initialState = {
  programs: [],
  programDetail: [],
  filterPrograms: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROGRAMS:
      return {
        ...state,
        programs: action.payload,
      };

    case GET_PROGRAM_DETAIL:
      return {
        ...state,
        programDetail: action.payload,
      };
    case GET_PROGRAMS_BY_GENRE:
      return {
        ...state,
        filterPrograms: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;