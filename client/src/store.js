import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { loginReducer, logoutReducer } from './reducer/userReducers'
import {
  shipCreateReducer,
  shipListReducer,
  shipNbrReducer,
  shipbyidReducer,
} from './reducer/shipReducers'
import {
  clientCreateReducer,
  AllclientReducer,
  loginClientReducer,
  myshipsReducer,
} from './reducer/clientReducers'

import {
  utilisateurReducer,
  AllutilisateurReducer,
} from './reducer/utilisateurReducers'

import { AlertReducer } from './reducer/AlertReducers'
const reducer = combineReducers({
  alertThing: AlertReducer,
  userLogin: loginReducer,
  userLogout: logoutReducer,
  shipCreate: shipCreateReducer,
  shipList: shipListReducer,
  shipNbr: shipNbrReducer,
  shipbyidReducer,
  clientCreate: clientCreateReducer,
  clientList: AllclientReducer,
  clientLogin: loginClientReducer,
  clientShips: myshipsReducer,
  utilisateurCreate: utilisateurReducer,
  utilisateurList: AllutilisateurReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)
export default store
