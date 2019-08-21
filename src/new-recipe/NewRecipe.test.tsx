import React from 'react'

import { waitForElement } from '@testing-library/react'
import { fullRender } from '@testing'
import userEvent from '@testing-library/user-event'

import NewRecipe from './NewRecipe'

describe('NewRecipe', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = fullRender(<NewRecipe />)

    await waitForElement(() => getByTestId('new-recipe'))
  })

  it('fills the form', async () => {
    const { getByText, getByLabelText } = fullRender(<NewRecipe />)

    userEvent.type(getByLabelText('name'), 'Lasagna')
    userEvent.click(getByText('Create'))
  })
})
