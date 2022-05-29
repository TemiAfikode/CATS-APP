"Use strict";

const express = require("express");
const catsController = require("../controllers");

const router = express.Router();

// const catsRoute = (router) => {
//route to create a new cat
router.post("/cats/add", catsController.createCat);

//route to get all available cat(s)
router.get("/breeds", catsController.getAllCats);

//route to get, edit and delete a cat specified by its id
router
    .get("/breed/:id", catsController.getCatById)
    .put("/breed/:id", catsController.updateCat)
    .delete("/breed/:id", catsController.deleteCat);
// };
//exporting all available routes
module.exports = router;