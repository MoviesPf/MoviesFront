import { GET_ALL_MOVIES, GET_PROGRAM_DETAIL } from "./actions-type";

const initialState = {
  movies: [],
  programDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload,
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
