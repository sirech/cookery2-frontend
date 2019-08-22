export interface StepForm {
  description: string
  duration: number
}

export const ingredientList = ['ml', 'gr', 'pinch'] as const
type IngredientUnit = typeof ingredientList[number]

export interface Option {
  value: string
  label: string
}

export interface IngredientForm {
  name: string
  quantity: number
  unit: IngredientUnit
}

export interface RecipeForm {
  name: string
  servings: number
  steps: StepForm[]
  ingredients: IngredientForm[]
}
