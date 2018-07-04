import {
  EVENTS_REQUESTING,
} from './constants'

// In order to perform an action of type EVENTS_REQUESTING
// we need an email and password
const eventsRequest = function eventsRequest () {
  return {
    type: EVENTS_REQUESTING,
  }
}

// Since it's the only one here
export default eventsRequest