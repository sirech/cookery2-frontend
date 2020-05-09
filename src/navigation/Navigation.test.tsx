import React from 'react'

import { screen, waitFor } from '@testing-library/react'
import Navigation from './Navigation'
import { fullRender } from '@testing'

describe('Navigation', () => {
  it('renders without crashing', async () => {
    fullRender(<Navigation />)
    await waitFor(() => screen.getByTestId('navigation'))
  })
})
