import {
  CREATE_CLIENT_REQUEST,
  CREATE_CLIENT_SUCCESS,
  CREATE_CLIENT_FAIL,
  ALL_CLIENT_REQUEST,
  ALL_CLIENT_SUCCESS,
  ALL_CLIENT_FAIL,
  LOGIN_CLIENT_REQUEST,
  LOGIN_CLIENT_SUCCESS,
  LOGIN_CLIENT_FAIL,
} from '../constants/clientConstants'
import axios from 'axios'

export const clientCreateAction = (dataform) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_CLIENT_REQUEST,
    })
    const {
      userLogin: { userinfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${userinfo.token}`,
      },
    }

    const { data } = await axios.post(
      '/api/fornisseur/createfornisseur',
      dataform,
      config,
    )
    dispatch({ type: CREATE_CLIENT_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CREATE_CLIENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const clientListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ALL_CLIENT_REQUEST,
    })
    const {
      userLogin: { userinfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${userinfo.token}`,
      },
    }

    const { data } = await axios.get('/api/fornisseur/allfornisseur', config)
    dispatch({ type: ALL_CLIENT_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ALL_CLIENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const loginclient = (email, password) => async (dispatch) => {
  dispatch({
    type: LOGIN_CLIENT_REQUEST,
  })
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/fornisseur/loginfornisseur',
      { email, password },
      config,
    )
    dispatch({
      type: LOGIN_CLIENT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LOGIN_CLIENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
