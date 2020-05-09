import React from 'react'

import { waitFor } from '@testing-library/react'
import Navigation from './Navigation'
import { fullRender } from '@testing'

describe('Navigation', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = fullRender(<Navigation />)

    await waitFor(() => getByTestId('navigation'))
  })
})
