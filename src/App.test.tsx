import React from 'react'
import userEvent from '@testing-library/user-event'

import { screen } from '@testing-library/react'
import App from './App'
import { fullRender } from '@testing'

jest.mock('@auth0/auth0-react', () => ({
  // eslint-disable-next-line react/display-name
  Auth0Provider: ({ children }: { children?: React.ReactNode }) => (
    <>{children}</>
  ),
  useAuth0: () => ({
    loginWithRedirect: jest.fn(),
    logout: jest.fn(),
    isAuthenticated: true,
    user: { name: 'user' },
  }),
}))

jest.mock('recipe-list/recipeList.service')
jest.mock('recipe-details/recipeDetails.service')

describe('App', () => {
  it('renders without crashing', async () => {
    fullRender(<App />)

    await screen.findByTestId('app')
  })

  it('renders new recipe form', async () => {
    fullRender(<App />, { route: '/recipes/new' })

    await screen.findByTestId('new-recipe')
  })

  it('renders a recipe list', async () => {
    fullRender(<App />, {
      route: '/recipes',
    })

    // Navigate to list of recipes
    await screen.findByTestId('recipe-list')

    // Select one recipe
    await screen.findByText('Pasta Carbonara')
    userEvent.click(screen.getAllByText('DETAILS')[0])
    await screen.findByText('Steps')
    await screen.findByText('Ingredients'), await screen.findByText('egg')

    // Go back
    userEvent.click(await screen.findByText('Back'))
    await screen.findByTestId('recipe-list')
  })

  it('renders recipe details', async () => {
    fullRender(<App />, { route: '/recipes/1' })

    await screen.findByTestId('recipe-details')
  })

  it('redirects to recipes list', async () => {
    fullRender(<App />, { route: '/' })

    await screen.findByTestId('recipe-list')
  })
})
