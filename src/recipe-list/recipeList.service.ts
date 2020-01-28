import axios from 'axios'
import { Recipe } from 'components/recipe/types'

export const recipeList = async (): Promise<Recipe[]> => {
  const response = await axios('/rest/recipes')
  return response.data
}
