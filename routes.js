const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");


router.get("/", homeController.getIndex);
router.get("/slideshow", homeController.getSlideshow);
router.get("/upload", homeController.getUpload);
router.post("/upload", homeController.postUpload);


module.exports = router;