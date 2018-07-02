import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import currentUser from './current_user/reducer'
import signup from './signup/reducer'
import login from './login/reducer'


const IndexReducer = combineReducers({
  login,
  currentUser,
  signup,
  form,
})

export default IndexReducer