import '@testing-library/jest-dom/extend-expect'
import { cleanup } from '@testing-library/react'

console.error = jest.fn()

beforeEach(() => {
  jest.resetAllMocks()
})

afterEach(() => {
  expect(console.error).not.toHaveBeenCalled()
})
afterEach(cleanup)
