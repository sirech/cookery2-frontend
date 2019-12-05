import { AxiosResponse } from 'axios'
import { RecipeForm, RecipeCreated } from './types'
import { post } from 'rest'

export const newRecipe = async (
  form: RecipeForm
): Promise<AxiosResponse<RecipeCreated>> => {
  return post('/rest/recipes', form)
}
