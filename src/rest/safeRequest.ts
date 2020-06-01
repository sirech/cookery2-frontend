import { AxiosResponse, AxiosError } from 'axios'

import { NetworkError } from './types'
import { Either, left, right } from 'either'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isError = (obj: any): obj is AxiosError => 'code' in obj

export const safeRequest = async <T>(
  request: () => Promise<AxiosResponse<T>>,
  brand: string
): Promise<Either<NetworkError, T>> => {
  try {
    const { data } = await request()
    return right({ _brand: brand, ...data })
  } catch (error) {
    // TS doesn't quite type catch clauses
    const code = isError(error) ? error.code || '' : ''
    return left({ _brand: 'service-error', code })
  }
}
