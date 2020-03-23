import React from 'react'
import { Formik } from 'formik'

import { waitForElement, wait } from '@testing-library/react'
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
    const { getByTestId } = fullRender(<StepsInForm />)

    await waitForElement(() => getByTestId('steps'))
  })

  it('adds steps', async () => {
    const { getByTestId, getByLabelText, getByText } = fullRender(
      <StepsInForm />
    )

    userEvent.click(getByTestId('add-step'))
    userEvent.type(getByLabelText('description'), 'Shake it shake it')
    userEvent.type(getByLabelText('duration'), '10')

    userEvent.click(getByText('Submit'))

    await wait()

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit.mock.calls[0][0].steps).toStrictEqual([
      { duration: 10, description: 'Shake it shake it' },
    ])
  })

  it('removes steps', async () => {
    const { getByTestId, queryByTestId } = fullRender(<StepsInForm />)

    userEvent.click(getByTestId('add-step'))
    await waitForElement(() => getByTestId('step'))
    userEvent.click(getByTestId('remove-step'))

    await wait(() => {
      expect(queryByTestId('step')).not.toBeInTheDocument()
    })
  })
})
