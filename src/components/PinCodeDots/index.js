import React from 'react'
import styles from './index.module.scss'
import { GoPrimitiveDot } from 'react-icons/go'

function getDotColor(status) {
  return status ? 'white' : 'black'
}
export default function PinCodeDots(props) {
    // eslint-disable-next-line react/prop-types
  const { dotsGuessStatus } = props

  return (
    <div className={styles.container}>
      <GoPrimitiveDot className={styles.dot} color={getDotColor(dotsGuessStatus[0])}/>
      <GoPrimitiveDot className={styles.dot} color={getDotColor(dotsGuessStatus[1])}/>
      <GoPrimitiveDot className={styles.dot} color={getDotColor(dotsGuessStatus[2])}/>
      <GoPrimitiveDot className={styles.dot} color={getDotColor(dotsGuessStatus[3])}/>
    </div>
  )
}
