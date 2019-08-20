import React from 'react'
import { fullRender } from '@testing'
import { waitForElement } from '@testing-library/react'

import App from './App'

it('renders without crashing', async () => {
  const { getByTestId } = fullRender(<App />)

  await waitForElement(() => getByTestId('app'))
})
