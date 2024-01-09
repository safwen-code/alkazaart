import {
  ADD_UTILISATEUR_FAIL,
  ADD_UTILISATEUR_SUCCESS,
  ADD_UTILISATEUR_REQUEST,
  LIST_UTILISATEUR_REQUEST,
  LIST_UTILISATEUR_SUCCESS,
  LIST_UTILISATEUR_FAIL,
} from '../constants/utilisateurAction'

import axios from 'axios'
export const addutilisateurAction = (utilisateur) => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({ type: ADD_UTILISATEUR_REQUEST })
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
      `/api/utilisateur/createutil`,
      utilisateur,
      config,
    )
    dispatch({ type: ADD_UTILISATEUR_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ADD_UTILISATEUR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const utilisateurListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIST_UTILISATEUR_REQUEST,
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

    const { data } = await axios.get('/api/utilisateur/allutilisateur', config)
    dispatch({ type: LIST_UTILISATEUR_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: LIST_UTILISATEUR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
