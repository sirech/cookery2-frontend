import React from 'react'
import { Formik } from 'formik'

import { waitForElement, wait } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Ingredients from '../Ingredients'
import { fullRender } from '@testing'

describe('Ingredients', () => {
  const onSubmit = jest.fn()
  const IngredientsInForm = () => (
    <Formik initialValues={{ ingredients: [] }} onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Ingredients list={values.ingredients} />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  )

  it('renders without crashing', async () => {
    const { getByTestId } = fullRender(<IngredientsInForm />)

    await waitForElement(() => getByTestId('ingredients'))
  })

  it('adds ingredients', async () => {
    const { getByTestId, getByLabelText, getByText } = fullRender(
      <IngredientsInForm />
    )

    userEvent.click(getByTestId('add-ingredient'))
    userEvent.type(getByLabelText('ingredient'), 'Salt')
    userEvent.type(getByLabelText('quantity'), '10')

    userEvent.click(getByText('Submit'))

    await wait()

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit.mock.calls[0][0].ingredients).toStrictEqual([
      { name: 'Salt', quantity: 10, unit: 'gr' }
    ])
  })

  it('removes ingredients', async () => {
    const { getByTestId, queryByTestId } = fullRender(<IngredientsInForm />)

    userEvent.click(getByTestId('add-ingredient'))
    await waitForElement(() => getByTestId('ingredient'))
    userEvent.click(getByTestId('remove-ingredient'))

    expect(queryByTestId('ingredient')).toBeNull()
  })
})
