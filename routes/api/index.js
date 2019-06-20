const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

//these are teh book routes
router.use("/books", bookRoutes);

//google routes directions
router.use("/google", googleRoutes);

//all other jazz
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
