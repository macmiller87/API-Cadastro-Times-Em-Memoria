const { Router } = require("express");
const { v4: uuidV4 } = require("uuid");
const arrayallUsers = require("./ArrayUsers.js");

const createUsersTeamsRoute = Router();

createUsersTeamsRoute.post("/createUserTeam/:user_id",  (request, response) => {

    const { user_id } = request.params;
    const { teamName, city, country } = request.body;

    const userId = arrayallUsers.find((users) => users.user_id === user_id);

    if(!userId) {
        return response.status(404).json({ message: "User Not Found!"});

    } else {

        const user_Teams = {
            team_Id: uuidV4(),
            teamName,
            city,
            country,
            created_at: new Date().toUTCString()
        }
    
        userId.userTeams.push(user_Teams);
    
        return response.status(201).json({ 
            message: "Created With Success!",
            user_id: userId.user_id,
            teams: user_Teams
        });
    }

});

module.exports = createUsersTeamsRoute;