import { Matchers } from 'pact'
import { InteractionObject } from 'pact/src/dsl/interaction'
import { provider as createProvider } from '@testing'
import { recipeForm } from '@testing/__fixtures__'

import { newRecipe } from 'new-recipe/newRecipe.service'
import { recipeList } from 'recipe-list/recipeList.service'
import { recipeDetails } from 'recipe-details/recipeDetails.service'

describe('pacts', () => {
  const provider = createProvider()
  const recipe = recipeForm()

  beforeAll(() => provider.setup(), 5 * 60 * 1000)
  afterAll(() => provider.finalize(), 5 * 60 * 1000)

  beforeEach(() => localStorage.setItem('authToken', '123'))
  afterEach(() => localStorage.removeItem('authToken'))

  describe('create recipe', () => {
    beforeAll(async () => {
      const interaction: InteractionObject = {
        state: 'i am logged in',
        uponReceiving: 'a request to create a recipe',
        withRequest: {
          method: 'POST',
          path: '/rest/recipes',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: 'Bearer 123'
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

  describe('list recipes', () => {
    beforeAll(async () => {
      const interaction: InteractionObject = {
        state: 'i have a list of recipes',
        uponReceiving: 'a request to get recipes',
        withRequest: {
          method: 'GET',
          path: '/rest/recipes',
          headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: Matchers.eachLike({
            id: Matchers.somethingLike(1),
            name: Matchers.somethingLike('pasta carbonara'),
            servings: Matchers.somethingLike(4),
            duration: Matchers.somethingLike(35)
          })
        }
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('works', async () => {
      const response = await recipeList()

      expect(response.data.length).toBeGreaterThan(0)
      expect(response.data[0]).toEqual({
        id: 1,
        name: 'pasta carbonara',
        servings: 4,
        duration: 35
      })
    })
  })

  describe('get a recipe', () => {
    beforeAll(async () => {
      const interaction: InteractionObject = {
        state: 'i have a list of recipes',
        uponReceiving: 'a request to get one recipe',
        withRequest: {
          method: 'GET',
          path: '/rest/recipes/1',
          headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: Matchers.somethingLike({
            id: Matchers.somethingLike(1),
            name: Matchers.somethingLike('pasta carbonara'),
            servings: Matchers.somethingLike(4),
            duration: Matchers.somethingLike(35),
            steps: Matchers.eachLike(
              {
                description: Matchers.somethingLike('boil the pasta'),
                duration: Matchers.somethingLike(10)
              },
              { min: 1 }
            ),
            ingredients: Matchers.eachLike(
              {
                name: Matchers.somethingLike('egg'),
                quantity: Matchers.somethingLike(3),
                unit: Matchers.somethingLike('gr')
              },
              { min: 1 }
            )
          })
        }
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('works', async () => {
      const response = await recipeDetails(1)
      expect(response.data).toEqual({
        id: 1,
        name: 'pasta carbonara',
        servings: 4,
        duration: 35,
        steps: [{ description: 'boil the pasta', duration: 10 }],
        ingredients: [{ name: 'egg', quantity: 3, unit: 'gr' }]
      })
    })
  })
})
