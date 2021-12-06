// import router from express.
const { Router } = require("express");

const notesRoutes = require("./notesRoutejs");

// creating instance of router
const router = Router();

// registering api endpoint
router.use("/notes", notesRoutes);

router.use("*", wildPath);

module.exports = router;
