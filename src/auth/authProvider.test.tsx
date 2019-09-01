import React from 'react'
import { waitForElement, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AuthProvider, { useAuthentication } from './authProvider'

describe('AuthProvider', () => {
  const Component = () => {
    const auth = useAuthentication()
    return (
      <>
        {auth.user && <div>{auth.user}</div>}
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

  it('shows restricted content if there is a previous session and hides it after logout', async () => {
    localStorage.setItem('user', 'Dude')
    localStorage.setItem('expiresAt', (Date.now() + 3600).toString())
    localStorage.setItem('authToken', '2349asdf')

    const { getByText, queryByText } = render(<Context />)
    waitForElement(() => getByText('Dude'))

    userEvent.click(getByText('Logout'))
    expect(queryByText('Dude')).toBeNull()
  })
})
