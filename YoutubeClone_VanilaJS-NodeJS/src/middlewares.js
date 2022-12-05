import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_PRIVATE_KEY,
    region: "ap-northeast-1"
});

//by Rooney, AWS S3에 파일을 업로드_200211
const multerVideo = multer({
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "rooneywetube/video"
    })
});

//by Rooney, AWS S3에 파일을 업로드_200211
const multerAvatar = multer({
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "rooneywetube/avator"
    })
});

// by Rooney, 파일 업로드를 위한 middleware_200210
export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");

// by Rooney, local 변수를 global 변수로 사용하기 위한 middleware_200210
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    next();
};

// by Rooney, login을 하지 않아야만 접근 가능(ex 회원가입)하게 하기 위한 middleware_200210
export const onlyPublic = (req, res, next) => {
    if (req.user) {
        res.redirect(routes.home);
    } else {
        next();
    }
};
// by Rooney, login을 해야만 접근 가능(ex 비디오 업로드 등)하게 하기 위한 middleware_200210
export const onlyPrivate = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect(routes.home);
    }
};
