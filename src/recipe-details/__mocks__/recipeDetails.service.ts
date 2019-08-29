import { recipe } from '@testing/__fixtures__'
import { Recipe } from '../types'
import { AxiosResponse } from 'axios'

export const recipeDetails = async (): Promise<AxiosResponse<Recipe>> => {
  return Promise.resolve({
    status: 200,
    statusText: 'OK',
    data: recipe(),
    headers: [],
    config: {}
  })
}
