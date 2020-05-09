import React from 'react'
import { Formik } from 'formik'

import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Ingredients from '../Ingredients'
import { fullRender } from '@testing'

describe('Ingredients', () => {
  const onSubmit = jest.fn()
  const IngredientsInForm = () => (
    <Formik initialValues={{ ingredients: [] }} onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Ingredients list={values.ingredients || []} />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  )

  it('renders without crashing', async () => {
    fullRender(<IngredientsInForm />)

    await waitFor(() => screen.getByTestId('ingredients'))
  })

  it('adds ingredients', async () => {
    fullRender(<IngredientsInForm />)

    userEvent.click(screen.getByTestId('add-ingredient'))
    userEvent.type(screen.getByLabelText('ingredient'), 'Salt')
    userEvent.type(screen.getByLabelText('quantity'), '10')

    userEvent.click(screen.getByText('Submit'))

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit.mock.calls[0][0].ingredients).toStrictEqual([
      { name: 'Salt', quantity: 10, unit: 'gr' },
    ])
  })

  it('removes ingredients', async () => {
    fullRender(<IngredientsInForm />)

    userEvent.click(screen.getByTestId('add-ingredient'))
    await waitFor(() => screen.getByTestId('ingredient'))
    userEvent.click(screen.getByTestId('remove-ingredient'))

    await waitFor(() => {
      expect(screen.queryByTestId('ingredient')).not.toBeInTheDocument()
    })
  })
})
