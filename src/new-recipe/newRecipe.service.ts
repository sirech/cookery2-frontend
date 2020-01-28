import { RecipeForm, RecipeCreated } from './types'
import { post } from 'rest'

export const newRecipe = async (form: RecipeForm): Promise<RecipeCreated> => {
  const { data } = await post('/rest/recipes', form)
  return { _brand: 'recipe-created', ...data }
}
