const app = require('../index');
import * as request from 'supertest';

describe('Post Endpoint', () => {
  it('should return 400 when original_url is empty', async () => {
    const res = await request(app)
      .post('/api/shortenurl')
      .send({
        original_url: '',
      })
    expect(res.status).toEqual(400)
  })
})

describe('Post Endpoint', () => {
  it('should shorten original_url', async () => {
    const res = await request(app)
      .post('/api/shortenurl')
      .send({
        original_url: 'https://www.youtube.com/watch?v=o8NPllzkFhE',
      })
    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('status')
  })
});

describe('Get Endpoint', () => {
  it('should return urls saved in db', async () => {
    const res = await request(app)
      .get('/api/shortenurls');
    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('urls')
  })
});