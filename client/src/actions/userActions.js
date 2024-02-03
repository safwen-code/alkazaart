import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCESS,
  CLIENT_ADDSHIP_FAIL,
  CLIENT_FIRSTSHIP_REQUEST,
  CLIENT_FIRSTSHIP_SUCESS,
  CLIENT_SECONDSHIP_FAIL,
  CLIENT_SECONDSHIP_REQUEST,
  CLIENT_SECONDSHIP_SUCESS,
  CLIENT_ADDSHIP_REQUEST,
  CLIENT_ADDSHIP_SUCESS,
  NBR_CLIENTSHIP_REQUEST,
  NBR_CLIENTSHIP_SUCCESS,
  NBR_CLIENTSHIP_FAIL,
  SEND_NOTIFICATION,
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
export const firstshipAction = (firststep) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_FIRSTSHIP_REQUEST,
    })
    const {
      clientLogin: { clientinfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${clientinfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/client/addstep1client`,
      { firststep },
      config,
    )
    dispatch({ type: CLIENT_FIRSTSHIP_SUCESS, payload: data })
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
export const secondshipAction = (datatosend) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_SECONDSHIP_REQUEST,
    })
    const {
      clientLogin: { clientinfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${clientinfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/client/addstep2client`,
      { datatosend },
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
export const addshipAction = (datatosend) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_ADDSHIP_REQUEST,
    })
    const {
      clientLogin: { clientinfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${clientinfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/client/addstep3client`,
      { datatosend },
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

//get all ship number
export const shipNbrAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NBR_CLIENTSHIP_REQUEST,
    })
    const {
      clientLogin: { clientinfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${clientinfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/client/getnumberships`, config)
    dispatch({ type: NBR_CLIENTSHIP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: NBR_CLIENTSHIP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// send notification
export const notifyShipment = (id, message) => async (dispatch) => {
  dispatch({
    type: SEND_NOTIFICATION,
    payload: { id, message },
  })
}
