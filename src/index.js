const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express(); // express inicializavimas
app.use(express.json()); // kai daromas post, pareitu JSON formatu
app.use(cors()); // apsauga

const { port } = require("./config");

const users = require("./routes/users");
app.use("/users/", users);

// app.get("/", (req, res) => {
//   res.send({ message: "Server is running" });
// });

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
