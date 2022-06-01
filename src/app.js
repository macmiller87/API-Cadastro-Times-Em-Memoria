const express = require("express");
const cors = require("cors");

const createUsersRoute = require("./routes/createUsers.routes.js");
const createUsersTeamsRoute = require("./routes/CreateUsersTeams.routes.js");
const listUsersAndTeams = require("./routes/ListUsersAndTeams.routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use(createUsersRoute);
app.use(createUsersTeamsRoute);
app.use(listUsersAndTeams);

module.exports = app;






