import { OPEN_DRAWER, CLOSE_DRAWER } from './constants'

const initialSate = {
  drawer: {open: false},
}

const reducer = function clientReducer (state = initialSate, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        drawer: {open: true}
      }

    case CLOSE_DRAWER:
      return {
        drawer: {open: false}
      }

    default:
      return state
  }
}

export default reducer
