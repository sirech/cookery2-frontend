import React from 'react'

import { waitForElement } from '@testing-library/react'
import Recipe from './Recipe'
import { recipe } from '@testing/__fixtures__'

import { fullRender } from '@testing'

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
