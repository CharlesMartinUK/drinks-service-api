
import request from 'supertest';
import { app } from '../app';


test('GET /coffee should return correct object', async () => {
	const res = await request(app)
	.get('/coffee')
	.query({ coffeeName: 'Latte' });

	expect(res.statusCode).toEqual(200);
	expect(res.body).toEqual({
		drinkType: 'Coffee',
		name: 'Latte',
	});
});

//no name
test('GET /coffee should return correct object', async () => {
	const res = await request(app)
	.get('/coffee')
	.query({ });

	expect(res.statusCode).toEqual(200);
	expect(res.body).toEqual({
		drinkType: 'Coffee',
		name: 'Latte',
	});
});


//Devil Mountain Coffee
test('GET /coffee should return correct object', async () => {
	const res = await request(app)
	.get('/coffee')
	.query({ coffeeName: 'Devil Mountain Coffee' });

	expect(res.statusCode).toEqual(200);
	expect(res.body).toEqual({
		drinkType: 'Coffee',
		name: 'Devil Mountain Coffee',
	});
});

