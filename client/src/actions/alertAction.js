import { SHOW_ALERT } from '../constants/alertConstants'

export const alertaction = (message) => async (dispatch) => {
  dispatch({ type: SHOW_ALERT, payload: message })
}
