const express = require("express");
const router = express.Router();
const imageController = require("./image.controller").imageController



router.post("/", imageController.uploadImage);
router.get("/", imageController.getAllImage);
router.put("/", imageController.deleteImages);

exports.ImageRoutes = router;
