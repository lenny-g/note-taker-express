// import router from express.
const { Router } = require("express");

const { renderHome, renderNotes } = require("../../controllers/view");

// creating instance of router
const router = Router();

// registering api endpoint
router.use("/notes", renderNotes);

router.use("*", renderHome);

module.exports = router;
