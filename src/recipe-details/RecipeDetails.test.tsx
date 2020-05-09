import React from 'react'
import { Route } from 'react-router-dom'

import { waitFor } from '@testing-library/react'
import RecipeDetails from './RecipeDetails'
import { fullRender } from '@testing'

jest.mock('recipe-details/recipeDetails.service')

describe('RecipeDetails', () => {
  it('renders correctly', async () => {
    const { getByText } = fullRender(<Route component={RecipeDetails} />, {
      route: '/recipes/1',
    })

    await waitFor(() => getByText('Pasta Carbonara'))

    await waitFor(() => getByText('Ingredients'))
    await waitFor(() => getByText('pasta'))
    await waitFor(() => getByText('egg'))
    await waitFor(() => getByText('guanciale'))

    await waitFor(() => getByText('Steps'))
    await waitFor(() => getByText('boil the pasta'))
    await waitFor(() => getByText('fry the guanciale'))
  })
})
