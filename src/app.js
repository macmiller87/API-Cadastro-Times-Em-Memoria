const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

const createUsersRoute = require("./routes/CreateUsers.routes.js");
const createUsersTeamsRoute = require("./routes/CreateUsersTeams.routes.js");
const listUsersAndTeamsRoute = require("./routes/ListUsersAndTeams.routes.js");
const listUserSpecifTeamRoute = require("./routes/ListUserSpecifTeam.routes.js");
const deleteSpecificUserTemaRoute = require("./routes/DeleteSpecificUserTeam.routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(createUsersRoute);
app.use(createUsersTeamsRoute);
app.use(listUsersAndTeamsRoute);
app.use(listUserSpecifTeamRoute);
app.use(deleteSpecificUserTemaRoute);

module.exports = app; 






