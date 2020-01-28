import { RecipeCreated } from '../types'

export const newRecipe = async (): Promise<RecipeCreated> => {
  return Promise.resolve({ _brand: 'recipe-created', id: 1 })
}
