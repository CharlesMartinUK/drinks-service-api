import request from 'supertest';
import { app } from '../app';



describe('Test coffeelover endpoint request', () => {
	test('GET should return correct message', async () => {
		const res = await request(app).get('/coffeelover');
		expect(res.statusCode).toEqual(200);
		expect(res.text).toEqual('Addictive poison, avoid');
	});
});