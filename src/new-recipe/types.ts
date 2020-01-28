import { Recipe as RecipeBase } from 'components/recipe/types'

export interface Step {
  description: string
  duration: number
}

export const ingredientList = ['ml', 'gr', 'pinch', 'unit'] as const
type IngredientUnit = typeof ingredientList[number]

export interface Option {
  value: string
  label: string
}

export interface Ingredient {
  name: string
  quantity: number
  unit: IngredientUnit
}

interface FullRecipe extends RecipeBase {
  ingredients: Ingredient[]
  steps: Step[]
}

export type RecipeForm = Omit<FullRecipe, 'id' | 'duration'>
export type Recipe = Readonly<FullRecipe>

export interface RecipeCreated {
  _brand: 'recipe-created'
  id: number
}
