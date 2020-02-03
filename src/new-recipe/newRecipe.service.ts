import { RecipeForm, RecipeCreated } from './types'
import { post, safeRequest } from 'rest'

export const newRecipe = async (form: RecipeForm) =>
  safeRequest<RecipeCreated>(
    () => post('/rest/recipes', form),
    'recipe-created'
  )
