//this will deal with all the routes for the goodle shindigs

const router = require("express").Router();
const googleController = require("../../controllers/googleController");

//these will go for /google
router.route("/").get(googleController.findAll);

module.exports = router;
