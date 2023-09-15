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
  POST_USER,
  MAIN_TYPE,
  MOVIE_TYPE,
  SERIE_TYPE,
  POST_REVIEW,
  SELECT_DONATION_OPTION,
  GET_USER_PLAYLISTS,
  GET_USER_REVIEWS,
  HANDLE_FAV_WATCHED_WATCHLIST,
  GET_USER_BY_ID,
  GET_USERS_ADMIN,
  RESET_USER_BY_ID,
  DELETE_USER,
  UPLOAD_AVATAR,
  UPLOAD_BACKGROUND
} from "./actions-type";

const initialState = {
  programs: [],
  filteredPrograms: [],
  searchedPrograms: [],
  programDetail: [],
  genres: [],
  platforms: [],
  user: {},
  userById: {},
  userPlaylists: {},
  userReviews: {},
  message: '',
  type: 'main',
  selectedOption: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PROGRAMS:
      return {
        ...state,
        programs: payload,
        filteredPrograms: []
      };

    case GET_MOVIES:
      return {
        ...state,
        programs: payload,
        filteredPrograms: []
      };

    case GET_SERIES:
      return {
        ...state,
        programs: payload,
        filteredPrograms: []
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
    case SELECT_DONATION_OPTION:
      return {
        ...state,
        selectedOption: payload
      };
    //USERS
    case LOGIN_USER:
      return {
        ...state,
        user: payload.data,
        message: payload.message
      };
    case POST_USER:
      console.log(payload);
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

    case GET_USER_PLAYLISTS:
      return {
        ...state,
        userPlaylists: payload
      };

    case GET_USER_REVIEWS:
      return {
        ...state,
        userReviews: payload
      };

    case MAIN_TYPE:
      return {
        ...state,
        type: 'main'
      };

    case MOVIE_TYPE:
      return {
        ...state,
        type: 'movie'
      };

    case SERIE_TYPE:
      return {
        ...state,
        type: 'serie'
      };

    case POST_REVIEW:
      return {
        ...state
      };

    case HANDLE_FAV_WATCHED_WATCHLIST:
      return {
        ...state
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        userById: payload
      };

    case DELETE_USER:
      console.log(payload);
      return {
        ...state,
        userById: payload
      };
    case GET_USERS_ADMIN:
      return {
        ...state,
        allUsers: payload.data,
        usersInfo: {
          total: payload.total,
          totalBanned: payload.totalBanned,
          totalDonators: payload.totalDonators,
          totalReviews: payload.totalReviews
        }
      };

    case RESET_USER_BY_ID:
      return {
        ...state,
        userById: {}
      }
    case UPLOAD_AVATAR:
        // Actualiza la URL de la imagen en el estado del usuario
      return {
        ...state,
        user: {
          ...state.user,
          [payload.imageType]: payload.imageUrl,
        },
      };
    case UPLOAD_BACKGROUND:
        // Actualiza la URL de la imagen en el estado del usuario
      return {
        ...state,
        user: {
          ...state.user,
          [payload.imageType]: payload.imageUrl,
        },
      };

    default:
      return state;
  }
};

export default reducer;
