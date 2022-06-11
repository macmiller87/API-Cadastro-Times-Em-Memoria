const { Router } = require("express");
const arrayallUsers = require("../utils/arrays/ArrayUsers.js");
const arrayUserTeams = require("../utils/arrays/ArrayUserTeam.js");

const listUserSpecifTeam = Router();

listUserSpecifTeam.get("/listUserSpecifTeam/:team_id", (request, response) => {

    const { team_id } = request.params;
    const { user_id } = request.query;

    const teamId = arrayUserTeams.find((team) => team.team_id === team_id);
    const userId = arrayallUsers.find((user) => user.user_id === user_id);
    
    if(!teamId) {
        
        return response.status(404).json({ message: "Team Not Found !" });

    }else if(!userId) {
        
        return response.status(400).json({ message: "User Not Found !" });

    }else {

        return response.json({
            user_id: user_id,
            team: teamId
        });
    }

});

module.exports = listUserSpecifTeam;
