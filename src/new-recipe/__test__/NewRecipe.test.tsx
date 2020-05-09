import React from 'react'
import { Route } from 'react-router'

import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import NewRecipe from '../NewRecipe'

import { fullRender } from '@testing'

jest.mock('../newRecipe.service')

describe('NewRecipe', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = fullRender(<Route component={NewRecipe} />)

    await waitFor(() => getByTestId('new-recipe'))
  })

  it('fills the form', async () => {
    const { getByText, getByLabelText, history } = fullRender(
      <Route component={NewRecipe} />,
      {
        route: '/recipes/new',
      }
    )

    userEvent.type(getByLabelText('name'), 'Lasagna')
    userEvent.type(getByLabelText('servings'), '3')

    userEvent.type(getByLabelText('description'), 'Shake it shake it')
    userEvent.type(getByLabelText('duration'), '10')

    userEvent.type(getByLabelText('ingredient'), 'Salt')
    userEvent.type(getByLabelText('quantity'), '10')

    userEvent.click(getByText('Create'))

    await waitFor(() => expect(history.location.pathname).toEqual('/recipes/1'))
  })
})
