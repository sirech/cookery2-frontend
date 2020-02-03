import { right } from 'either'

export const newRecipe = async () => {
  return Promise.resolve(right({ _brand: 'recipe-created', id: 1 }))
}
