import axios from "axios";
import { URL_API } from "../URLS";

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
  SERIE_TYPE,
  POST_REVIEW,
  SELECT_DONATION_OPTION,
  GET_USER_PLAYLISTS,
} from "./actions-type";

export const getAllPrograms = () => {
  return async (dispatch) => {
    const { data } = await axios.get(URL_API + "programs");
    console.log(data);
    return dispatch({
      type: GET_ALL_PROGRAMS,
      payload: data,
    });
  };
};

export const getProgramByName = (title) => {
  return async (dispatch) => {
    const { data } = await axios(URL_API + `programs?title=${title}`);
    console.log(data);
    return dispatch({
      type: GET_PROGRAM_BY_NAME,
      payload: data.data,
    });
  };
};

export const getAllMovies = () => {
  return async (dispatch) => {
    const { data } = await axios(URL_API + `programs/movies`);
    console.log(data);
    return dispatch({
      type: GET_MOVIES,
      payload: data,
    });
  };
};


export const getAllSeries = () => {
  return async (dispatch) => {
    const { data } = await axios(URL_API + `programs/series`);
    console.log(data);
    return dispatch({
      type: GET_SERIES,
      payload: data,
    });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_API + "genres");
      console.log(data);
      dispatch({
        type: GET_GENRES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_API + "genres/movies");
      console.log(data);
      dispatch({
        type: GET_MOVIES_GENRES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSeriesGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_API + "genres/series");
      console.log(data);
      dispatch({
        type: GET_SERIES_GENRES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_API + "platforms");
      dispatch({
        type: GET_PLATFORMS,
        payload: data,
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
        payload: data.data,
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
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProgramsByPlatform = (platformName, type) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        URL_API + `programs/filter/platform/${platformName}/${type}`
      );
      console.log(data);
      dispatch({
        type: FILTER_PROGRAMS_BY_PLATFORM,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProgramsCombined = (genreName, platformName, type) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        URL_API +
          `programs/filter/genre/${genreName}/platform/${platformName}/${type}`
      );
      console.log(data);
      dispatch({
        type: FILTER_PROGRAMS_COMBINED,
        payload: data,
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
  source
}) => {
  console.log(email, avatar, nickname, name, password, status);
  return async (dispatch) => {
    try {
      const res = await fetch(URL_API + "users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          avatar,
          nickname,
          name,
          password,
          source
        })
      });
      const data = await res.json();
      console.log(data);
      dispatch({
        type: POST_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetch(URL_API + "users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      dispatch({
        type: LOGIN_USER,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN,
        payload: "Incorrect password or email",
      });
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
      payload: "",
    });
  };
};

export const resetMessage = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_MESSAGE,
      payload: "",
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

export const createReview = (reviewData, userId, ProgramsId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(URL_API + `review`, {
        reviewData,
        userId,
        ProgramsId,
      });
      dispatch({
        type: POST_REVIEW,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const selectDonationOption = (amount) => ({
  type: SELECT_DONATION_OPTION,
  payload: amount,
});

export const initiatePayment = (donationData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/donations/create-order",
      donationData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Respuesta de MercadoPago:", response.data);

    const sandbox_init_point =
      response.data?.response?.body?.sandbox_init_point;
    if (sandbox_init_point) {
      window.location.href = sandbox_init_point;
    } else {
      console.error("URL de redirección no válida");
    }
  } catch (error) {
    console.error("Error al iniciar el pago:", error);
  }
};

export const getUserPlaylists = (UserId) => {
  return async (dispatch) => {
    const { data } = await axios(URL_API + `playlists/user/${UserId}`);
    console.log(data);
    return dispatch({
      type: GET_USER_PLAYLISTS,
      payload: data
    })
  }
}