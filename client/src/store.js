import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  addship,
  loginReducer,
  logoutReducer,
  step1Reducer,
  step2Reducer,
  clientshipNbrReducer,
  sendnotifiction,
  listnotification,
} from './reducer/userReducers'
import {
  shipCreateReducer,
  shipListReducer,
  shipNbrReducer,
  shipbyidReducer,
  addShippFirststepReducer,
  addShippSecondstepReducer,
  updateStepReducer,
} from './reducer/shipReducers'
import {
  clientCreateReducer,
  AllclientReducer,
  loginClientReducer,
  myshipsReducer,
  shipbyidClientReducer,
  updateStepClientReducer,
} from './reducer/clientReducers'

import {
  utilisateurReducer,
  AllutilisateurReducer,
} from './reducer/utilisateurReducers'

import { AlertReducer } from './reducer/AlertReducers'
const reducer = combineReducers({
  alertThing: AlertReducer,
  /******** */
  userLogin: loginReducer,
  userLogout: logoutReducer,

  /**** */
  shipCreate: shipCreateReducer,
  shipList: shipListReducer,
  shipNbr: shipNbrReducer,
  shipbyidReducer,
  addShipStep1: addShippFirststepReducer,
  addShipStep2: addShippSecondstepReducer,
  updateStep: updateStepReducer,
  sendnotifiction,
  listnotification,
  /**** */
  clientCreate: clientCreateReducer,
  clientList: AllclientReducer,
  clientLogin: loginClientReducer,
  clientShips: myshipsReducer,
  shipbyidClientReducer,
  addCship: addship,
  addFCship: step1Reducer,
  addSCship: step2Reducer,
  nbrshipclient: clientshipNbrReducer,
  updateStepClient: updateStepClientReducer,
  /*** */
  utilisateurCreate: utilisateurReducer,
  utilisateurList: AllutilisateurReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)
export default store
