import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import currentUser from './current_user/reducer'
import signup from './signup/reducer'


const IndexReducer = combineReducers({
  currentUser,
  signup,
  form,
})

export default IndexReducer