import React from 'react'

import { waitForElement } from '@testing-library/react'
import { fullRender } from '@testing'

import App from './App'

describe('App', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = fullRender(<App />)

    await waitForElement(() => getByTestId('app'))
  })

  it('renders new recipe form', async () => {
    const { getByTestId } = fullRender(<App />, { route: '/recipes/new' })

    await waitForElement(() => getByTestId('new-recipe'))
  })

  it('renders recipe list', async () => {
    const { getByTestId } = fullRender(<App />, { route: '/recipes' })

    await waitForElement(() => getByTestId('recipe-list'))
  })
})
