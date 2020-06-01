import axios, { AxiosResponse } from 'axios'
import { Recipe } from 'new-recipe/types'

export const recipeDetails = async (id: number | string): Promise<Recipe> => {
  const response: AxiosResponse<Recipe> = await axios.get(`/rest/recipes/${id}`)
  return response.data
}
