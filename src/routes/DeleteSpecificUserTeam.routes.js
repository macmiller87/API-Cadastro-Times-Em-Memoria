const { Router } = require("express");
const arrayallUsers = require("../utils/arrays/ArrayUsers.js");
const arrayUserTeams = require("../utils/arrays/ArrayUserTeam.js");

const deleteSpecificUserTeam = Router();

deleteSpecificUserTeam.delete("/deleteSpecificTeam/:user_id", (request, response) => {

    const { user_id } = request.params;
    const { team_id } = request.body;

    const userId = arrayallUsers.find((user) => user.user_id === user_id);
    const teamId = arrayUserTeams.findIndex((team) => team.team_id === team_id);

    if(!userId) {

        return response.status(404).json({ message: "User Not Found !" });

    }else if(teamId === -1) {

        return response.status(404).json({ message: "Team Not Found !" });

    }else {

        arrayUserTeams.splice(teamId, 1);

        return response.status(201).json({ message: "Team Delete With Sucess" });
    }

});

module.exports = deleteSpecificUserTeam;