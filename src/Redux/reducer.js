import {
  GET_ALL_PROGRAMS, 
  GET_PROGRAM_BY_NAME, 
  GET_PLATFORMS, 
  GET_GENRES, 
  GET_PROGRAM_DETAIL, 
  FILTER_PROGRAMS_BY_GENRE, 
  FILTER_PROGRAMS_BY_PLATFORM, 
  FILTER_PROGRAMS_COMBINED, 
  GET_MOVIES, 
  GET_SERIES, 
  GET_MOVIES_GENRES, 
  GET_SERIES_GENRES,
  MAIN_TYPE,
  MOVIE_TYPE,
  SERIE_TYPE
} from "./actions-type";

const initialState = {
  programs: [],
  filteredPrograms: [],
  searchedPrograms: [],
  programDetail: [],
  genres: [],
  platforms: [], 
  type: "main",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_PROGRAMS:
      return {
        ...state,
        programs: action.payload,
        filteredPrograms: []
      };
      
    case GET_MOVIES:
      return {
        ...state,
        programs: action.payload,
        filteredPrograms: []
      };
        
    case GET_SERIES:
      return {
        ...state,
        programs: action.payload,
        filteredPrograms: []
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

    case MAIN_TYPE:
      return {
        ...state,
        type: "main"
      }

    case MOVIE_TYPE:
      return {
        ...state,
        type: "movie"
      }

    case SERIE_TYPE:
      return {
        ...state,
        type: "serie"
      }

    default:
      return state;
  }
};

export default reducer;