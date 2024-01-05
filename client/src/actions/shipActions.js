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
} from '../constants/shipConstants'

import axios from 'axios'

//create ship
export const shipCreateAction = (id, ship) => async (dispatch, getState) => {
  console.log(ship)
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
      `/api/ship/createship/${id}`,
      ship,
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

//get all ship
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
