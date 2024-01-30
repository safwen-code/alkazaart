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
  MY_SHIPS_REQUEST,
  MY_SHIPS_SUCCESS,
  MY_SHIPS_FAIL,
  GET_SHIPID_REQUEST,
  GET_SHIPID_SUCCESS,
  GET_SHIPID_FAIL,
  UPDATE_MODAL_SHIP_CLIENT_REQUEST,
  UPDATE_MODAL_SHIP_CLIENT_SUCCESS,
  UPDATE_MODAL_SHIP_CLIENT_FAIL,
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
      '/api/client/createfornisseur',
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

    const { data } = await axios.get('/api/client/allfornisseur', config)
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
      '/api/client/loginfornisseur',
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

export const myShipsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MY_SHIPS_REQUEST,
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

    const { data } = await axios.get('/api/client/getmyship', config)
    dispatch({ type: MY_SHIPS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: MY_SHIPS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const ShipByIdAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_SHIPID_REQUEST,
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

    const { data } = await axios.get(`/api/client/shipbyid/${id}`, config)
    dispatch({ type: GET_SHIPID_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: GET_SHIPID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//update secondstep || thirdstep modal
export const updateShipModalAction = (id, datatosend) => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({
      type: UPDATE_MODAL_SHIP_CLIENT_REQUEST,
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
      `/api/ship/updatecurrentship`,
      { id, datatosend },
      config,
    )
    dispatch({ type: UPDATE_MODAL_SHIP_CLIENT_SUCCESS, payload: data.update })
  } catch (error) {
    dispatch({
      type: UPDATE_MODAL_SHIP_CLIENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
