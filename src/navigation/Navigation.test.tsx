import React from 'react'

import { waitForElement } from '@testing-library/react'
import { fullRender } from '@testing'

import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = fullRender(<Navigation />)

    await waitForElement(() => getByTestId('navigation'))
  })
})
