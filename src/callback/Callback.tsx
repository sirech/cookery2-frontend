import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'

const Callback: React.FC = () => {
  const { isLoading } = useAuth0()

  return (
    <>
      {!isLoading && <Navigate replace to="/" />}
      <p>Waiting for log in to be confirmed</p>
    </>
  )
}

export default Callback
