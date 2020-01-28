import axios from 'axios'
import { Recipe } from './types'

export const recipeDetails = async (id: number | string): Promise<Recipe> => {
  return (await axios.get(`/rest/recipes/${id}`)).data
}
