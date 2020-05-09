import React from 'react'

import { screen } from '@testing-library/react'
import Navigation from './Navigation'
import { fullRender } from '@testing'

describe('Navigation', () => {
  it('renders without crashing', async () => {
    fullRender(<Navigation />)
    await screen.findByTestId('navigation')
  })
})
