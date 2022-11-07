const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./src/controllers/routes");
const corsID = require('cors')
const cors = corsID

require('./src/database/index')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3001);

app.use(cors({
  origin: '*'
}));

app.use(routes);