import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../../app';

it('returns 404 if ticket is not found', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app).get(`/api/tickets/${id}`).send().expect(404);
});

it('returns ticket if ticket is found', async () => {
  const title = 'some title';
  const price = 20;

  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signup())
    .send({
      title: title,
      price: price,
    })
    .expect(201);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);

  expect(ticketResponse.body.title).toEqual(title);
  expect(ticketResponse.body.price).toEqual(price);
});
