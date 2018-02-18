import graph, { createQuery } from '../index'
import parameters from './fixtures/parameter'
import app from './fixtures/app'

describe('Create Query String Parameters', () => {
  const queryParameterRegex = /[^&?]*?=[^&?]*/g
  const params = Object.assign({}, parameters, { access_token: app.access_token })
  const query = createQuery(params)
  expect(queryParameterRegex.test(query)).toBeTruthy()
})

describe('Facbook Graph API', () => {
  let accessToken
  let feeds = []
  test('Get long-lived token', async () => {
    const res = await graph({
      method: 'GET',
      url: '/oauth/access_token',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        client_id: app.client_id,
        client_secret: app.client_secret,
        grant_type: app.grant_type,
        fb_exchange_token: app.access_token,
      },
    })
    accessToken = res.access_token
    expect(res.access_token).toBeTruthy()
  })

  test('Get group feeds', async () => {
    const { fields } = parameters
    const res = await graph({
      method: 'GET',
      url: `/${app.group_id}/feed`,
      body: {
        access_token: accessToken,
        fields,
      },
    })
    feeds = [...res]
    expect(Array.isArray(res)).toBeTruthy()
  })

  test('Get comments', async () => {
    expect(feeds.length > 0).toBeTruthy()
    const res = await graph({
      method: 'GET',
      url: `/${feeds[0].id}/comments`,
      body: {
        access_token: accessToken,
        fields: 'from,can_comment,id,message',
      },
    })
    expect(Array.isArray(res)).toBeTruthy()
  })
})
