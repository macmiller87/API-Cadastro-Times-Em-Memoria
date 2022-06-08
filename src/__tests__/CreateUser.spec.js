const request = require("supertest");
const { validate } = require("uuid");
const app = require("../app.js");

describe("Create User", () => {

    it("Should be able to create a new User", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Macmiller Duarte",
            userAvatar: "SpiderCampeão"
        }).expect(201);

        expect(validate(user.body.user.user_id)).toBe(true);
        expect(user.body.user.username).toBe("Macmiller Duarte");
    });

    it("Should not be able to create a User, with at same 'username'", async () => {

        const user = await request(app).post("/createUser").send({
            username: "Macmiller Duarte",
            userAvatar: "SpiderCampeão"
        }).expect(404);

        expect(user.body).toStrictEqual({ message: "User Already Exists !" });
    });
    
});