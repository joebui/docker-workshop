const app = require("express")();
const bodyParser = require("body-parser");
const server = require("http").Server(app);
const cors = require("cors");
const helmet = require("helmet");

global.sequelize = require("./mysql-connection");
const service = require("./service");

app.set("port", process.env.EXPRESS_PORT);
app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/** Register APIs */
app.get("/todos", async (req, res) => {
  const value = await service.findAll();
  res.json(value);
});

app.get("/todos/:id", async (req, res) => {
  const todo = await service.getById(req.params.id);
  res.json(todo);
});

app.post("/todos", async (req, res) => {
  console.log(req.body);
  const todo = await service.create(req.body);
  res.json(todo);
});

app.put("/todos/:id", async (req, res) => {
  const todo = await service.update(req.params.id, req.body);
  res.json(todo);
});

app.delete("/todos/:id", async (req, res) => {
  const todo = await service.delete(req.params.id);
  res.json(todo);
});

server.listen(app.get("port"), "0.0.0.0", () => {
  console.log(`Listening on port ${app.get("port")}`);
});
