import { AxiosResponse } from 'axios'
import { Recipe } from './types'
import axios from 'rest'

export const recipeDetails = async (
  id: number | string
): Promise<AxiosResponse<Recipe>> => {
  const url = `/recipes/${id}`
  const method = 'GET'

  return axios(url, { method })
}
