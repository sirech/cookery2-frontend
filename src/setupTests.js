import axios from 'axios'
import '@testing-library/jest-dom/vitest'
import { beforeEach, afterEach, expect, vi } from 'vitest'

console.error = vi.fn()

const spies = {
  get: vi.spyOn(axios, 'get'),
  patch: vi.spyOn(axios, 'patch'),
  post: vi.spyOn(axios, 'post'),
}

beforeEach(() => {
  vi.resetAllMocks()
})

afterEach(() => {
  expect(spies.get).not.toHaveBeenCalled()
  expect(spies.patch).not.toHaveBeenCalled()
  expect(spies.post).not.toHaveBeenCalled()

  expect(console.error).not.toHaveBeenCalled()
})
