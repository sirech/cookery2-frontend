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

    await screen.findByTestId('ingredients')
  })

  it('adds ingredients', async () => {
    fullRender(<IngredientsInForm />)

    userEvent.click(screen.getByTestId('add-ingredient'))
    userEvent.type(screen.getByLabelText('ingredient'), 'Salt')
    userEvent.type(screen.getByLabelText('quantity'), '{selectall}{del}10')

    userEvent.click(screen.getByText('Submit'))

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(onSubmit.mock.calls[0][0].ingredients).toStrictEqual([
      { name: 'Salt', quantity: 10, unit: 'gr' },
    ])
  })

  it('removes ingredients', async () => {
    fullRender(<IngredientsInForm />)

    userEvent.click(screen.getByTestId('add-ingredient'))
    await screen.findByTestId('add-ingredient')
    userEvent.click(screen.getByTestId('remove-ingredient'))

    await waitFor(() => {
      expect(screen.queryByTestId('ingredient')).not.toBeInTheDocument()
    })
  })
})
