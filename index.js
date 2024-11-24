//loading all the libraries
const dotenv = require("dotenv");
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

//var declar
let PORT;

//setting app and env
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));
dotenv.config();

//.env
process.env.STATUS === "production"
  ? (PORT = process.env.DEV_PORT)
  : (PORT = process.env.PROD_PORT);

//main-page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server in ${process.env.STATUS}, init at *:${PORT}`);
});
