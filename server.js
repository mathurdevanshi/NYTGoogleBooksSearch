//In this page we are setting the stage for our application to work

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//now we are getting body parsing for AJAX to work
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//adding routes
app.use(routes);

//connecting to mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useCreateIndex: true,
  useNewUrlParser: true
});

//we are connecting to the api server
app.listen(PORT, () => console.log("API server listening on port ${PORT}!"));
