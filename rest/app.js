const app = require("express")();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const server = require("http").Server(app);
const cors = require("cors");
const helmet = require("helmet");

expressWinston.requestWhitelist.push("body");

app.set("port", process.env.EXPRESS_PORT);
app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
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
app.get("/todos");
app.get("/todos/:id");
app.post("/todos");
app.put("/todos/:id");
app.delete("/todos/:id");

server.listen(app.get("port"), "0.0.0.0", () => {
  console.log(`Listening on port ${app.get("port")}`);
});
