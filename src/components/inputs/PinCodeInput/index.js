import React from 'react'
import styles from './index.module.scss'

export default function PinInput(props) {
  return (
<div className={styles.pinCode}>
	  <input type="number" maxLength="1" autoFocus onChange={props.onChange(0)}/>
    <input type="number" maxLength="1" onChange={props.onChange(1)}/>
	  <input type="number" maxLength="1" onChange={props.onChange(2)}/>
    <input type="number" maxLength="1" onChange={props.onChange(3)}/>
 </div>
  )
}
