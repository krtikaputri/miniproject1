require("dotenv").config();
const cors = require("cors");
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");
const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const db = require("./helper/relation");
const app = express();
const user = require("./routes/user");
const note = require("./routes/note");
const swagger = require("./helper/swagger_option");

const { User, Notes } = db;

const specs = swaggerjsdoc(swagger.options);

app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use(express.json());

app.use(cors());

app.use(user);

app.use(note);

app.listen(process.env.PORT, () =>
  console.log("Listening at port: " + process.env.PORT)
);
