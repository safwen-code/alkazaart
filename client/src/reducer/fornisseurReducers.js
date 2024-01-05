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

export const fornisseurCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_FORNISSEUR_REQUEST:
      return { loading: true }
    case CREATE_FORNISSEUR_SUCCESS:
      return { loading: false, success: true, fornisseur: action.payload }
    case CREATE_FORNISSEUR_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const AllfornisseurReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_FORNISSEUR_REQUEST:
      return { loading: true }
    case ALL_FORNISSEUR_SUCCESS:
      return { loading: false, success: true, fornisseurs: action.payload }
    case ALL_FORNISSEUR_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const loginFornisseurReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_FORNISSEUR_REQUEST:
      return { loading: true }
    case LOGIN_FORNISSEUR_SUCCESS:
      return { loading: false, fornisseurinfo: action.payload }
    case LOGIN_FORNISSEUR_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
