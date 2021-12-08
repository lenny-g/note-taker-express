// import router from express.
const { Router } = require("express");

const {
  getNotes,
  createNote,
  deleteNote,
} = require("../../controllers/api/notes");

// creating instance of router
const router = Router();

router.get("/", getNotes);

router.post("/", createNote);

router.delete("/:id", deleteNote);

module.exports = router;
