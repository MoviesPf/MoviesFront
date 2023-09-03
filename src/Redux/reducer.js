import { GET_ALL_PROGRAMS, GET_PROGRAM_DETAIL, GET_BYNAME } from "./actions-type";

const initialState = {
  programs: [],
  programDetail: [],
  searchedPrograms: [],
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

    case GET_BYNAME:
      return {
        ...state,
        searchedPrograms: action.payload,
      }

    default:
      return state;
  }
};

export default reducer;