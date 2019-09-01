import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuthentication } from 'auth'

const Callback = () => {
  const auth = useAuthentication()

  useEffect(() => {
    auth.checkLogin()
  })
  return (
    <>
      {auth.user && <Redirect to="/" />}
      <p>Waiting for log in to be confirmed</p>
    </>
  )
}

export default Callback
