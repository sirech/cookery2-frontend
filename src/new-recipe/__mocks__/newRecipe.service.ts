import { AxiosResponse } from 'axios'
import { RecipeCreated } from '../types'

export const newRecipe = async (): Promise<AxiosResponse<RecipeCreated>> => {
  return Promise.resolve({
    status: 201,
    statusText: 'OK',
    data: { id: 1 },
    headers: [],
    config: {}
  })
}
