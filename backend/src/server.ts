const appConfig = require("./app.ts");
require("dotenv").config();

const SERVER_PORT = process.env.SERVER_PORT;

appConfig.listen(SERVER_PORT, () => console.log(`Server running ${SERVER_PORT || 3333}`));