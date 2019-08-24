import { provider as createProvider } from '@testing'
import { recipeForm } from '@testing/__fixtures__'

import { Matchers } from 'pact'
import { newRecipe } from 'new-recipe/newRecipe.service'

describe('pacts', () => {
  const provider = createProvider()
  const recipe = recipeForm()

  beforeAll(() => provider.setup(), 5 * 60 * 1000)
  afterAll(() => provider.finalize(), 5 * 60 * 1000)

  describe('create recipe', () => {
    beforeAll(async () => {
      const interaction = {
        state: 'i am logged in',
        uponReceiving: 'a request to create a recipe',
        withRequest: {
          method: 'POST',
          path: '/rest/recipes',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: recipe
        },
        willRespondWith: {
          status: 201,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: Matchers.somethingLike({ id: 1 })
        }
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('works', async () => {
      await newRecipe(recipe)
    })
  })
})
