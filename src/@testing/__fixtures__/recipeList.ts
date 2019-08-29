import { Recipe as RecipeType } from 'components/recipe/types'

const recipes = (): RecipeType[] => {
  return [
    { id: 1, name: 'Pasta Carbonara', servings: 2, duration: 10 },
    { id: 2, name: 'Lentejas', servings: 4, duration: 60 },
    { id: 3, name: 'Pollo al grill', servings: 2, duration: 120 }
  ]
}

export default recipes
