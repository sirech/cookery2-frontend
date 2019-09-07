import { AxiosResponse } from 'axios'
import { RecipeForm, RecipeCreated } from './types'
import axios from 'rest'

export const newRecipe = async (
  form: RecipeForm
): Promise<AxiosResponse<RecipeCreated>> => {
  const url = '/recipes'
  const method = 'POST'
  const data = { ...form }

  return axios(url, { method, data })
}
