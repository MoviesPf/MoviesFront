import { GET_ALL_PROGRAMS, GET_PROGRAM_DETAIL } from "./actions-type";

const initialState = {
  programs: [],
  programDetail: [],
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

    default:
      return state;
  }
};

export default reducer;