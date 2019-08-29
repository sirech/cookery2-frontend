import { AxiosResponse } from 'axios'
import { recipes } from '@testing/__fixtures__'
import { Recipe } from 'components/recipe/types'

export const recipeList = async (): Promise<AxiosResponse<Recipe[]>> => {
  return Promise.resolve({
    status: 200,
    statusText: 'OK',
    data: recipes(),
    headers: [],
    config: {}
  })
}
