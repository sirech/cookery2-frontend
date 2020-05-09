import React from 'react'

import { screen, waitFor } from '@testing-library/react'
import Recipe from './Recipe'
import { recipe } from '@testing/__fixtures__'

import { fullRender } from '@testing'

describe('Recipe', () => {
  it('renders the actions', async () => {
    fullRender(<Recipe recipe={recipe()} showActions />)

    await waitFor(() => screen.getByText('DETAILS'))
  })

  it('does not render actions', async () => {
    fullRender(<Recipe recipe={recipe()} showActions={false} />)

    expect(screen.queryByText('DETAILS')).toBeNull()
  })
})
