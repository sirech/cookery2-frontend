import { RecipeCreated } from '../types'
import { Either, right } from 'either'
import { NetworkError } from 'rest/types'

export const newRecipe = async (): Promise<
  Either<NetworkError, RecipeCreated>
> => {
  return Promise.resolve(right({ _brand: 'recipe-created', id: 1 }))
}
