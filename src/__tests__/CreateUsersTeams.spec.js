const request = require("supertest");
const app = require("../app.js");

describe("Create Users Teams", () => {

    it("Should be able to create a new Team", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Chaves",
            userAvatar: "Chavinho"
        }).expect(201);

        const response = await request(app).post(`/createUserTeam/${user.body.user.user_id}`).send({
            teamName: "S. C. Corinthians Paulista",
            city: "São Paulo",
            country: "Brasil"
        }).expect(201);

        expect(response.body.teams.teamName).toBe("S. C. Corinthians Paulista");
        expect(response.body.teams.country).toBe("Brasil");
    });

    it("Should not be able to create a new Team, if 'user_id' not the same", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Kiko",
            userAvatar: "Tesouro"
        });

        await request(app).post(`/createUserTeam/${user.body.user.fake_id}`).send({
            teamName: "F. C. Barcelona",
            city: "Barcelona",
            country: "Espanha"
        }).expect(404);
    });

});