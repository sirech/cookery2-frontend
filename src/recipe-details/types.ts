import { RecipeForm } from 'new-recipe/types'

export type Recipe = RecipeForm & { id: number; duration: number }
