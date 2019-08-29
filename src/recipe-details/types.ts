import { Recipe as RecipeBase } from 'components/recipe/types'
import { Ingredient, Step } from 'new-recipe/types'

export type Recipe = RecipeBase & { ingredients: Ingredient[]; steps: Step[] }
