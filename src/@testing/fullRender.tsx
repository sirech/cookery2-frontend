import React from 'react'

import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { RenderResult } from '@testing-library/react'
import type { UserEvent } from '@testing-library/user-event'

type FullRenderOptions = {
  route?: string
}

type FullRenderResult = RenderResult & {
  user: UserEvent
}

const fullRender = (
  children: React.ReactNode,
  { route = '/' }: FullRenderOptions = {},
): FullRenderResult => {
  return {
    user: userEvent.setup(),
    ...render(<MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>),
  }
}
export default fullRender
