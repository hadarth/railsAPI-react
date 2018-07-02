import { USER_SET, USER_UNSET } from './constants'

export function setUser (token, email) {
  return {
    type: USER_SET,
    token,
    email,
  }
}

export function unsetUser () {
  return {
    type: USER_UNSET,
  }
}
