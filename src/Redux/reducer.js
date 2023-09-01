// reducer.js

import {
  GET_ALL_PROGRAMS,
  GET_PROGRAM_DETAIL,
  FILTER_PROGRAMS_BY_GENRE,
  FILTER_PROGRAMS_BY_PLATFORM,
} from "./actions-type";

const initialState = {
  programs: [],
  programDetail: [],
  filteredPrograms: [], // Nuevo estado para las películas filtradas
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROGRAMS:
      return {
        ...state,
        programs: action.payload,
        filteredPrograms: action.payload, // Inicializa filteredPrograms con todas las películas
      };

    case GET_PROGRAM_DETAIL:
      return {
        ...state,
        programDetail: action.payload,
      };

    case FILTER_PROGRAMS_BY_GENRE:
      return {
        ...state,
        filteredPrograms: action.payload,
      };

    case FILTER_PROGRAMS_BY_PLATFORM:
      return {
        ...state,
        filteredPrograms: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
