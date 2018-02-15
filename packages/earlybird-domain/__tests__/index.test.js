import getUsers from '../index'

describe('Test Facbook Group', () => {
  test('Get group users', async () => {
    // https://lookup-id.com/#
    // 688419537976752 - earlybird group
    // 652912804915355 - holaxprogramming group
    const users = await getUsers()
    expect(users).toBeTruthy()
  })
})
