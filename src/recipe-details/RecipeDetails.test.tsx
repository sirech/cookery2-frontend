import React from 'react'
import { Route } from 'react-router-dom'

import { screen, waitFor } from '@testing-library/react'
import RecipeDetails from './RecipeDetails'
import { fullRender } from '@testing'

jest.mock('recipe-details/recipeDetails.service')

describe('RecipeDetails', () => {
  it('renders correctly', async () => {
    fullRender(<Route component={RecipeDetails} />, {
      route: '/recipes/1',
    })

    await waitFor(() => screen.getByText('Pasta Carbonara'))

    await waitFor(() => screen.getByText('Ingredients'))
    await waitFor(() => screen.getByText('pasta'))
    await waitFor(() => screen.getByText('egg'))
    await waitFor(() => screen.getByText('guanciale'))

    await waitFor(() => screen.getByText('Steps'))
    await waitFor(() => screen.getByText('boil the pasta'))
    await waitFor(() => screen.getByText('fry the guanciale'))
  })
})
