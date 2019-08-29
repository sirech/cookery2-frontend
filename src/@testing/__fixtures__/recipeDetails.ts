import { Recipe } from 'recipe-details/types'

const recipe = (): Recipe => ({
  id: 1,
  name: 'Pasta Carbonara',
  servings: 2,
  duration: 10,
  ingredients: [
    { name: 'egg', quantity: 2, unit: 'unit' },
    { name: 'pasta', quantity: 300, unit: 'gr' },
    { name: 'guanciale', quantity: 150, unit: 'gr' }
  ],
  steps: [
    { description: 'boil the pasta', duration: 5 },
    { description: 'fry the guanciale', duration: 5 }
  ]
})

export default recipe
