import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import currentUser from './current_user/reducer'
import signup from './signup/reducer'
import login from './login/reducer'
import dashboard from './dashboard/reducer'


const IndexReducer = combineReducers({
  login,
  currentUser,
  signup,
  dashboard,
  form,
})

export default IndexReducer