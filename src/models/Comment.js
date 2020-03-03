import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    //by Rooney, user가 작성한 댓글의 text_200210
    text: {
        type: String,
        required: "Text is required"
    },
    //by Rooney, user가 작성한 댓글의 작성시간_200210
    createAt: {
        type: Date,
        default: Date.now
    },
    //by Rooney, 댓글을 작성한 유저의 id_200210
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    //by Rooney, 댓글의 id값을 video가 갖게 했지만 아래와 같이 video에 대한 id값을 댓글이 갖는 방법도 유효하다_200210
    // video: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Video"
    // }
});

const model = mongoose.model("Comment", CommentSchema);

export default model;
