import { RecipeCreated } from '../types'

export const newRecipe = async (): Promise<RecipeCreated> => {
  return Promise.resolve({ id: 1 })
}
