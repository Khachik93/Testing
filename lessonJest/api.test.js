const request = require('supertest');
const app = 'https://demoapp-testing.herokuapp.com'


describe('Get all users', () => {

    it("Get all users", async () => {
        const res = await request(app).get("/users")
        console.log(res.body);
        expect(res.body).not.toBeNull()
        expect(res.statusCode).not.toBe(200);
        expect(res.statusCode).toBe(307);
    })

    it('GET user by ID', async () => {
        const res = await request(app).get("/users/1")
        expect(res.body).not.toBeNull()
        expect(res.statusCode).not.toBe(200);
        expect(res.statusCode).toBe(404);

    });

});


