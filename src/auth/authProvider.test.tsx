import React from 'react'
import { screen, render } from '@testing-library/react'

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

  it('does not display content if logged out', () => {
    render(<Context />)
    expect(screen.queryByText('Dude')).toBeNull()
  })
})
