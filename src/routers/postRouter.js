import express from "express";
import {
    postController,
    postCreateController,
    postDetailController,
    postCreatePostController,
    postDelete,
    updataPost,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.get("/postList", postController);
postRouter.get("/postCreate", postCreateController);
postRouter.get("/postDetail/:id", postDetailController);
postRouter.post("/postCreate", postCreatePostController);
postRouter.post("/postDetail", updataPost);
postRouter.post("/postDelete", postDelete);

export default postRouter;