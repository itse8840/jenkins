const request = require('supertest');
const app = require('../app');

describe('GET /', function() {
  it('respond with Hello Banana!', function(done) {
    request(app)
      .get('/')
      .expect('Hello Banana!', done);
  });
});
