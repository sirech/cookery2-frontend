import axios, { AxiosResponse } from 'axios'
import { Recipe } from 'components/recipe/types'

export const recipeList = async (): Promise<Recipe[]> => {
  const response: AxiosResponse<Recipe[]> = await axios.get('/rest/recipes', {
    headers: {
      Accept: 'application/json',
    },
  })
  return response.data
}
