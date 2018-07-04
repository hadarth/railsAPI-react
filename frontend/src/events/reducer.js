import {
  EVENTS_REQUESTING,
  EVENTS_SUCCESS,
  EVENTS_ERROR,
} from './constants'

const initialState = {
  requesting: false,
  successful: false,
  events: [],
  messages: [],
  errors: [],
}

const reducer = function eventsReducer (state = initialState, action) {
  switch (action.type) {
    case EVENTS_REQUESTING:
      return {
        requesting: true,
        successful: false,
        events: [],
        messages: [{ body: 'Requesting events from server...'}],
        errors: [],
      }

    case EVENTS_SUCCESS:
      return {
        events: action.data.events,
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
      }

    case EVENTS_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      }

    default:
      return state
  }
}

export default reducer
