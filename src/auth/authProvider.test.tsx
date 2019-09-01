import React from 'react'
import { waitForElement, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AuthProvider, { useAuthentication } from './authProvider'

describe('AuthProvider', () => {
  const Component = () => {
    const auth = useAuthentication()
    return (
      <>
        {auth.user && <div>Dude</div>}
        <button onClick={() => auth.login('Dude')}>Login</button>
        <button onClick={() => auth.logout()}>Logout</button>
      </>
    )
  }

  const Context = () => (
    <AuthProvider>
      <Component />
    </AuthProvider>
  )

  it('does not display content if logged out', async () => {
    const { queryByText } = render(<Context />)
    expect(queryByText('Dude')).toBeNull()
  })

  it('shows restricted content after login and hides it after logout', async () => {
    const { getByText, queryByText } = render(<Context />)

    userEvent.click(getByText('Login'))
    waitForElement(() => getByText('Dude'))

    userEvent.click(getByText('Logout'))
    expect(queryByText('Dude')).toBeNull()
  })
})
