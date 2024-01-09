import {
  ADD_UTILISATEUR_FAIL,
  ADD_UTILISATEUR_REQUEST,
  ADD_UTILISATEUR_SUCCESS,
  LIST_UTILISATEUR_REQUEST,
  LIST_UTILISATEUR_SUCCESS,
  LIST_UTILISATEUR_FAIL,
} from '../constants/utilisateurAction.js'

//add user reducers
export const utilisateurReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_UTILISATEUR_REQUEST:
      return { loading: true }
    case ADD_UTILISATEUR_SUCCESS:
      return { loading: false, createUser: action.payload }
    case ADD_UTILISATEUR_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

//all utilisateur
export const AllutilisateurReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_UTILISATEUR_REQUEST:
      return { loading: true }
    case LIST_UTILISATEUR_SUCCESS:
      return { loading: false, success: true, utilisateurs: action.payload }
    case LIST_UTILISATEUR_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
