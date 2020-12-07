const actions = [
  'GENERATE_PIN',
  'RESET',
  'CHANGE_PIN'
]

function createActions(actions) {
  return actions.reduce((acc, val) => {
    acc[val] = val
    return acc
  }, {})
}

export default createActions(actions)
