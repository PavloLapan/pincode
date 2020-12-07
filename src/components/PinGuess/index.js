import React, { useCallback, useEffect } from 'react'
import PinCodeInput from 'components/inputs/PinCodeInput'
import PinCodeDots from 'components/PinCodeDots'
import actions from 'constants/actions'
import { connect } from 'react-redux'

function PinGuess(props) {
    // eslint-disable-next-line react/prop-types
  const { dispatch } = props
    console.log(props)
    // eslint-disable-next-line react/prop-types
  const { dotsGuessStatus, pin } = props.pincode
  useEffect(() => {
    dispatch({type: actions.GENERATE_PIN })
  }, [])
  const onChange = useCallback(
    (index) => (event) => dispatch({
      type: actions.CHANGE_PIN,
      payload: { value: event.target.value, index }
    }),
    [dispatch]
  )

  return (
    <div>
      <PinCodeInput pin={pin} onChange={onChange}/> 
      <PinCodeDots dotsGuessStatus={dotsGuessStatus}/>
    </div>
  )
}

export default connect((state) => ({ pincode: state.pincode }))(PinGuess)
