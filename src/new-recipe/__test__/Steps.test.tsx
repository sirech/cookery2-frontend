import React from 'react'
import { Formik } from 'formik'

import Steps from '../Steps'
import { screen, waitFor, render } from '@testing'

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
    render(<StepsInForm />)
    await screen.findByTestId('steps')
  })

  it('adds steps', async () => {
    const { user } = render(<StepsInForm />)

    await user.click(screen.getByTestId('add-step'))
    await user.type(screen.getByLabelText('description'), 'Shake it shake it')
    await user.type(screen.getByLabelText('duration'), '{selectall}{del}10')

    await user.click(screen.getByText('Submit'))

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(onSubmit.mock.calls[0][0].steps).toStrictEqual([
      { duration: 10, description: 'Shake it shake it' },
    ])
  })

  it('removes steps', async () => {
    const { user } = render(<StepsInForm />)

    await user.click(screen.getByTestId('add-step'))
    await screen.findByTestId('add-step')
    await user.click(screen.getByTestId('remove-step'))

    await waitFor(() => {
      expect(screen.queryByTestId('step')).not.toBeInTheDocument()
    })
  })
})
