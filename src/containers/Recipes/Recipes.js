import React from 'react';

import RecipeList from './RecipeList/RecipeList';
import Aux from '../../components/hoc/Aux/Aux';

const recipes = () => {
  return (
    <Aux>
      <RecipeList />
    </Aux>
  )
}

export default recipes;