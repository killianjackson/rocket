import React from 'react';

import RecipeList from './RecipeList/RecipeList';
import FullRecipe from './FullRecipe/FullRecipe';
import classes from './Recipes.css';
import Aux from '../../components/hoc/Aux/Aux';

const recipe = {
  title: 'Cacio e Pepe',
  time: '30',
  timeUnit: 'minutes',
  serves: '4',
  likeCount: 1000,
  reviewCount: 500,
  ingredients: [
    '8 ounces pasta',
    '3 tablespoons butter',
    '1 teaspoon freshly-cracked coarse black pepper',
    '2 ounces (about 1 cup) freshly-grated* Pecorino or Parmesan cheese',
  ],
  instructions: [
    '1. Cook the pasta.  In a large stockpot of generously-salted water, boil your pasta according to package instructions until it just barely al dente.  (Try to avoid overcooking the pasta.)',
    '2. Grate the cheese.  While the pasta water comes to a boil, finely-grate the cheese by hand.',
    '3. Reserve some of the starchy pasta water.  Once the pasta is about 1 minute away from being al dente, carefully scoop out 2 cups of the starchy boiling pasta water and transfer the water into a separate heat-proof container.  Set aside.',
    '4. Drain the pasta.  Drain the pasta using a colander.  Then transfer the pasta back to the hot stockpot, placed off of the hot burner.',
    '5. Add the butter, starchy water, cheese and black pepper.  Add in the diced butter and 1 cup of the starchy pasta water and toss quickly to combine.  Add in the cheese and black pepper and quickly toss to combine. Continue to gradually add in extra starchy pasta water, as needed, until the cheese has completely melted and turned into a silky sauce that coats the pasta evenly.',
    '6. Serve.  Dish up the hot pasta and serve immediately, garnished with extra cheese and black pepper if desired.',
  ]
}

const recipes = () => {
  return (
    <Aux>
      <div className={classes.RecipeListContainer}>
        <RecipeList />
      </div>
      <div className={classes.FullRecipeContainer}>
        <FullRecipe
          title={recipe.title}
          time={recipe.time}
          timeUnit={recipe.timeUnit}
          serves={recipe.serves}
          likeCount={recipe.likeCount}
          reviewCount={recipe.reviewCount}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}/>
      </div>
    </Aux>
  )
}

export default recipes;