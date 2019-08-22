export interface StepForm {
  description: string
  duration: number
}

type IngredientUnit = 'ml' | 'gr' | 'pinch'

export interface IngredientForm {
  name: string
  quantity: number
  unit: IngredientUnit
}

export interface RecipeForm {
  name: string
  steps: StepForm[]
  ingredients: IngredientForm[]
}
