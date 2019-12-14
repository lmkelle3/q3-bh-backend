const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const locationsController = require("../controllers/locationsController");

router.get("/", locationsController.getAllLocations);

router.get("/:id", locationsController.getOneLocation);

router.post("/", locationsController.addOneLocation);

router.patch("/:id", locationsController.updateOneLocation);

router.delete("/:id", locationsController.removeOneLocation);

module.exports = router;
