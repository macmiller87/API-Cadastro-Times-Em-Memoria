const { Router } = require("express");
const arrayallUsers = require("../utils/arrays/ArrayUsers.js");
const arrayUserTeams = require("../utils/arrays/ArrayUserTeam.js");

const listUserSpecifTeam = Router();

listUserSpecifTeam.get("/listUserSpecifTeam/:user_id", (request, response) => {

    const { user_id } = request.params;
    const { team_id } = request.body;

    const userId = arrayallUsers.find((user) => user.user_id === user_id);
    const teamId = arrayUserTeams.find((team) => team.team_id === team_id);
    
    if(!userId) {
        
        return response.status(404).json({ message: "User Not Found !" });

    }else if(!teamId) {
        
        return response.status(404).json({ message: "Team Not Found !" });

    }else {

        return response.json({
            user_id: user_id,
            team: teamId
        });
    }

});

module.exports = listUserSpecifTeam;
