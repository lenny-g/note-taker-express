const express = require("express");

const routes = require("./routes");

const app = express();

const PORT = 3000;

// express middlewares
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(routes);

app.listen(PORT, () =>
  console.log(`server running on https://localhost:${PORT}`)
);
