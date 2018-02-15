import getUsers from '../index'

describe('Test Facbook Group', () => {
  it.only('Get group users', async () => {
    const users = await getUsers()
    expect(users).toBeTruthy()
  })
})
