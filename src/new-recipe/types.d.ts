export interface StepForm {
  description: string
  duration: number
}

export interface RecipeForm {
  name: string
  steps: StepForm[]
}
