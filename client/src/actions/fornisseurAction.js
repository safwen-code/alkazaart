import {
  CREATE_FORNISSEUR_REQUEST,
  CREATE_FORNISSEUR_SUCCESS,
  CREATE_FORNISSEUR_FAIL,
  ALL_FORNISSEUR_REQUEST,
  ALL_FORNISSEUR_SUCCESS,
  ALL_FORNISSEUR_FAIL,
  LOGIN_FORNISSEUR_REQUEST,
  LOGIN_FORNISSEUR_SUCCESS,
  LOGIN_FORNISSEUR_FAIL,
} from '../constants/fornisseurConstants'
import axios from 'axios'

export const fornisseurCreateAction = (dataform) => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({
      type: CREATE_FORNISSEUR_REQUEST,
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
    dispatch({ type: CREATE_FORNISSEUR_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CREATE_FORNISSEUR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const fornisseurListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ALL_FORNISSEUR_REQUEST,
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
    dispatch({ type: ALL_FORNISSEUR_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ALL_FORNISSEUR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const loginfornisseur = (email, password) => async (dispatch) => {
  dispatch({
    type: LOGIN_FORNISSEUR_REQUEST,
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
      type: LOGIN_FORNISSEUR_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LOGIN_FORNISSEUR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
