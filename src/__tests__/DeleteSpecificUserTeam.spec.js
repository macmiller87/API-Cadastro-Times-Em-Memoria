const request = require("supertest");
const app = require("../app.js");

describe("Delete Specif User Team", () => {

    it("Should be able to Delete a Specific User Team", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Godofredo",
            userAvatar: "Fera braba"
        });

        const userTeam = await request(app).post(`/createUserTeam/${user.body.user.user_id}`).send({
            teamName: "Liverpol F. C.",
            city: "Liverpol",
            country: "Inglaterra"
        });

        const deleteUserSpecificTeam = await request(app)
        .delete(`/deleteSpecificTeam/${userTeam.body.teams.team_id}`)
        .query({
            user_id: user.body.user.user_id
        }).expect(201);

        expect(deleteUserSpecificTeam.body).toStrictEqual({ message: "Team Delete With Sucess" });
    });

    it("Should be not able to delete a Specif Team if the 'user_id' of the registered User is not the same", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Ze Bedeu",
            userAvatar: "Doidera"
        });

        const userTeam = await request(app).post(`/createUserTeam/${user.body.user.user_id}`).send({
            teamName: "F. C. Barcelona",
            city: "Barcelona",
            country: "Espanha"
        });

        const deleteUserSpecificTeam = await request(app)
        .delete(`/deleteSpecificTeam/${userTeam.body.teams.team_id}`)
        .query({
            user_id: user.body.user.fake_id
        }).expect(400);

        expect(deleteUserSpecificTeam.body).toStrictEqual({ message: "User Not Found !" });
    });

    it("Should be not able to delete a Specif Team if the 'team_id' of the registered Team is not the same", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Chapeuzinho",
            userAvatar: "Vermelho"
        });

        const userTeam = await request(app).post(`/createUserTeam/${user.body.user.user_id}`).send({
            teamName: "F. C. Real Madrid",
            city: "Madri",
            country: "Espanha"
        });

        const deleteUserSpecificTeam = await request(app)
        .delete(`/deleteSpecificTeam/${userTeam.body.teams.fake_id}`)
        .query({
            user_id: user.body.user.user_id
        }).expect(404);

        expect(deleteUserSpecificTeam.body).toStrictEqual({ message: "Team Not Found !" });
    });

});