type Left<T> = { tag: 'left'; value: T }
type Right<T> = { tag: 'right'; value: T }

export type Either<L, R> = Left<L> | Right<R>

export const left = <T extends {}>(value: T): Left<T> => ({
  tag: 'left',
  value
})

export const right = <T extends {}>(value: T): Right<T> => ({
  tag: 'right',
  value
})

export const fold = <L, R, T>(
  value: Either<L, R>,
  ifLeft: (value: L) => T,
  ifRight: (value: R) => T
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unreachable = (_x: never): never => {
    throw new Error('undefined branch')
  }
  switch (value.tag) {
    case 'left':
      return ifLeft(value.value)
    case 'right':
      return ifRight(value.value)
    default:
      unreachable(value)
  }
}
