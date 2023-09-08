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
  LOGIN_USER,
  LOGOUT_USER,
  ERROR_LOGIN,
  RESET_MESSAGE,
  POST_USER
} from './actions-type';

const initialState = {
  programs: [],
  programDetail: [],
  filteredPrograms: [],
  genres: [],
  platforms: [],
  searchedPrograms: [],
  user: {},
  message: ''
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PROGRAMS:
      return {
        ...state,
        programs: payload
      };

    case GET_MOVIES:
      return {
        ...state,
        programs: payload
      };

    case GET_SERIES:
      return {
        ...state,
        programs: payload
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
        filteredPrograms: payload
      };

    //USERS
    case LOGIN_USER:
      return {
        ...state,
        user: payload.data,
        message: payload.message
      };
    case POST_USER:
      return {
        ...state,
        user: payload.data
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        message: payload
      };
    case ERROR_LOGIN:
      return {
        ...state,
        message: payload
      };
    case RESET_MESSAGE:
      return {
        ...state,
        message: ''
      };

    default:
      return state;
  }
};

export default reducer;
