import React from 'react'

import App from './App'
import { screen, render } from '@testing'

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
    render(<App />)

    await screen.findByTestId('app')
  })

  it('renders new recipe form', async () => {
    render(<App />, { route: '/recipes/new' })

    await screen.findByTestId('new-recipe')
  })

  it('renders a recipe list', async () => {
    const { user } = render(<App />, {
      route: '/recipes',
    })

    // Navigate to list of recipes
    await screen.findByTestId('recipe-list')

    // Select one recipe
    await screen.findByText('Pasta Carbonara')
    await user.click(screen.getAllByText('DETAILS')[0])
    await screen.findByText('Steps')
    await screen.findByText('Ingredients'), await screen.findByText('egg')

    // Go back
    await user.click(await screen.findByText('Back'))
    await screen.findByTestId('recipe-list')
  })

  it('renders recipe details', async () => {
    render(<App />, { route: '/recipes/1' })

    await screen.findByTestId('recipe-details')
  })

  it('redirects to recipes list', async () => {
    render(<App />, { route: '/' })

    await screen.findByTestId('recipe-list')
  })
})
