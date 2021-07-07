import React from 'react'

import Navigation from './Navigation'
import { screen, render } from '@testing'

describe('Navigation', () => {
  it('renders without crashing', async () => {
    render(<Navigation />)
    await screen.findByTestId('navigation')
  })
})
