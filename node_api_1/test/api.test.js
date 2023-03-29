const request = require('supertest');
const app = '../index.js'


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

    it("POST add user", async () => {
        const res = await request(app).post("/users")
        expect(res.statusCode).toBe(201);
    });

    it("PUT should update user date", async () => {
        const response = await request(app).put(`/users/8`)
        expect(response.statusCode).toBe(201);

    });

});