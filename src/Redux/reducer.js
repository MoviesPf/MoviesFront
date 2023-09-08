import {
  GET_ALL_PROGRAMS,
  GET_PLATFORMS,
  GET_GENRES,
  GET_PROGRAM_DETAIL,
  FILTER_PROGRAMS_BY_GENRE,
  FILTER_PROGRAMS_BY_PLATFORM,
  FILTER_PROGRAMS_COMBINED,
  GET_PROGRAM_BY_NAME,
  GET_MOVIES,
  GET_SERIES,
  GET_MOVIES_GENRES,
  GET_SERIES_GENRES 
} from "./actions-type";

const initialState = {
  programs: [],
  filteredPrograms: [],
  searchedPrograms: [],
  programDetail: [],
  genres: [],
  platforms: [], 
  searchedPrograms: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PROGRAMS:
      return {
        ...state,
        programs: action.payload,
      };

    case GET_MOVIES:
      return {
        ...state,
        programs: action.payload,
      };

    case GET_SERIES:
      return {
        ...state,
        programs: action.payload,
      };

    case GET_PROGRAM_BY_NAME:
      return {
        ...state,
        searchedPrograms: payload
      };

    case GET_GENRES:
      return {
        ...state,
        genres: payload
      };

    case GET_MOVIES_GENRES:
      return {
        ...state,
        genres: payload
      };

    case GET_SERIES_GENRES:
      return {
        ...state,
        genres: payload
      };

    case GET_PLATFORMS:
      return {
        ...state,
        platforms: payload
      };

    case GET_PROGRAM_DETAIL:
      return {
        ...state,
        programDetail: payload
      };

    case FILTER_PROGRAMS_BY_GENRE:
    case FILTER_PROGRAMS_BY_PLATFORM:
    case FILTER_PROGRAMS_COMBINED:
      return {
        ...state,
        filteredPrograms: action.payload,
      };


    default:
      return state;
  }
};

export default reducer;
