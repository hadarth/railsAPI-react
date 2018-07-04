import { take, fork, cancel, call, put, cancelled, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux';
import { handleApiErrors } from '../lib/api-errors'

import {
  EVENTS_REQUESTING,
  EVENTS_SUCCESS,
  EVENTS_ERROR,
} from './constants'

import {
  eventsRequest,
} from './actions'


function eventsApi () {
  const token = localStorage.getItem('token')
  const request = new Request('http://localhost:8000/api/events/', {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  })
  request.headers.set('Authorization', `Bearer ${JSON.parse(token).jwt}`);
  return fetch(request)
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json )
    .catch((error) => { throw error })
}


function* eventsFlow () {
  let events
  try {
    events = yield call(eventsApi)
    yield put({ type: EVENTS_SUCCESS, data: { events }})
  } catch (error) {
    yield put({ type: EVENTS_ERROR, error })
  }
  return events
}

export function* eventsWatcher () {
  yield takeLatest(EVENTS_REQUESTING, eventsFlow)
}
