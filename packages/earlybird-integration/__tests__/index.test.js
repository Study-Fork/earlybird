import graph, { createQuery } from '../index'
import parameters from './fixtures/parameter'

const { ACCESS_TOKEN, GROUP_ID } = process.env

describe('Create Query String Parameters', () => {
  const queryParameterRegex = /[^&?]*?=[^&?]*/g
  const params = Object.assign({}, parameters, { access_token: ACCESS_TOKEN })
  const query = createQuery(params)
  expect(queryParameterRegex.test(query)).toBeTruthy()
})

describe('Facbook Graph API', () => {
  test('Get group feeds', async () => {
    const { fields } = parameters
    const feeds = await graph({
      method: 'GET',
      url: `/${GROUP_ID}/feed`,
      body: {
        access_token: ACCESS_TOKEN,
        fields,
      },
    })
    expect(Array.isArray(feeds)).toBeTruthy()
  })
})
