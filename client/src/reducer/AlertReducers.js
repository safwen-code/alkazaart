import { SHOW_ALERT, DENIED_ALERT } from '.././constants/alertConstants'

export const AlertReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { loading: false, alert: action.payload }
    case DENIED_ALERT: {
      return { state: {} }
    }
    default:
      return state
  }
}
