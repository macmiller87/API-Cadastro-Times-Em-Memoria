const request = require("supertest");
const app = require("../app.js");

describe("List Users and Teams", () => {

    it("Should be able to list the registered User's User and Teams", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Seu Madruga",
            userAvatar: "Madruguinha"
        });

        await request(app).post(`/createUserTeam/${user.body.user.user_id}`).send({
            teamName: "Real Madrid F. C",
            city: "Madri",
            country: "Espanha"
        });

        await request(app)
        .get(`/listUsersAndTeams/${user.body.user.user_id}`);  
    });

    it("Should not be able to list User and Teams if the 'user_id' of the registered User is not the same", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Seu Barriga",
            userAvatar: "Disco Voador"
        });

        await request(app).post(`/createUserTeam/${user.body.user.user_id}`).send({
            teamName: "Juventus F. C.",
            city: "Napoli",
            country: "Espanha"
        });

        await request(app)
        .get(`/listUsersAndTeams/${user.body.user.fake_id}`)
        .expect(404);  
    });

});