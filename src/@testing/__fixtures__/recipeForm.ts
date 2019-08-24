import { RecipeForm } from 'new-recipe/types'

const recipeForm = (): RecipeForm => ({
  name: 'carbonara',
  servings: 2,
  steps: [
    { description: 'cook the pasta', duration: 15 },
    { description: 'fry the bacon', duration: 5 }
  ],
  ingredients: [
    { name: 'pasta', quantity: 300, unit: 'gr' },
    { name: 'guanciale', quantity: 150, unit: 'gr' }
  ]
})

export default recipeForm
