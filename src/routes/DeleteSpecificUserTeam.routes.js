const { Router } = require("express");
const arrayallUsers = require("../utils/arrays/ArrayUsers.js");
const arrayUserTeams = require("../utils/arrays/ArrayUserTeam.js");

const deleteSpecificUserTeam = Router();

deleteSpecificUserTeam.delete("/deleteSpecificTeam/:team_id", (request, response) => {

    const { team_id } = request.params;
    const { user_id } = request.query;

    const teamId = arrayUserTeams.findIndex((team) => team.team_id === team_id);
    const userId = arrayallUsers.find((user) => user.user_id === user_id);

    if(teamId === -1) {

        return response.status(404).json({ message: "Team Not Found !" });

    }else if(!userId) {

        return response.status(400).json({ message: "User Not Found !" });

    }else {

        arrayUserTeams.splice(teamId, 1);

        return response.status(201).json({ message: "Team Delete With Sucess" });
    }

});

module.exports = deleteSpecificUserTeam;