import axios, { AxiosResponse } from 'axios'
import { Recipe } from 'components/recipe/types'

export const recipeList = async (): Promise<AxiosResponse<Recipe[]>> => {
  return axios('/rest/recipes')
}
