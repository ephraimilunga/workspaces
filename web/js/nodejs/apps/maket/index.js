const debug = require("debug")("maket:index");
const express = require("express");
const app = express();

require("./startup/db")();
require("./startup/joiObjectIdValidator")();
require("./startup/router")(app);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => debug(`Listening on port ${PORT} ...`));

module.exports = server;
