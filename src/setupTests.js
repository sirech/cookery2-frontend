import axios from 'axios'
import '@testing-library/jest-dom/extend-expect'

console.error = jest.fn()

const spies = {
  get: jest.spyOn(axios, 'get'),
  patch: jest.spyOn(axios, 'patch'),
  post: jest.spyOn(axios, 'post'),
}

beforeEach(() => {
  jest.resetAllMocks()
})

afterEach(() => {
  expect(spies.get).not.toHaveBeenCalled()
  expect(spies.patch).not.toHaveBeenCalled()
  expect(spies.post).not.toHaveBeenCalled()

  expect(console.error).not.toHaveBeenCalled()
})
