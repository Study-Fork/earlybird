import getUsers from '../index'

describe('Test Facbook Group', () => {
  test('Get group users', async () => {
    // https://developers.facebook.com/tools/explorer/145634995501895/?method=GET&path=652912804915355%2Ffeed&version=v2.12
    // https://lookup-id.com/#
    // 688419537976752 - earlybird group
    // 652912804915355 - holaxprogramming group
    const users = await getUsers()
    expect(users).toBeTruthy()
  })
})
