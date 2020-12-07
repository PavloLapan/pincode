import actions from 'constants/actions'

const initialState = {
  pin: [null, null, null, null],
  dotsGuessStatus: [false, false, false, false]
}

export default function pincode(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case actions.GENERATE_PIN: {
      return { ...state, pin: Array.from({length: 4}, () => Math.floor(Math.random() * 9)) }
    }
    case actions.RESET: {
      return initialState
    }
    case actions.CHANGE_PIN: {
      const digit = parseInt(payload.value)

      return {
        ...state,
        dotsGuessStatus: Object.assign([], state.dotsGuessStatus, {[payload.index]: digit === state.pin[payload.index]}),
      }
    }
    default:
      return state
  }
}
