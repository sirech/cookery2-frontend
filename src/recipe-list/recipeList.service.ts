import { AxiosResponse } from 'axios'
import axios from 'rest'
import { Recipe } from 'components/recipe/types'

export const recipeList = async (): Promise<AxiosResponse<Recipe[]>> => {
  const url = '/recipes'
  const method = 'GET'

  return axios(url, { method })
}
