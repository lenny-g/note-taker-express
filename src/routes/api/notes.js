// import router from express.
const { Router } = require("express");

const { getUserNotes, addNote, deleteNote } = require("../../controllers/api");

// creating instance of router
const router = Router();

router.get("/", getUserNotes);

router.post("/", addNote);

router.delete("/:id", deleteNote);

module.exports = router;
