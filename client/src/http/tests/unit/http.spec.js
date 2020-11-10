import http from '@/http'

describe('api', () => {
  it('Test request api', async () => {
    const request = await http.student.getStudents()

    expect(request.status).toBe(200)
  })
})