import axios from 'axios';
import { URL_API } from '../URLS';

import {
  GET_ALL_PROGRAMS,
  GET_PROGRAM_BY_NAME,
  GET_PLATFORMS,
  GET_GENRES,
  GET_PROGRAM_DETAIL,
  FILTER_PROGRAMS_BY_GENRE,
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
  UPDATE_USER,
  PROGRAMS_FILTERS,
  ACTIVE_FILTERS,
  GENRES_FILTERS,
  RESET_FILTERS
} from './actions-type';

export const getAllPrograms = (page = 1) => {
  return async (dispatch) => {
    const { data } = await axios.get(URL_API + 'programs?page=' + page);
    return dispatch({
      type: GET_ALL_PROGRAMS,
      payload: data
    });
  };
};

export const getProgramByName = (title) => {
  return async (dispatch) => {
    const { data } = await axios(URL_API + `programs?title=${title}`);
    return dispatch({
      type: GET_PROGRAM_BY_NAME,
      payload: data.data
    });
  };
};

export const getAllMovies = (page = 1) => {
  return async (dispatch) => {
    const { data } = await axios(URL_API + `programs/movies?page=` + page);
    return dispatch({
      type: GET_MOVIES,
      payload: data
    });
  };
};

export const getAllSeries = (page = 1) => {
  return async (dispatch) => {
    const { data } = await axios(URL_API + `programs/series?page=` + page);
    return dispatch({
      type: GET_SERIES,
      payload: data
    });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_API + 'genres');
      dispatch({
        type: GET_GENRES,
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_API + 'genres/movies');
      dispatch({
        type: GET_MOVIES_GENRES,
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSeriesGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_API + 'genres/series');
      dispatch({
        type: GET_SERIES_GENRES,
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_API + 'platforms');
      dispatch({
        type: GET_PLATFORMS,
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProgramDetail = (ProgramsId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_API + `programs/${ProgramsId}`);
      dispatch({
        type: GET_PROGRAM_DETAIL,
        payload: data.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProgramsByGenre = (genreName, type) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        URL_API + `programs/filter/genre/${genreName}/${type}`
      );
      dispatch({
        type: FILTER_PROGRAMS_BY_GENRE,
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUsers = ({
  email,
  avatar,
  nickname,
  name,
  password,
  source,
  status
}) => {
  console.log(email, avatar, nickname, name, password, status);
  return async (dispatch) => {
    try {
      const res = await fetch(URL_API + 'users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          avatar,
          nickname,
          name,
          password,
          source,
          status
        })
      });
      const data = await res.json();
      console.log(data);
      dispatch({
        type: POST_USER,
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetch(URL_API + 'users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      dispatch({
        type: LOGIN_USER,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN,
        payload: 'Incorrect password or email'
      });
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
      payload: ''
    });
  };
};

export const resetMessage = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_MESSAGE,
      payload: ''
    });
  };
};

export const changeTypeMain = () => {
  return { type: MAIN_TYPE, payload: 'main' };
};

export const changeTypeMovie = () => {
  return { type: MOVIE_TYPE, payload: 'movie' };
};

export const changeTypeSerie = () => {
  return { type: SERIE_TYPE, payload: 'serie' };
};

export const createReview = (reviewData, userId, ProgramsId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(URL_API + `review`, {
        reviewData,
        userId,
        ProgramsId
      });
      dispatch({
        type: POST_REVIEW
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const selectDonationOption = (amount) => ({
  type: SELECT_DONATION_OPTION,
  payload: amount
});

export const initiatePayment = (donationData) => async (dispatch) => {
  try {
    const response = await axios.post(
      URL_API + 'donations/create-order',
      donationData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Respuesta de MercadoPago:', response.data);

    const sandbox_init_point =
      response.data?.response?.body?.sandbox_init_point;
    if (sandbox_init_point) {
      window.location.href = sandbox_init_point;
    } else {
      console.error('URL de redirección no válida');
    }
  } catch (error) {
    console.error('Error al iniciar el pago:', error);
  }
};

export const getUserPlaylists = (UserId) => {
  return async (dispatch) => {
    const { data } = await axios(URL_API + `playlists/user/${UserId}`);
    return dispatch({
      type: GET_USER_PLAYLISTS,
      payload: data
    });
  };
};

export const getUserReviews = (UserId) => {
  return async (dispatch) => {
    const { data } = await axios(URL_API + `review/user/${UserId}`);
    console.log(data);
    return dispatch({
      type: GET_USER_REVIEWS,
      payload: data
    });
  };
};

export const handleList = (UserId, PlaylistName, ProgramId) => {
  return async (dispatch) => {
    const { data } = await axios.patch(
      URL_API + `playlists/user/${UserId}/name/${PlaylistName}/program/${ProgramId}`
    );
    console.log(data);
    return dispatch({
      type: HANDLE_FAV_WATCHED_WATCHLIST,
      payload: data
    });
  };
};

export const getUserById = (id) => {
  console.log(id);
  return async (dispatch) => {
    const res = await fetch(URL_API + `users/${id}`);
    const data = await res.json();
    return dispatch({
      type: GET_USER_BY_ID,
      payload: data
    });
  };
};

// ADMIN DASHBOARD
export const getUsersAdmin = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(URL_API + 'users/all');
      const data = await res.json();

      return dispatch({
        type: GET_USERS_ADMIN,
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUser = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      const res = await fetch(URL_API + 'users/ban/' + id, {
        method: 'DELETE'
      });
      const data = await res.json();

      return dispatch({
        type: DELETE_USER,
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetUserById = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_USER_BY_ID,
      payload: ''
    });
  };
};

export const updateUser = (updateData) => async (dispatch) => {
  try {
    const response = await axios.patch(URL_API + `users`, updateData,{
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({ type: UPDATE_USER, payload: response.data.update });
  } catch (error) {
    console.log(error);
  }
}
// filtros

export const programsFilters = (state, page = 1) => {
  return async (dispatch) => {
    try {
      const res = await fetch(URL_API + 'programs/filters?page=' + page, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
      });
      const data = await res.json();
      console.log(data);
      dispatch({
        type: PROGRAMS_FILTERS,
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const activeFilters = (state) => {
  return (dispatch) => {
    dispatch({
      type: ACTIVE_FILTERS,
      payload: state
    });
  };
};

export const resetFilters = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_FILTERS,
      payload: ''
    });
  };
};

export const genresFilters = (filter) => {
  return (dispatch) => {
    dispatch({
      type: GENRES_FILTERS,
      payload: filter
    });
  };
};