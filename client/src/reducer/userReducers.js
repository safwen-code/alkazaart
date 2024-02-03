import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCESS,
  CLIENT_ADDSHIP_FAIL,
  CLIENT_ADDSHIP_SUCESS,
  CLIENT_ADDSHIP_REQUEST,
  CLIENT_FIRSTSHIP_REQUEST,
  CLIENT_SECONDSHIP_REQUEST,
  CLIENT_SECONDSHIP_SUCESS,
  CLIENT_SECONDSHIP_FAIL,
  CLIENT_FIRSTSHIP_SUCESS,
  CLIENT_FIRSTSHIP_FAIL,
  NBR_CLIENTSHIP_REQUEST,
  NBR_CLIENTSHIP_SUCCESS,
  NBR_CLIENTSHIP_FAIL,
  SEND_NOTIFICATION,
  LIST_NOTIFICATION,
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

export const logoutReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGOUT_SUCESS:
      return {
        loading: false,
        userLogin: {},
        shipCreate: {},
        shipList: {},
        shipNbr: {},
        fornisseurCreate: {},
        utilisateurCreate: {},
        utilisateurList: {},
      }
    default:
      return state
  }
}

export const addship = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_ADDSHIP_REQUEST:
      return {
        loading: true,
      }
    case CLIENT_ADDSHIP_SUCESS:
      return {
        loading: false,
        ...action.payload,
      }
    case CLIENT_ADDSHIP_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const step1Reducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_FIRSTSHIP_REQUEST:
      return {
        loading: true,
      }
    case CLIENT_FIRSTSHIP_SUCESS:
      return {
        loading: false,
        ...action.payload,
      }
    case CLIENT_FIRSTSHIP_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const step2Reducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_SECONDSHIP_REQUEST:
      return {
        loading: true,
      }
    case CLIENT_SECONDSHIP_SUCESS:
      return {
        loading: false,
        ...action.payload,
      }
    case CLIENT_SECONDSHIP_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

//nbrs of sheep
export const clientshipNbrReducer = (state = {}, action) => {
  switch (action.type) {
    case NBR_CLIENTSHIP_REQUEST:
      return { loading: true }
    case NBR_CLIENTSHIP_SUCCESS:
      return { loading: false, nbrships: action.payload }
    case NBR_CLIENTSHIP_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

//send notif
export const sendnotifiction = (state = {}, action) => {
  switch (action.type) {
    case SEND_NOTIFICATION:
      return {
        notification: { ...action.payload },
      }

    default:
      return state
  }
}

//list notifs admin
export const listnotification = (state = {}, action) => {
  switch (action.type) {
    case LIST_NOTIFICATION:
      return {
        mynotification: { ...action.payload },
      }
    default:
      return state
  }
}
