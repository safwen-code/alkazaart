import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCESS,
} from '../constants/userConstant'
export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true }
    case LOGIN_SUCCESS:
      return { loading: false, userinfo: action.payload }
    case LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case LOGOUT_SUCESS:
      return {
        loading: false,
      }
    default:
      return state
  }
}
