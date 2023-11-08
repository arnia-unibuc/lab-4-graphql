const request = require('supertest');
const app = require('./app');

const createUser = (app, index) => {
    return request(app)
      .post('/users')
      .send({
          name: 'John',
          email: `john.doe${index}@example.com`
      });
}

describe('E1 - Create users', () => {
    it('should create a user', async () => {
        const res = await request(app)
          .post('/users')
          .send({
              name: 'John',
              email: 'john@test.com',
          });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('email');
    });

    it('should not create a user without name', async () => {
        const res = await request(app)
          .post('/users')
          .send({
              email: 'test@test.com',
          });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });

    it('should not create a user without email', async () => {
        const res = await request(app)
          .post('/users')
          .send({
              name: 'John',
          });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });

    it('should not create a user without name and email', async () => {
        const res = await request(app)
          .post('/users')
          .send({});

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });

    it('should not create a user with an existing email', async () => {
        const res = await request(app)
          .post('/users')
          .send({
              name: 'John',
              email: 'john@test.com',
          });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });
});

describe('E2 - Update users', () => {
    it('should update a user', async () => {
        await createUser(app, 0);

        const res = await request(app)
          .put('/users/0')
          .send({
              name: 'John',
              email: 'john.doe@example.com',
          });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('email');
    });

    it('should not update a user without name', async () => {
        const res = await request(app)
          .put('/users/0')
          .send({
              email: 'john.doe@example.com',
          });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });

    it('should not update a user without email', async () => {
        const res = await request(app)
          .put('/users/0')
          .send({
              name: 'John',
          });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });

    it('should not update a user without name and email', async () => {
        const res = await request(app)
          .put('/users/0')
          .send({});

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });
});

describe('E3 - List users', () => {
    it('should list users', async () => {
        const promises = new Array(20).fill(0).map((_, index) => createUser(app, index));
        await Promise.all(promises);

        const res = await request(app)
          .get('/users');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(10);
    });

    it('should list users with limit', async () => {
        const res = await request(app)
          .get('/users?limit=1');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1);
    });

    it('should list users with page', async () => {
        const res = await request(app)
          .get('/users?page=1');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(10);
    });

    it('should list users with limit and page', async () => {
        const res = await request(app)
          .get('/users?limit=1&page=1');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1);
    });
});

describe('E4 - Delete users', () => {
    it('should delete a user', async () => {
        await createUser(app, 0);

        const res = await request(app)
          .delete('/users/0');

        expect(res.statusCode).toEqual(200);
    });

    it('should not delete a user with invalid id', async () => {
        const res = await request(app)
          .delete('/users/999');

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });
});
