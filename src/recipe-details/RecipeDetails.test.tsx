import React from 'react'
import { Route } from 'react-router-dom'

import { waitForElement } from '@testing-library/react'
import { fullRender } from '@testing'

jest.mock('recipe-details/recipeDetails.service')

import RecipeDetails from './RecipeDetails'

describe('RecipeDetails', () => {
  it('renders correctly', async () => {
    const { getByText } = fullRender(<Route component={RecipeDetails} />, {
      route: '/recipes/1'
    })

    await waitForElement(() => getByText('Pasta Carbonara'))

    await waitForElement(() => getByText('Ingredients'))
    await waitForElement(() => getByText('pasta'))
    await waitForElement(() => getByText('egg'))
    await waitForElement(() => getByText('guanciale'))
  })
})
