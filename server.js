// Require express and express-handlebars
const express = require("express");
const exphbs = require("express-handlebars");

// Tell the app to use express. process.env.PORT for Heroku deployment(if not found, use 8080)
const app = express();
const PORT = process.env.PORT || 8080;

// The app should output parsed data (json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the folder <public> to feed info to front end
app.use(express.static("public"));

// Use <burgers_controller.js> for selectAll, insertOne and updateOne methods
const routes = require("burgers_controller.js");
app.use(routes);

// Use handlebars from <main.handlebars> file to display info to fronend
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Initialize the server and listen
app.listen(PORT, () => {
  console.log("App is listening on the PORT " + PORT);
});
