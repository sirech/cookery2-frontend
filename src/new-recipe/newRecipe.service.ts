import { AxiosResponse } from 'axios'
import { RecipeForm } from './types'
import axios from 'rest'

export const newRecipe = async (form: RecipeForm): Promise<AxiosResponse> => {
  const url = '/recipes'
  const method = 'POST'
  const data = { ...form }

  return axios(url, { method, data })
}
