const { Router } = require("express");
const bookController = require("../controller/bookController");
const bookRouter = Router();
bookRouter.get("/",bookController.bookList)
bookRouter.get("/create",bookController.bookCreateGet)
bookRouter.post("/create",bookController.bookCreatePost)
bookRouter.get("/:id/update",bookController.bookUpdateGet)
bookRouter.post("/:id/update",bookController.bookCreatePost)
bookRouter.post("/:id/delete",bookController.bookDeletePost)   
module.exports= bookRouter;