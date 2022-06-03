const express = require("express");
const cors = require("cors");

const createUsersRoute = require("./routes/CreateUsers.routes.js");
const createUsersTeamsRoute = require("./routes/CreateUsersTeams.routes.js");
const listUsersAndTeamsRoute = require("./routes/ListUsersAndTeams.routes.js");
const listUserSpecifTeamRoute = require("./routes/ListUserSpecifTeam.routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use(createUsersRoute);
app.use(createUsersTeamsRoute);
app.use(listUsersAndTeamsRoute);
app.use(listUserSpecifTeamRoute);

module.exports = app; 






