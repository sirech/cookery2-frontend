import React from 'react'
import { Route } from 'react-router'

import NewRecipe from '../NewRecipe'

import { screen, waitFor, userEvent, render } from '@testing'

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    getAccessTokenSilently: () => '',
  }),
}))
jest.mock('../newRecipe.service')

describe('NewRecipe', () => {
  it('renders without crashing', async () => {
    render(<Route component={NewRecipe} />)

    await screen.findByTestId('new-recipe')
  })

  it('fills the form', async () => {
    const { history } = render(<Route component={NewRecipe} />, {
      route: '/recipes/new',
    })

    userEvent.type(screen.getByLabelText('name'), 'Lasagna')
    userEvent.type(screen.getByLabelText('servings'), '3')

    userEvent.type(screen.getByLabelText('description'), 'Shake it shake it')
    userEvent.type(screen.getByLabelText('duration'), '10')

    userEvent.type(screen.getByLabelText('ingredient'), 'Salt')
    userEvent.type(screen.getByLabelText('quantity'), '10')

    userEvent.click(screen.getByText('Create'))

    await waitFor(() => expect(history.location.pathname).toEqual('/recipes/1'))
  })
})
