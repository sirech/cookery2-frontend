import React from 'react'

import { recipe } from '@testing/__fixtures__'

import { waitForElement } from '@testing-library/react'
import { fullRender } from '@testing'

import Recipe from './Recipe'

describe('Recipe', () => {
  it('renders the actions', async () => {
    const { getByText } = fullRender(<Recipe recipe={recipe()} showActions />)

    await waitForElement(() => getByText('DETAILS'))
  })

  it('does not render actions', async () => {
    const { queryByText } = fullRender(
      <Recipe recipe={recipe()} showActions={false} />
    )

    expect(queryByText('DETAILS')).toBeNull()
  })
})
