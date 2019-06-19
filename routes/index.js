//This file will help refrence the other folder of all the api documents we are using

//getting all the files and stuff we need
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//connecting to the other folder
router.use("/api", apiRoutes);

//if no api routes are hit, then we send them to the react app
router.use((req, res) =>
  res.sendFile(path.join(_dirname, "../client/build/index.html"))
);

module.exports = router;
