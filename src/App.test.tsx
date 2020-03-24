import React from 'react'
import userEvent from '@testing-library/user-event'

import { waitForElement } from '@testing-library/react'
import App from './App'
import { fullRender } from '@testing'

jest.mock('recipe-list/recipeList.service')
jest.mock('recipe-details/recipeDetails.service')

describe('App', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = fullRender(<App />)

    await waitForElement(() => getByTestId('app'))
  })

  it('renders new recipe form', async () => {
    const { getByTestId } = fullRender(<App />, { route: '/recipes/new' })

    await waitForElement(() => getByTestId('new-recipe'))
  })

  it('renders a recipe list', async () => {
    const { getByTestId, getByText, getAllByText } = fullRender(<App />, {
      route: '/recipes',
    })

    // Navigate to list of recipes
    await waitForElement(() => getByTestId('recipe-list'))

    // Select one recipe
    await waitForElement(() => getByText('Pasta Carbonara'))
    userEvent.click(getAllByText('DETAILS')[0])
    await waitForElement(() => [getByText('Steps'), getByText('Ingredients')])
    await waitForElement(() => getByText('egg'))

    // Go back
    userEvent.click(getByText('Back'))
    await waitForElement(() => getByTestId('recipe-list'))
  })

  it('renders recipe details', async () => {
    const { getByTestId } = fullRender(<App />, { route: '/recipes/1' })

    await waitForElement(() => getByTestId('recipe-details'))
  })

  it('redirects to recipes list', async () => {
    const { getByTestId } = fullRender(<App />, { route: '/' })

    await waitForElement(() => getByTestId('recipe-list'))
  })
})
