import React from 'react'

import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const fullRender = (children: React.ReactNode, { route = '/' } = {}) => {
  return {
    user: userEvent.setup(),
    ...render(<MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>),
  }
}
export default fullRender
