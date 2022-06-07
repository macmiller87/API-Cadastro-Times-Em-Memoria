const { Router } = require("express");
const { v4: uuidV4 } = require("uuid");
const arrayallUsers = require("../utils/arrays/ArrayUsers.js");

const createUsersRoute = Router();

createUsersRoute.post("/createUser", (request, response) => {
        
    const { username, userAvatar } = request.body;

    const userIdAlreadyExists = arrayallUsers.find((user) => user.username === username);

    if(!userIdAlreadyExists) {
        
        const user = {
            user_id: uuidV4(),
            username,
            userAvatar,
            created_at: new Date().toUTCString(),
        }

        arrayallUsers.push(user);

        return response.status(201).json({
            message: "User Create With Sucess !",
            user: user
        })

    } else {
        
        return response.status(404).json({ message: "User Already Exists !" });
    }

});

module.exports = createUsersRoute;
