import { recipes } from '@testing/__fixtures__'
import { Recipe } from 'components/recipe/types'

export const recipeList = async (): Promise<Recipe[]> => {
  return Promise.resolve(recipes())
}
