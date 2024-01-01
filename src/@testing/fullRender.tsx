import React from 'react'

import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
// eslint-disable-next-line import/no-named-as-default
import userEvent from '@testing-library/user-event'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fullRender = (children: React.ReactNode, { route = '/' } = {}) => {
  return {
    user: userEvent.setup(),
    ...render(<MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>),
  }
}
export default fullRender
