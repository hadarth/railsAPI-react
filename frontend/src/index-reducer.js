import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import currentUser from './current_user/reducer'
import signup from './signup/reducer'
import login from './login/reducer'
import dashboard from './dashboard/reducer'
import events from './events/reducer'

import { routerReducer as router } from 'react-router-redux';


const IndexReducer = combineReducers({
  login,
  currentUser,
  signup,
  dashboard,
  form,
  events,
  router,
})

export default IndexReducer