// import router from express.
const { Router } = require("express");

const notesRoutes = require("./notesRoute.js");

// creating instance of router
const router = Router();

// registering api endpoint
router.use("/notes", renderNotes);

router.use("*", renderHome);

module.exports = router;
