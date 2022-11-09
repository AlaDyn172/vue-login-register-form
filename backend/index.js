const { sequelize } = require("./models");
const express = require("express");
const app = express();
const cors = require("cors");

sequelize.sync({ alter: true });

app.listen(1337);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", require("./routes/user"));