import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

//by Rooney, 모든 Video에 관한 데이터를 videos에 담아 home.pug에 전달_200210
export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1 }); //최신 순으로 정렬
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};

//by Rooney, term은 header.pug의 form에서 input에 입력한 값을 get한것
//regex는 정규표현식으로 검색어를 포함하는 제목을 찾기 위함
//i 는 insensitive로 대소문자를 구분하지 않겠다는 의미_200210
export const search = async (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    let videos = [];
    try {
        videos = await Video.find({
            title: { $regex: searchingBy, $options: "i" }
        });
    } catch (error) {
        console.log(error);
    }
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};

//by Rooney, upload page를 rander_200211
export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" });
};

//by Rooney, 유저가 업로드 하려는 비디오를 새로운 Video Model로 만들고 DB에 파일 경로 저장
//파일 자체는 AWS S3에 저장_200211
export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { location }
    } = req;
    const newVideo = await Video.create({
        // fileUrl: path.replace(/\\/g, "/"),
        fileUrl: location,
        title,
        description,
        creator: req.user.id
    });
    req.user.videos.push(newVideo.id);
    req.user.save();
    res.redirect(routes.videoDetail(newVideo.id));
};

//by Rooney, video에 관한 데이터를 id를 key값으로 모두 가져옴
//pupulate를 사용하여 user, commets에 관한 데이터도 객체 형테로 모두 가져옴_200210
export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id)
            .populate("creator")
            .populate("comments");
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

//by Rooney, URL의 id 값으로 video데이터를 불러옴_200211
export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        if (String(video.creator) !== req.user.id) {
            throw Error();
        } else {
            res.render("editVideo", {
                pageTitle: `Edit ${video.title}`,
                video
            });
        }
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

//by Rooney, URL의 id 값으로 video데이터를 불러와서 수정한 값으로 변경하고 저장_200211
export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title1111, description1111 }
    } = req;
    try {
        await Video.findOneAndUpdate(
            { _id: id },
            { title: title1111, description: description1111 }
        );
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

//by Rooney, URL의 id 값으로 video데이터를 찾고 삭제_200211
export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        if (String(video.creator) !== req.user.id) {
            throw Error();
        } else {
            await Video.findByIdAndRemove({ _id: id });
        }
    } catch (error) {
        console.log(error);
    }
    res.redirect(routes.home);
};

export const postRegisterView = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        video.view += 1;
        video.save();
        res.status(200);
    } catch (error) {
        res.status(400);
    } finally {
        res.end();
    }
};

export const postAddComment = async (req, res) => {
    const {
        params: { id },
        body: { comment123 },
        user
    } = req;
    console.log(req.body);
    try {
        const video = await Video.findById(id);
        const newComment = await Comment.create({
            text: comment123,
            creator: user.id
        });
        video.comments.push(newComment.id);
        video.save();
    } catch (error) {
        console.log(error);
        res.status(400);
    } finally {
        res.end();
    }
};
