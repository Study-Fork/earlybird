import getUsers from '../index'

describe('Test Facbook Group', () => {
  test('Get group users', async () => {
    const users = await getUsers()
    expect(users).toBeTruthy()
  })
})
