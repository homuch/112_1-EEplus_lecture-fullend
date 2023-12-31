const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const db = require("./db");
const initializeEvents = require("./init");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

db.connect();

// initializeEvents();
