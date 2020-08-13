import React from 'react';

import classes from './FullRecipe.css';

const fullRecipe = (props) => {
  const ingredients = props.ingredients.map((ing, i) => {
    return <li key={i}>{ing}</li>
  })

  const instructions = props.instructions.map((inst, j) => {
    return <li key={j}>{inst}</li>
  })

  return (
    <div className={classes.FullRecipe}>
      <h1>{props.title}</h1>
      <p>{props.time} {props.timeUnit}</p>
      <p>Serves {props.serves}</p>
      <p>{props.likeCount} likes {props.reviewCount} reviews</p>
      <ul>
        {ingredients}
      </ul>
      <ul>
        {instructions}
      </ul>
    </div>
  )
}

export default fullRecipe;