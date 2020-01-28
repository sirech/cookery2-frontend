import { Recipe } from 'new-recipe/types'
import { recipe } from '@testing/__fixtures__'

export const recipeDetails = async (): Promise<Recipe> =>
  Promise.resolve(recipe())
