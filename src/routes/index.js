// import router from express.
const { Router } = require("express");

const apiRoutes = require("./api/apiRoute");

const viewRoutes = require("./view/viewRoute");

// creating instance of router
const router = Router();

// registering api endpoint
router.use("/api", apiRoutes);

router.use("/", viewRoutes);

module.exports = router;
