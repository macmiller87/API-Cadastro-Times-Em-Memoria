const { Router } = require("express");
const { v4: uuidV4 } = require("uuid");
const arrayallUsers = require("./ArrayUsers.js");

const createUsersRoute = Router();

createUsersRoute.post("/createUser", (request, response) => {
        
    const { username, userAvatar, user_id  } = request.body;

    const userIdAlreadyExists = arrayallUsers.find((userId) => userId.user_id === user_id);

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
