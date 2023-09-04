import {
  GET_ALL_PROGRAMS,
  GET_GENRES,
  GET_PLATFORMS,
  GET_PROGRAM_DETAIL,
  FILTER_PROGRAMS_BY_GENRE,
  FILTER_PROGRAMS_BY_PLATFORM,
  FILTER_PROGRAMS_COMBINED,
  GET_BYNAME,
} from "./actions-type";

const initialState = {
  programs: [],
  programDetail: [],
  filteredPrograms: [],
  genres: [],      // Agrega un arreglo para almacenar los géneros
  platforms: [], 
  searchedPrograms: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROGRAMS:
      return {
        ...state,
        programs: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };
    case GET_PROGRAM_DETAIL:
      return {
        ...state,
        programDetail: action.payload,
      };
    case FILTER_PROGRAMS_BY_GENRE:
    case FILTER_PROGRAMS_BY_PLATFORM:
    case FILTER_PROGRAMS_COMBINED:
      return {
        ...state,
        filteredPrograms: action.payload,
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