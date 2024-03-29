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

export const clientCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CLIENT_REQUEST:
      return { loading: true }
    case CREATE_CLIENT_SUCCESS:
      return { loading: false, success: true, client: action.payload }
    case CREATE_CLIENT_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const AllclientReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_CLIENT_REQUEST:
      return { loading: true }
    case ALL_CLIENT_SUCCESS:
      return { loading: false, success: true, clients: action.payload }
    case ALL_CLIENT_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const loginClientReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_CLIENT_REQUEST:
      return { loading: true }
    case LOGIN_CLIENT_SUCCESS:
      return { loading: false, clientinfo: action.payload }
    case LOGIN_CLIENT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const myshipsReducer = (state = {}, action) => {
  switch (action.type) {
    case MY_SHIPS_REQUEST:
      return { loading: true }
    case MY_SHIPS_SUCCESS:
      return { loading: false, success: true, myships: action.payload }
    case MY_SHIPS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const shipbyidClientReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SHIPID_REQUEST:
      return { loading: true }
    case GET_SHIPID_SUCCESS:
      return { loading: false, success: true, shipbyid: action.payload }
    case GET_SHIPID_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

//update second step || third step Modal
export const updateStepClientReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_MODAL_SHIP_CLIENT_REQUEST:
      return { loading: true }
    case UPDATE_MODAL_SHIP_CLIENT_SUCCESS:
      return { loading: false, success: true, ...action.payload }
    case UPDATE_MODAL_SHIP_CLIENT_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
