import { recipes } from '@testing/__fixtures__'
import { Recipe } from 'components/recipe/types'
import { AxiosResponse } from 'axios'

export const recipeList = async (): Promise<AxiosResponse<Recipe[]>> => {
  return Promise.resolve({
    status: 200,
    statusText: 'OK',
    data: recipes(),
    headers: [],
    config: {}
  })
}
