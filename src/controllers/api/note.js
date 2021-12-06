const getNotes = (req, res) => {
  //  read from json file
  // parse the data
  // return an array of notes
};

const createNote = (req, res) => {
  //  validate post body -has to have text
  // create new note object
  // note : {title:"", text:"", id:""}
  // for id use uuid
  // read from json
  // push
  // write to json
};

const deleteNote = (req, res) => {
  // read from json
  // check if note exists (handle error)
  // remove note
  // write to json
};

module.exports = { getNotes, createNote, deleteNote };
