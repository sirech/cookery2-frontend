import React from 'react'

import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fullRender = (
  children: React.ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    ...render(<Router history={history}>{children}</Router>),
    history,
  }
}
export default fullRender
