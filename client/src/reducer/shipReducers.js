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
  GET_SHIP_REQUEST,
  GET_SHIP_SUCCESS,
  GET_SHIP_FAIL,
  ADD_SHIP_FIRSTSTEP_FAIL,
  ADD_SHIP_FIRSTSTEP_SUCCESS,
  ADD_SHIP_FIRSTSTEP_REQUEST,
  ADD_SHIP_SECONDSTEP_REQUEST,
  ADD_SHIP_SECONDSTEP_SUCCESS,
  ADD_SHIP_SECONDSTEP_FAIL,
  UPDATE_MODAL_SHIP_REQUEST,
  UPDATE_MODAL_SHIP_SUCCESS,
  UPDATE_MODAL_SHIP_FAIL,
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

//nbrs of sheep
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

//get ship by id
export const shipbyidReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SHIP_REQUEST:
      return { loading: true }
    case GET_SHIP_SUCCESS:
      return { loading: false, ...action.payload }
    case GET_SHIP_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

// add ship first step
export const addShippFirststepReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SHIP_FIRSTSTEP_REQUEST:
      return { loading: true }
    case ADD_SHIP_FIRSTSTEP_SUCCESS:
      return { loading: false, success: true, shipfirststep: action.payload }
    case ADD_SHIP_FIRSTSTEP_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

//add ship second step
export const addShippSecondstepReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SHIP_SECONDSTEP_REQUEST:
      return { loading: true }
    case ADD_SHIP_SECONDSTEP_SUCCESS:
      return { loading: false, success: true, shipsecondstep: action.payload }
    case ADD_SHIP_SECONDSTEP_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

//update second step || third step Modal
export const updateStepReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_MODAL_SHIP_REQUEST:
      return { loading: true }
    case UPDATE_MODAL_SHIP_SUCCESS:
      return { loading: false, success: true, ...action.payload }
    case UPDATE_MODAL_SHIP_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
