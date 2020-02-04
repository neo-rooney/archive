import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    deleteVideo,
    postEditVideo
} from "../controllers/videoController";
import { uploadVideo, olnyPrivate } from "../middlewares";

const videoRouter = express.Router();
//Upload
videoRouter.get(routes.upload, olnyPrivate, getUpload);
videoRouter.post(routes.upload, olnyPrivate, uploadVideo, postUpload);

//video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit Video
videoRouter.get(routes.editVideo(), olnyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), olnyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), olnyPrivate, deleteVideo);

export default videoRouter;
