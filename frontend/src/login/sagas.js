import { take, fork, cancel, call, put, cancelled, takeLatest } from 'redux-saga/effects'

// We'll use this function to redirect to different routes based on cases
import { browserHistory } from 'react-router'

// Helper for api errors
import { handleApiErrors } from '../lib/api-errors'

// Our login constants
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants'

// So that we can modify our Current_User piece of state
import {
  setUser,
  unsetUser,
} from '../current_user/actions'

import {
  USER_UNSET,
} from '../current_user/constants'

// const loginUrl = `${process.env.REACT_APP_API_URL}/api/Clients/login`
const loginUrl = 'http://localhost:8000/api/users/token'

function loginApi (email, password) {
  let data = { auth: { email: email, password: password } }
  const request = new Request('http://localhost:8000/api/user/token', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  })
  return fetch(request)
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error })
}

function* logoutQuit () {
  // dispatches the USER_UNSET action
  yield put(unsetUser())

  // remove our token
  localStorage.removeItem('token')
  localStorage.removeItem('email')

  // redirect to the /login screen
  browserHistory.push('/login')
}

function* loginFlow (email, password) {
  let token
  try {
    // try to call to our loginApi() function.  Redux Saga
    // will pause here until we either are successful or
    // receive an error
    token = yield call(loginApi, email, password)

    // inform Redux to set our client token, this is non blocking so...
    yield put(setUser(token, email))

    // .. also inform redux that our login was successful
    yield put({ type: LOGIN_SUCCESS })

    // set a stringified version of our token to localstorage on our domain
    localStorage.setItem('token', JSON.stringify(token))
    localStorage.setItem('email', email)

    // redirect them to WIDGETS!
    browserHistory.push('/dashboard')
  } catch (error) {
    // error? send it to redux
    yield put({ type: LOGIN_ERROR, error })
  } finally {
    // No matter what, if our `forked` `task` was cancelled
    // we will then just redirect them to login
    if (yield cancelled()) {
      browserHistory.push('/login')
    }
  }

  // return the token for health and wealth
  return token
}

// Our watcher (saga).  It will watch for many things.
export function* loginWatcher () {
  // Generators halt execution until their next step is ready/occurring
  // So it's not like this loop is firing in the background 1000/sec
  // Instead, it says, "okay, true === true", and hits the first step...
  while (true) {
    //
    // ... and in this first it sees a yield statement with `take` which
    // pauses the loop.  It will sit here and WAIT for this action.
    //
    // yield take(ACTION) just says, when our generator sees the ACTION
    // it will pull from that ACTION's payload that we send up, its
    // email and password.  ONLY when this happens will the loop move
    // forward...
    const { email, password } = yield take(LOGIN_REQUESTING)

    // ... and pass the email and password to our loginFlow() function.
    // The fork() method spins up another "process" that will deal with
    // handling the loginFlow's execution in the background!
    // Think, "fork another process".
    //
    // It also passes back to us, a reference to this forked task
    // which is stored in our const task here.  We can use this to manage
    // the task.
    //
    // However, fork() does not block our loop.  It's in the background
    // therefore as soon as our loop executes this it mores forward...
    const task = yield fork(loginFlow, email, password)

    // ... and begins looking for either USER_UNSET or LOGIN_ERROR!
    // That's right, it gets to here and stops and begins watching
    // for these tasks only.  Why would it watch for login any more?
    // During the life cycle of this generator, the user will login once
    // and all we need to watch for is either logging out, or a login
    // error.  The moment it does grab either of these though it will
    // once again move forward...
    const action = yield take([USER_UNSET, LOGIN_ERROR])

    // ... if, for whatever reason, we decide to logout during this
    // cancel the current action.  i.e. the user is being logged
    // in, they get impatient and start hammering the logout button.
    // this would result in the above statement seeing the USER_UNSET
    // action, and down here, knowing that we should cancel the
    // forked `task` that was trying to log them in.  It will do so
    // and move forward...
    if (action.type === USER_UNSET) yield cancel(task)

    // ... finally we'll just log them out.  This will unset the client
    // access token ... -> follow this back up to the top of the while loop
    yield call(logoutQuit)
  }
}


export function* logoutWatcher () {
  yield takeLatest(USER_UNSET, logout)
}

function* logout () {
  // remove our token
  localStorage.removeItem('token')
  localStorage.removeItem('email')

  // redirect to the /login screen
  browserHistory.push('/login')
}
