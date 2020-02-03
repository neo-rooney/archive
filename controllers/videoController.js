import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    //const searchingBy = req.query.term ES6이전
    res.render("search", { pageTitle: "Search", searchingBy, videos }); //searchingBy: searchingBy ES6 이전
};

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
    const {
        body: { title, decription },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path.replace(/\\/g, "/"), //window 경우 파일경로를 "\"로 지정하므로 이를 "/로 변환"
        title,
        decription
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};
export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });
