const fs = require("fs");

const path = require("path");

const readNotesFromFile = () => {
  const noteJSON = fs.readFileSync(
    path.join(__dirname, "/db/db.json"),
    "utf-8"
  );

  const notes = JSON.parse(notesJSON);
  return notes;
};

const writeNotesToFile = (data) => {
  fs.writeFileSync(path.join(_dirname, "/db/db.json"), data);
};

module.exports = { readNotesFromFile, writeNotesToFile };
