require("dotenv").config();
const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const middleware = require("../middleware/middleware");

/**
 * @swagger
 * /post:
 *  post:
 *    summary: Update the book by the id
 *    tags: [USER]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   username:
 *                     type: string
 *                     description: The user's name.
 *                     example: Leanne Graham
 *                   password:
 *                     type: string
 *                     description: The user's password.
 *                     example: 1234
 *                   email:
 *                     type: string
 *                     description: The user's email.
 *                     example: Leanne Graham@gmail.com
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.post("/post", userController.post);

router.post("/login", userController.login);

router.get("/logout", userController.logout);

router.get("/get/:id", userController.getOneId);

module.exports = router;
