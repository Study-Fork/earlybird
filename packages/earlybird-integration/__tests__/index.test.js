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
  let feeds = []
  test('Get group feeds', async () => {
    const { fields } = parameters
    const res = await graph({
      accessToken: ACCESS_TOKEN,
      method: 'GET',
      url: `/${GROUP_ID}/feed`,
      body: {
        fields,
      },
    })
    feeds = [...res]
    expect(Array.isArray(res)).toBeTruthy()
  })

  test('Get comments', async () => {
    const res = await graph({
      accessToken: ACCESS_TOKEN,
      method: 'GET',
      url: `/${feeds[0].id}/comments`,
      body: {
        fields: 'from,can_comment,id,message',
      },
    })
    expect(Array.isArray(res)).toBeTruthy()
  })
})
