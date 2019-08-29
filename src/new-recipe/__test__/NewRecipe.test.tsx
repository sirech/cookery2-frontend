import React from 'react'

import { waitForElement, wait } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import NewRecipe from '../NewRecipe'

import { newRecipe } from '../newRecipe.service'
import { fullRender } from '@testing'
jest.mock('../newRecipe.service')

describe('NewRecipe', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = fullRender(<NewRecipe />)

    await waitForElement(() => getByTestId('new-recipe'))
  })

  it('fills the form', async () => {
    const { getByText, getByLabelText } = fullRender(<NewRecipe />)

    userEvent.type(getByLabelText('name'), 'Lasagna')
    userEvent.type(getByLabelText('servings'), '3')

    userEvent.type(getByLabelText('description'), 'Shake it shake it')
    userEvent.type(getByLabelText('duration'), '10')

    userEvent.type(getByLabelText('ingredient'), 'Salt')
    userEvent.type(getByLabelText('quantity'), '10')

    userEvent.click(getByText('Create'))

    await wait()

    expect(newRecipe).toHaveBeenCalled()
  })
})
