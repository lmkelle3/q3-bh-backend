const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const booksController = require("../controllers/booksController");

router.get("/", booksController.getAllBooks);

router.get("/:id", booksController.getOneBook);

router.post("/", booksController.addOneBook);

router.patch("/:id", booksController.updateOneBook);

router.delete("/:id", booksController.removeOneBook);

module.exports = router;
