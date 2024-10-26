"use strict";
const express = require("express");
const router = express.Router();

const gamesController = require("../controllers/games.controller");

//http://localhost:3000/games/all
router.get("/all", gamesController.getAll);

//http://localhost:3000/games?attribute=platform&value=Wii
router.get("/", gamesController.getAllByOneAttribute);

//http://localhost:3000/games/5
router.get("/:id", gamesController.getOneById);

//http://localhost:3000/games/new
router.post("/new", gamesController.createNew);

module.exports = router;