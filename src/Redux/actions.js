import axios from 'axios';
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
  LOGIN_USER,
  LOGOUT_USER,
  ERROR_LOGIN,
  RESET_MESSAGE,
  POST_USER,
  MAIN_TYPE,
  MOVIE_TYPE,
  SERIE_TYPE
} from './actions-type';

export const getAllPrograms = () => {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:3001/programs');
    console.log(data);
    return dispatch({
      type: GET_ALL_PROGRAMS,
      payload: data
    });
  };
};

export const getProgramByName = (title) => {
  return async (dispatch) => {
    const { data } = await axios(
      `http://localhost:3001/programs?title=${title}`
    );
    console.log(data);
    return dispatch({
      type: GET_PROGRAM_BY_NAME,
      payload: data.data
    });
  };
};

export const getAllMovies = () => {
  return async (dispatch) => {
    const { data } = await axios(`http://localhost:3001/programs/movies`);
    console.log(data);
    return dispatch({
      type: GET_MOVIES,
      payload: data
    });
  };
};

export const getAllSeries = () => {
  return async (dispatch) => {
    const { data } = await axios(`http://localhost:3001/programs/series`);
    console.log(data);
    return dispatch({
      type: GET_SERIES,
      payload: data
    });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:3001/genres');
      console.log(data);
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
      const { data } = await axios.get('http://localhost:3001/genres/movies');
      console.log(data);
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
      const { data } = await axios.get('http://localhost:3001/genres/series');
      console.log(data);
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
      const { data } = await axios.get('http://localhost:3001/platforms');
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
      const { data } = await axios.get(
        `http://localhost:3001/programs/${ProgramsId}`
      );
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
      const { data } = await axios.get(`http://localhost:3001/programs/filter/genre/${genreName}/${type}`)
      dispatch({ 
        type: FILTER_PROGRAMS_BY_GENRE, 
        payload: data 
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProgramsByPlatform = (platformName, type) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/programs/filter/platform/${platformName}/${type}`);
      console.log(data)
      dispatch({ 
        type: FILTER_PROGRAMS_BY_PLATFORM, 
        payload: data 
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProgramsCombined = (genreName, platformName, type) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/programs/filter/genre/${genreName}/platform/${platformName}/${type}`);
      console.log(data)
      dispatch({ 
        type: FILTER_PROGRAMS_COMBINED, 
        payload: data 
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUsers = ({ email, avatar, nickname, name, password, source }) => {
  console.log(email, avatar, nickname, name, password);
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, avatar, nickname, name, password, source })
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
      const res = await fetch('http://localhost:3001/users/login', {
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
  return { type: MAIN_TYPE, payload: "main" };
};

export const changeTypeMovie = () => {
  return { type: MOVIE_TYPE, payload: "movie" };
};

export const changeTypeSerie = () => {
  return { type: SERIE_TYPE, payload: "serie" };
};
