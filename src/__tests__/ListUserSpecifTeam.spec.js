const request = require("supertest");
const app = require("../app.js");

describe("List Specif User Team", () => {

    it("Should be able to list a User Team", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Freddy",
            userAvatar: "Krugger"
        })

        const userTeam = await request(app).post(`/createUserTeam/${user.body.user.user_id}`).send({
            teamName: "Manchester United F. C",
            city: "Manchester",
            country: "Inglaterra"
        });

        await request(app).get(`/listUserSpecifTeam/${user.body.user.user_id}`).send({
            team_id: userTeam.body.teams.team_id
        })
    });

    it("Should be not able to list User Team, if 'user_id' of the registered User is not the same", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Json",
            userAvatar: "Voorhees"
        })

        const userTeam = await request(app).post(`/createUserTeam/${user.body.user.user_id}`).send({
            teamName: "F. C Paris Sant German",
            city: "Paris",
            country: "França"
        });

        const listUserTeam = await request(app)
        .get(`/listUserSpecifTeam/${user.body.user.fake_id}`)
        .send({
            team_id: userTeam.body.teams.team_id
        }).expect(404);
        
        expect(listUserTeam.body).toStrictEqual({ message: "User Not Found !" });
    });

    it("Should be not able to list User Team, if 'team_id' of the registered Team is not the same", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Spaw",
            userAvatar: "Cavaleiro das Trevas"
        })

        const userTeam = await request(app).post(`/createUserTeam/${user.body.user.user_id}`).send({
            teamName: "F. C Milan",
            city: "Milão",
            country: "Italia"
        });

        const listUserTeam = await request(app)
        .get(`/listUserSpecifTeam/${user.body.user.user_id}`)
        .send({
            team_id: userTeam.body.teams.fake_id
        }).expect(404);
        
        expect(listUserTeam.body).toStrictEqual({ message: "Team Not Found !" });
    });

});