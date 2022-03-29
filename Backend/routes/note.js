const express = require("express");
const router = express.Router();
const noteController = require("../controller/note");
const middleware = require("../middleware/middleware");

router.post("/create", noteController.create);

router.get("/read", noteController.read);

router.get("/detail/:id", noteController.detail);

router.put("/update/:id", noteController.update);

router.delete("/delete/:id", noteController.delete);

router.get("/relation", middleware.middleWareJWT, noteController.relation);

module.exports = router;
