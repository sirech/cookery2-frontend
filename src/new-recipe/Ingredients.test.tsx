import React from 'react'
import { Formik } from 'formik'

import { waitForElement, wait } from '@testing-library/react'
import { fullRender } from '@testing'
import userEvent from '@testing-library/user-event'

import Ingredients from './Ingredients'

describe('Ingredients', () => {
  const onSubmit = jest.fn()
  const IngredientsInForm = () => (
    <Formik initialValues={{ ingredients: [] }} onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Ingredients list={values.steps} />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  )

  it('renders without crashing', async () => {
    const { getByTestId } = fullRender(<IngredientsInForm />)

    await waitForElement(() => getByTestId('ingredients'))
  })
})
