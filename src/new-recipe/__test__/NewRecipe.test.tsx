import React from 'react'
import { Route } from 'react-router'

import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import NewRecipe from '../NewRecipe'

import { fullRender } from '@testing'

jest.mock('../newRecipe.service')

describe('NewRecipe', () => {
  it('renders without crashing', async () => {
    fullRender(<Route component={NewRecipe} />)

    await waitFor(() => screen.getByTestId('new-recipe'))
  })

  it('fills the form', async () => {
    const { history } = fullRender(<Route component={NewRecipe} />, {
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
