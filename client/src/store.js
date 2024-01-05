import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { loginReducer } from './reducer/userReducers'
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

import { AlertReducer } from './reducer/AlertReducers'
const reducer = combineReducers({
  alertThing: AlertReducer,
  userLogin: loginReducer,
  shipCreate: shipCreateReducer,
  shipList: shipListReducer,
  shipNbr: shipNbrReducer,
  fornisseurCreate: fornisseurCreateReducer,
  fornisseurList: AllfornisseurReducer,
  fornisseurLogin: loginFornisseurReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)
export default store
