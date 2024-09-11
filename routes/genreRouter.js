const { Router } = require("express");
const genreController = require("../controller/genreController");
const genreRouter = Router();
genreRouter.get("/",genreController.index)
genreRouter.get("/create",genreController.genreCreateGet)
genreRouter.post("/create",genreController.genreCreatePost)
genreRouter.get("/:id/update",genreController.genreUpdateGet)
genreRouter.post("/:id/update",genreController.genreUpdatePost)
genreRouter.post("/:id/delete",genreController.genreDeletePost)   
module.exports = genreRouter