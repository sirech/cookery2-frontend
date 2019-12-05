import axios, { AxiosResponse } from 'axios'
import { Recipe } from './types'

export const recipeDetails = async (
  id: number | string
): Promise<AxiosResponse<Recipe>> => {
  return axios.get(`/rest/recipes/${id}`)
}
