import React from 'react';

import classes from './IndividualRecipe.css';
import cacioPepeImg from '../../../../assets/cacioPepe.jpg';

const individualRecipe = (props) => {
  return (
    <div className={classes.IndividualRecipe}>
      <div className={classes.Info}>
        <h4>{props.title}</h4>
        <p>{props.time} {props.timeUnit}</p>
        <p>Serves {props.serves}</p>
        <p>{props.likeCount} likes {props.reviewCount} reviews</p>
      </div>
      <div className={classes.Picture}>
        <img src={cacioPepeImg} alt='cacioPepe' />
      </div>
    </div>
  )
}

export default individualRecipe;