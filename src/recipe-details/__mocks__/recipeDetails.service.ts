import { AxiosResponse } from 'axios'
import { Recipe } from '../types'
import { recipe } from '@testing/__fixtures__'

export const recipeDetails = async (): Promise<AxiosResponse<Recipe>> => {
  return Promise.resolve({
    status: 200,
    statusText: 'OK',
    data: recipe(),
    headers: [],
    config: {}
  })
}
