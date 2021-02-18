import classes from './AnswerItem.module.scss'
import React from 'react'

const AnswerItem = props => {
   return (
      <li className={classes.AnswerItem}>
         {props.answer.text}
      </li>
   )
}

export default AnswerItem