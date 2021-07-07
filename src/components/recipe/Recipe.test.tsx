import React from 'react'

import Recipe from './Recipe'
import { recipe } from '@testing/__fixtures__'

import { screen, render } from '@testing'

describe('Recipe', () => {
  it('renders the actions', async () => {
    render(<Recipe recipe={recipe()} showActions />)

    await screen.findByText('DETAILS')
  })

  it('does not render actions', () => {
    render(<Recipe recipe={recipe()} showActions={false} />)
    expect(screen.queryByText('DETAILS')).toBeNull()
  })
})
