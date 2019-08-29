import * as Yup from 'yup'
import schema from '../schema'

describe('validationSchema', () => {
  describe('steps', () => {
    it('rejects empty steps', async () => {
      await expect(Yup.reach(schema, 'steps').isValid([])).resolves.toBe(false)
    })

    it('accepts valid steps', async () => {
      await expect(
        Yup.reach(schema, 'steps').isValid([
          { description: 'Do things', duration: 3 }
        ])
      ).resolves.toBe(true)
    })
  })
})
