const app = require("./app.js");
require("dotenv").config();

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => console.log(`Server running ${SERVER_PORT || 3333}`));