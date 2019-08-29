import axios from 'rest'
import { Recipe } from './types'
import { AxiosResponse } from 'axios'

export const recipeDetails = async (
  id: number | string
): Promise<AxiosResponse<Recipe>> => {
  const url = `/recipes/${id}`
  const method = 'GET'

  return axios(url, { method })
}
