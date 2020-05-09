import React from 'react'
import { Formik } from 'formik'

import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Steps from '../Steps'
import { fullRender } from '@testing'

describe('Steps', () => {
  const onSubmit = jest.fn()
  const StepsInForm = () => (
    <Formik initialValues={{ steps: [] }} onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Steps list={values.steps || []} />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  )

  it('renders without crashing', async () => {
    fullRender(<StepsInForm />)
    await waitFor(() => screen.getByTestId('steps'))
  })

  it('adds steps', async () => {
    fullRender(<StepsInForm />)

    userEvent.click(screen.getByTestId('add-step'))
    userEvent.type(screen.getByLabelText('description'), 'Shake it shake it')
    userEvent.type(screen.getByLabelText('duration'), '10')

    userEvent.click(screen.getByText('Submit'))

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit.mock.calls[0][0].steps).toStrictEqual([
      { duration: 10, description: 'Shake it shake it' },
    ])
  })

  it('removes steps', async () => {
    fullRender(<StepsInForm />)

    userEvent.click(screen.getByTestId('add-step'))
    await waitFor(() => screen.getByTestId('step'))
    userEvent.click(screen.getByTestId('remove-step'))

    await waitFor(() => {
      expect(screen.queryByTestId('step')).not.toBeInTheDocument()
    })
  })
})
