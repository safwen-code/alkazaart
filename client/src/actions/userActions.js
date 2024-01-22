import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCESS,
  CLIENT_ADDSHIP_FAIL,
  CLIENT_ADDSHIP_REQUEST,
  CLIENT_ADDSHIP_SUCESS,
  CLIENT_FIRSTSHIP_FAIL,
  CLIENT_FIRSTSHIP_REQUEST,
  CLIENT_FIRSTSHIP_SUCESS,
  CLIENT_SECONDSHIP_FAIL,
  CLIENT_SECONDSHIP_REQUEST,
  CLIENT_SECONDSHIP_SUCESS,
} from '../constants/userConstant'
import axios from 'axios'

export const loginuser = (email, password) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  })
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config,
    )
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    })
    return data
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logoutuser = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCESS })
}

//create ship firststep
export const firstshipAction = (id, firststep) => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({
      type: CLIENT_FIRSTSHIP_REQUEST,
    })
    // const {
    //   userLogin: { userinfo },
    // } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `bearer ${userinfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/client/addstep1client`,
      { id, firststep },
      config,
    )
    dispatch({ type: CLIENT_ADDSHIP_SUCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CLIENT_ADDSHIP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//create ship secondstep
export const secondshipAction = (id, datatosend) => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({
      type: CLIENT_SECONDSHIP_REQUEST,
    })
    // const {
    //   userLogin: { userinfo },
    // } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `bearer ${userinfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/client/addstep1client`,
      { id, datatosend },
      config,
    )
    dispatch({ type: CLIENT_SECONDSHIP_SUCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CLIENT_SECONDSHIP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//create ship secondstep
export const addshipAction = (id, datatosend) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_SECONDSHIP_REQUEST,
    })
    // const {
    //   userLogin: { userinfo },
    // } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `bearer ${userinfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/client/addstep3client`,
      { id, datatosend },
      config,
    )
    dispatch({ type: CLIENT_SECONDSHIP_SUCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CLIENT_SECONDSHIP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
