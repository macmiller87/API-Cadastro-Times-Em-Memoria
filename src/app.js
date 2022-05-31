const express = require("express");
const cors = require("cors");
const { v4: uuidV4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const allUsers = [];

app.post("/createUser", (request, response) => {

    const { username, userAvatar, user_id  } = request.body;

    const userIdAlreadyExists = allUsers.find((userId) => userId.user_id === user_id);

    if(!userIdAlreadyExists) {

        const user = {
            user_id: uuidV4(),
            username,
            userAvatar,
            created_at: new Date().toUTCString(),
            userTeams: []
        }
    
        allUsers.push(user);
    
        return response.status(201).json({
            message: "User Create With Sucess !",
            user: user
        })

    } else {

        return response.status(404).json({ message: "User Already Exists !" });
    }
    
});

app.post("/createUserTeam/:user_id",  (request, response) => {

    const { user_id } = request.params;
    const { team, city, country } = request.body;

    const userId = allUsers.find((users) => users.user_id === user_id);

    if(!userId) {
        return response.status(404).json({ message: "User Not Found!"});

    } else {

        const user_Teams = {
            teamId: uuidV4(),
            team,
            city,
            country,
            created_at: new Date().toUTCString()
        }
    
        userId.userTeams.push(user_Teams);
    
        return response.status(201).json({ 
            message: "Created With Success!",
            user_id: userId.user_id,
            team: user_Teams
        });
    }

});

app.get("/listUsersAndTeams/:user_id", (request, response) => {

    const { user_id } = request.params;

    const userid = allUsers.find((user) => user.user_id === user_id);

    if(!userid) {
        return response.status(404).json({ message: "User Not Found !" });

    } else {
        
        return response.json({
            body: allUsers
        });
    }
});

module.exports = app;






