import { RecipeForm, RecipeCreated } from './types'
import { post, safeRequest } from 'rest'
import { Either } from 'either'
import { NetworkError } from 'rest/types'

export const newRecipe = async (
  form: RecipeForm
): Promise<Either<NetworkError, RecipeCreated>> =>
  safeRequest<RecipeCreated>(
    () => post('/rest/recipes', form),
    'recipe-created'
  )
