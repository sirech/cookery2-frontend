import { fold, left, right } from './index'

describe('either', () => {
  const fn1 = (left: string) => `left: ${left}`
  const fn2 = (right: string) => `right: ${right}`

  describe('fold', () => {
    it('calls the ifLeft function for error cases', () => {
      const result = fold(left('value'), fn1, fn2)
      expect(result).toBe('left: value')
    })

    it('calls the ifRight function for error cases', () => {
      const result = fold(right('value'), fn1, fn2)
      expect(result).toBe('right: value')
    })
  })
})
