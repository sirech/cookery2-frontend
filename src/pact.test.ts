import http from 'node:http'
import https from 'node:https'
import axios from 'axios'

import { Matchers } from '@pact-foundation/pact'
import { vi } from 'vitest'

import { provider as createProvider } from '@testing'
import { recipeForm } from '@testing/__fixtures__'

import { newRecipe } from 'new-recipe/newRecipe.service'
import { recipeList } from 'recipe-list/recipeList.service'
import { recipeDetails } from 'recipe-details/recipeDetails.service'

// Pact tests can be slower due to mock server start/stop and verification.
vi.setConfig({ testTimeout: 300_000 }) // 5 minutes

describe('pacts', () => {
  const provider = createProvider()
  const recipe = recipeForm()

  beforeEach(() => {
    vi.restoreAllMocks()

    // keep axios from reusing sockets across tests (helps avoid flaky ECONNRESET in CI)
    axios.defaults.httpAgent = new http.Agent({ keepAlive: false })
    axios.defaults.httpsAgent = new https.Agent({ keepAlive: false })

    localStorage.setItem('authToken', '123')
  })

  afterEach(() => {
    localStorage.removeItem('authToken')
  })

  describe('create recipe', () => {
    it('works', async () => {
      await provider
        .addInteraction()
        .given('i am logged in')
        .uponReceiving('a request to create a recipe')
        .withRequest('POST', '/rest/recipes', (builder) => {
          builder.headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer 123',
          })
          builder.jsonBody(recipe)
        })
        .willRespondWith(201, (builder) => {
          builder.headers({ 'Content-Type': 'application/json' })
          builder.jsonBody(Matchers.like({ id: 1 }))
        })
        .executeTest(async (mockserver) => {
          axios.defaults.baseURL = mockserver.url
          await newRecipe(recipe, '123')
        })
    })
  })

  describe('list recipes', () => {
    it('works', async () => {
      await provider
        .addInteraction()
        .given('i have a list of recipes')
        .uponReceiving('a request to get recipes')
        .withRequest('GET', '/rest/recipes', (builder) => {
          builder.headers({
            Accept: 'application/json',
          })
        })
        .willRespondWith(200, (builder) => {
          builder.headers({ 'Content-Type': 'application/json' })
          builder.jsonBody(
            Matchers.eachLike({
              id: Matchers.like(1),
              name: Matchers.like('pasta carbonara'),
              servings: Matchers.like(4),
              duration: Matchers.like(35),
            }),
          )
        })
        .executeTest(async (mockserver) => {
          axios.defaults.baseURL = mockserver.url

          const response = await recipeList()

          expect(response.length).toBeGreaterThan(0)
          expect(response[0]).toEqual({
            id: 1,
            name: 'pasta carbonara',
            servings: 4,
            duration: 35,
          })
        })
    })
  })

  describe('get a recipe', () => {
    it('works', async () => {
      await provider
        .addInteraction()
        .given('i have a list of recipes')
        .uponReceiving('a request to get one recipe')
        .withRequest('GET', '/rest/recipes/1', (builder) => {
          builder.headers({
            Accept: 'application/json',
          })
        })
        .willRespondWith(200, (builder) => {
          builder.headers({ 'Content-Type': 'application/json' })
          builder.jsonBody(
            Matchers.like({
              id: 1,
              name: 'pasta carbonara',
              servings: 4,
              duration: 35,
              steps: Matchers.eachLike(
                {
                  description: Matchers.like('boil the pasta'),
                  duration: Matchers.like(10),
                },
                1,
              ),
              ingredients: Matchers.eachLike(
                {
                  name: Matchers.like('egg'),
                  quantity: Matchers.like(3),
                  unit: Matchers.like('gr'),
                },
                1,
              ),
            }),
          )
        })
        .executeTest(async (mockserver) => {
          axios.defaults.baseURL = mockserver.url

          const response = await recipeDetails(1)
          expect(response).toEqual({
            id: 1,
            name: 'pasta carbonara',
            servings: 4,
            duration: 35,
            steps: [{ description: 'boil the pasta', duration: 10 }],
            ingredients: [{ name: 'egg', quantity: 3, unit: 'gr' }],
          })
        })
    })
  })
})
