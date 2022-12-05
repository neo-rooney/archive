//by Rooney, localhost:4000/video로부터 시작되는 ex)localhost:4000/video/videoDetail 등에 관한 Router_200210
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
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();
//by Rooney, Upload / multer middle를 사용_200210
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

//by Rooney, URL의 id값을 가지고 엔드포인트를 정함_200211
videoRouter.get(routes.videoDetail(), videoDetail);

//by Rooney, 비디오 업로드_200211
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

//by Rooney, URL의 id값을 가지고 엔드포인트를 정함_200211
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
