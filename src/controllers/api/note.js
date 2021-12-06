const { v4: uuidv4 } = require("uuid");
const { readNotesFromFile } = require("../../utils.js");

const getNotes = (req, res) => {
  const notes = readNotesFromFile();
  if (notes.length) {
    return res.json(notes);
  } else {
    return res.status(404).json({
      message: "Please enter note",
    });
  }
};

const createNote = (req, res) => {
  const payload = req.body;
  const newNote = {};
};

const deleteNote = (req, res) => {
  // read from json
  // check if note exists (handle error)
  // remove note
  // write to json
};

module.exports = { getNotes, createNote, deleteNote };
