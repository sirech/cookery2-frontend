import React from 'react'
import { Formik } from 'formik'

import Ingredients from '../Ingredients'
import { screen, waitFor, render } from '@testing'

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
    render(<IngredientsInForm />)

    await screen.findByTestId('ingredients')
  })

  it('adds ingredients', async () => {
    const { user } = render(<IngredientsInForm />)

    await user.click(screen.getByTestId('add-ingredient'))
    await user.type(screen.getByLabelText('ingredient'), 'Salt')
    await user.type(screen.getByLabelText('quantity'), '{selectall}{del}10')

    await user.click(screen.getByText('Submit'))

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(onSubmit.mock.calls[0][0].ingredients).toStrictEqual([
      { name: 'Salt', quantity: 10, unit: 'gr' },
    ])
  })

  it('removes ingredients', async () => {
    const { user } = render(<IngredientsInForm />)

    await user.click(screen.getByTestId('add-ingredient'))
    await screen.findByTestId('add-ingredient')
    await user.click(screen.getByTestId('remove-ingredient'))

    await waitFor(() => {
      expect(screen.queryByTestId('ingredient')).not.toBeInTheDocument()
    })
  })
})
