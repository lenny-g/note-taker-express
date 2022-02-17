const { v4: uuidv4 } = require("uuid");
const { getNotesFromFile, writeNotesToFile } = require("../../utils.js");

const getNotes = (req, res) => {
  const notes = getNotesFromFile();
  console.log(notes);
  if (notes.length) {
    return res.json(notes);
  } else {
    return res.status(404).json({
      message: `Please enter note`,
    });
  }
};

const createNote = (req, res) => {
  const payload = req.body;

  const validKeys = ["title", "text"];
  const isValid = validKeys.every((key) => Object.keys(payload).includes(key));

  if (isValid) {
    const newNote = {
      id: uuidv4(),
      ...payload,
    };
    const notes = getNotesFromFile();

    notes.push(newNote);

    writeNotesToFile(JSON.stringify(notes));
    return res.json(newNote);
  }

  return res.status(400).json({ message: `Please read our documentation` });
};

const deleteNote = (req, res) => {
  const { id } = req.params;

  const notes = getNotesFromFile();
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({
      message: `No note with id: ${id}`,
    });
  }

  const newNotes = notes.filter((note) => {
    return note.id !== id;
  });

  writeNotesToFile(JSON.stringify(newNotes));

  return res.json(notes);
};

module.exports = { getNotes, createNote, deleteNote };
