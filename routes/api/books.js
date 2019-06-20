//Here we are going to set up everything for the books route

const router = require("express").Router();
const bookController = require("../../controllers/bookController");

//all these match with /books

router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);

//this is for /books/:id
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
