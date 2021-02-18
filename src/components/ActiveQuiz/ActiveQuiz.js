import classes from './ActiveQuiz.module.scss'
import React from 'react'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => {
   return (
      <div className={classes.ActiveQuiz}>
         <p className={classes.Question}>
            <span>
               <strong>1.</strong>&nbsp;
               как дела?
            </span>
            <small>2 из 4</small>
         </p>

         <AnswersList
            answers={props.answers}
         />
      </div>
   )
}

export default ActiveQuiz