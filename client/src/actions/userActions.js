import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
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
