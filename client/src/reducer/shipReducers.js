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

//create sheep
export const shipCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SHIP_CREATE_REQUEST:
      return { loading: true }
    case SHIP_CREATE_SUCCESS:
      return { loading: false, success: true, ship: action.payload }
    case SHIP_CREATE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

//All sheeps
export const shipListReducer = (state = {}, action) => {
  switch (action.type) {
    case All_SHIP_REQUEST:
      return { loading: true }
    case All_SHIP_SUCCESS:
      return { loading: false, success: true, ships: action.payload.ships }
    case All_SHIP_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

//nbr of sheep
export const shipNbrReducer = (state = {}, action) => {
  switch (action.type) {
    case NBR_SHIP_REQUEST:
      return { loading: true }
    case NBR_SHIP_SUCCESS:
      return { loading: false, nbrships: action.payload }
    case NBR_SHIP_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
