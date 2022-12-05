import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    //by Rooney, Video file의 Url_200210
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    //by Rooney, Video의 제목_200210
    title: {
        type: String,
        required: "Title is required"
    },
    //by Rooney, Video의 설명_200210
    description: String,
    //by Rooney, Video의 조회수_200210
    view: {
        type: Number,
        default: 0
    },
    //by Rooney, Video의 업로드 시간_200210
    createAt: {
        type: Date,
        default: Date.now
    },
    //by Rooney, 댓글에 model id의 배열 비디오에 댓글을 매칭하기 위함_200210
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    //by Rooney, 업로드한 유저의 user model의 id 유저와 비디오를 매칭하기 위함_200210
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const model = mongoose.model("Video", VideoSchema);

export default model;
