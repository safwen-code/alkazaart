import {
  SHIP_CREATE_FAIL,
  SHIP_CREATE_SUCCESS,
  SHIP_CREATE_REQUEST,
  All_SHIP_REQUEST,
  All_SHIP_SUCCESS,
  All_SHIP_FAIL,
  NBR_SHIP_REQUEST,
  NBR_SHIP_SUCCESS,
  NBR_SHIP_FAIL,
  GET_SHIP_REQUEST,
  GET_SHIP_SUCCESS,
  GET_SHIP_FAIL,
  ADD_SHIP_FIRSTSTEP_FAIL,
  ADD_SHIP_FIRSTSTEP_REQUEST,
  ADD_SHIP_FIRSTSTEP_SUCCESS,
} from '../constants/shipConstants'

import axios from 'axios'

//create ship
export const shipCreateAction = (id, ship) => async (dispatch, getState) => {
  //console.log(ship)

  try {
    dispatch({
      type: SHIP_CREATE_REQUEST,
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
      `/api/ship/createship`,
      { ship, id },
      config,
    )
    dispatch({ type: SHIP_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: SHIP_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//get all ship
export const shipListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: All_SHIP_REQUEST,
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

    const { data } = await axios.get(`/api/ship/allship`, config)
    dispatch({ type: All_SHIP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: All_SHIP_FAIL,
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
      type: NBR_SHIP_REQUEST,
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

    const { data } = await axios.get(`/api/ship/nbrship`, config)
    dispatch({ type: NBR_SHIP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: NBR_SHIP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//get ship by id
export const getshipAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_SHIP_REQUEST,
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

    const { data } = await axios.get(`/api/ship/getship/${id}`, config)
    dispatch({ type: GET_SHIP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: GET_SHIP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//create ship firststep
export const firstshipAction = (id, firststep) => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({
      type: ADD_SHIP_FIRSTSTEP_REQUEST,
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
      `/api/ship/addfirststep`,
      { id, firststep },
      config,
    )
    dispatch({ type: ADD_SHIP_FIRSTSTEP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ADD_SHIP_FIRSTSTEP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
