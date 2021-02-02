import * as Yup from 'yup'
import schema from '../schema'

describe('validationSchema', () => {
  describe('steps', () => {
    it('rejects empty steps', async () => {
      await expect(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
        Yup.reach(schema, 'steps', null, null).isValid([])
      ).resolves.toBe(false)
    })

    it('accepts valid steps', async () => {
      await expect(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
        Yup.reach(schema, 'steps', null, null).isValid([
          { description: 'Do things', duration: 3 },
        ])
      ).resolves.toBe(true)
    })
  })
})
