const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const booklocationController = require("../controllers/booklocationController");

router.get("/", booklocationController.getAllBookLocations);

module.exports = router;
