import { RecipeForm, RecipeCreated } from './types'
import { post } from 'rest'

export const newRecipe = async (form: RecipeForm): Promise<RecipeCreated> => {
  return (await post('/rest/recipes', form)).data
}
