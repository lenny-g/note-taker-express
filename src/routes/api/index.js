// import router from express.
const { Router } = require("express");

const notesRoutes = require("./notes");

// creating instance of router
const router = Router();

// registering api endpoint
router.use("/notes", notesRoutes);

module.exports = router;
