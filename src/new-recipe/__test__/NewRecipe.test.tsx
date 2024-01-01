import React from 'react'
import { Route } from 'react-router'

import { Routes } from 'react-router-dom'
import NewRecipe from '../NewRecipe'

import { screen, render } from '@testing'

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    getAccessTokenSilently: () => '',
  }),
}))
jest.mock('../newRecipe.service')

const newRecipe = () =>
  render(
    <Routes>
      <Route path="/recipes/new" element={<NewRecipe />} />
      <Route path="/recipes/:id" element={<>DONE!</>} />
    </Routes>,
    {
      route: '/recipes/new',
    },
  )

describe('NewRecipe', () => {
  it('renders without crashing', async () => {
    newRecipe()
    await screen.findByTestId('new-recipe')
  })

  it('fills the form', async () => {
    const { user } = newRecipe()

    await user.type(screen.getByLabelText('name'), 'Lasagna')
    await user.type(screen.getByLabelText('servings'), '3')

    await user.type(screen.getByLabelText('description'), 'Shake it shake it')
    await user.type(screen.getByLabelText('duration'), '10')

    await user.type(screen.getByLabelText('ingredient'), 'Salt')
    await user.type(screen.getByLabelText('quantity'), '10')

    await user.click(screen.getByText('Create'))
    await user.click(screen.getByText('DONE!'))
  })
})
