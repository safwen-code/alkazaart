import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { loginReducer, logoutReducer } from './reducer/userReducers'
import {
  shipCreateReducer,
  shipListReducer,
  shipNbrReducer,
} from './reducer/shipReducers'
import {
  fornisseurCreateReducer,
  AllfornisseurReducer,
  loginFornisseurReducer,
} from './reducer/fornisseurReducers'

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
  fornisseurCreate: fornisseurCreateReducer,
  fornisseurList: AllfornisseurReducer,
  fornisseurLogin: loginFornisseurReducer,
  utilisateurCreate: utilisateurReducer,
  utilisateurList: AllutilisateurReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)
export default store
