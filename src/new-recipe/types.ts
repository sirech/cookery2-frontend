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

export interface RecipeForm {
  name: string
  servings: number
  steps: Step[]
  ingredients: Ingredient[]
}
