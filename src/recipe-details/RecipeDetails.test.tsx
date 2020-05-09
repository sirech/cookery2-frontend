import React from 'react'
import { Route } from 'react-router-dom'

import { screen } from '@testing-library/react'
import RecipeDetails from './RecipeDetails'
import { fullRender } from '@testing'

jest.mock('recipe-details/recipeDetails.service')

describe('RecipeDetails', () => {
  it('renders correctly', async () => {
    fullRender(<Route component={RecipeDetails} />, {
      route: '/recipes/1',
    })

    await screen.findByText('Pasta Carbonara')

    await screen.findByText('Ingredients')
    await screen.findByText('pasta')
    await screen.findByText('egg')
    await screen.findByText('guanciale')

    await screen.findByText('Steps')
    await screen.findByText('boil the pasta')
    await screen.findByText('fry the guanciale')
  })
})
