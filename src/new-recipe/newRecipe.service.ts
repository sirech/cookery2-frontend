import axios from 'rest'
import { RecipeForm } from './types'
import { AxiosResponse } from 'axios'

export const newRecipe = async (form: RecipeForm): Promise<AxiosResponse> => {
  const url = '/recipes'
  const method = 'POST'
  const data = { ...form }

  return axios(url, { method, data })
}
