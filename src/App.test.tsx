import React from 'react'
import userEvent from '@testing-library/user-event'

import { screen, waitFor } from '@testing-library/react'
import App from './App'
import { fullRender } from '@testing'

jest.mock('recipe-list/recipeList.service')
jest.mock('recipe-details/recipeDetails.service')

describe('App', () => {
  it('renders without crashing', async () => {
    fullRender(<App />)

    await waitFor(() => screen.getByTestId('app'))
  })

  it('renders new recipe form', async () => {
    fullRender(<App />, { route: '/recipes/new' })

    await waitFor(() => screen.getByTestId('new-recipe'))
  })

  it('renders a recipe list', async () => {
    fullRender(<App />, {
      route: '/recipes',
    })

    // Navigate to list of recipes
    await waitFor(() => screen.getByTestId('recipe-list'))

    // Select one recipe
    await waitFor(() => screen.getByText('Pasta Carbonara'))
    userEvent.click(screen.getAllByText('DETAILS')[0])
    await waitFor(() => [
      screen.getByText('Steps'),
      screen.getByText('Ingredients'),
    ])
    await waitFor(() => screen.getByText('egg'))

    // Go back
    userEvent.click(screen.getByText('Back'))
    await waitFor(() => screen.getByTestId('recipe-list'))
  })

  it('renders recipe details', async () => {
    fullRender(<App />, { route: '/recipes/1' })

    await waitFor(() => screen.getByTestId('recipe-details'))
  })

  it('redirects to recipes list', async () => {
    fullRender(<App />, { route: '/' })

    await waitFor(() => screen.getByTestId('recipe-list'))
  })
})
