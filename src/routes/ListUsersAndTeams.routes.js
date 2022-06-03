const { Router } = require("express");
const arrayallUsers = require("./ArrayUsers.js");
const arrayUserTeams = require("./ArrayUserTeam.js");

const listUsersAndTeams = Router();

listUsersAndTeams.get("/listUsersAndTeams/:user_id", (request, response) => {

    const { user_id } = request.params;

    const userid = arrayallUsers.find((user) => user.user_id === user_id);

    if(!userid) {
        return response.status(404).json({ message: "User Not Found !" });

    } else {
        
        return response.json({
            user: arrayallUsers,
            teams: arrayUserTeams
        });
    }
});

module.exports = listUsersAndTeams;