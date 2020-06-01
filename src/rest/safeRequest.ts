import { AxiosResponse } from 'axios'

import { NetworkError } from './types'
import { Either, left, right } from 'either'

export const safeRequest = async <T>(
  request: () => Promise<AxiosResponse<T>>,
  brand: string
): Promise<Either<NetworkError, T>> => {
  try {
    const { data } = await request()
    return right({ _brand: brand, ...data })
  } catch (error) {
    return left({ _brand: 'service-error', code: error.code })
  }
}
