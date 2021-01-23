import axios, { AxiosResponse } from 'axios'

export const post = <T>(
  url: string,
  data: unknown,
  headers: Record<string, unknown> = {}
): Promise<AxiosResponse<T>> => {
  const DEFAULT_OPTIONS = {
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  const mergedHeaders = { ...DEFAULT_OPTIONS.headers, ...headers }

  return axios.post(url, data, {
    ...DEFAULT_OPTIONS,
    ...{ headers: mergedHeaders },
  })
}
