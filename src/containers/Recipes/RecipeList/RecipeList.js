import React from 'react';

import IndividualRecipe from './IndividualRecipe/IndividualRecipe';
import classes from './RecipeList.css';

const recipeList = () => {
  const info = {
    title: 'Cacio e Pepe',
    time: '30',
    timeUnit: 'minutes',
    serves: '4',
    likeCount: 1000,
    reviewCount: 500,
  }

  return (
    <div className={classes.RecipeList}>
      <IndividualRecipe
        title={info.title}
        time={info.time}
        timeUnit={info.timeUnit}
        serves={info.serves}
        likeCount={info.likeCount}
        reviewCount={info.reviewCount}/>
      <IndividualRecipe
        title={info.title}
        time={info.time}
        timeUnit={info.timeUnit}
        serves={info.serves}
        likeCount={info.likeCount}
        reviewCount={info.reviewCount}/>
      <IndividualRecipe
        title={info.title}
        time={info.time}
        timeUnit={info.timeUnit}
        serves={info.serves}
        likeCount={info.likeCount}
        reviewCount={info.reviewCount}/>
      <IndividualRecipe
        title={info.title}
        time={info.time}
        timeUnit={info.timeUnit}
        serves={info.serves}
        likeCount={info.likeCount}
        reviewCount={info.reviewCount}/>
      <IndividualRecipe
        title={info.title}
        time={info.time}
        timeUnit={info.timeUnit}
        serves={info.serves}
        likeCount={info.likeCount}
        reviewCount={info.reviewCount}/>
    </div>
  )
}

export default recipeList;