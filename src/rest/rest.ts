import axios from 'axios'

const addAuthorization = (headers: Record<string, string>) => {
  const token = localStorage.getItem('authToken')

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
}

export const post = (url: string, data: unknown) => {
  const DEFAULT_OPTIONS = {
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const headers = { ...DEFAULT_OPTIONS.headers }
  addAuthorization(headers)
  const options = { ...DEFAULT_OPTIONS, ...{ headers } }

  return axios.post(url, data, options)
}
