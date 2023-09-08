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
  GET_SERIES_GENRES,
  SELECT_DONATION_OPTION,
} from "./actions-type";

const initialState = {
  programs: [],
  programDetail: [],
  filteredPrograms: [],
  genres: [],
  platforms: [],
  searchedPrograms: [],
  selectedOption: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

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
        searchedPrograms: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case GET_MOVIES_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case GET_SERIES_GENRES:
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
    case SELECT_DONATION_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;