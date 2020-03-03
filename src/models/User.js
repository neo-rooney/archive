import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    //by Rooney, user의 이름_200210
    name: String,
    //by Rooney, user의 email_200210
    email: String,
    //by Rooney, user의 프로필사진 url_200210
    avatarUrl: String,
    //by Rooney, user의 facebookID_200210
    facebookId: Number,
    //by Rooney, user의 githubID_200210
    githubId: Number,
    //by Rooney, user가 작성한 댓글에 관한 id의 배열_200210
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    //by Rooney, user가 업로드한 비디오에 관한 id의 배열_200210
    videos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ]
});
//by Rooney, User Model 중 email을 로그인의 id로 하겠다는 의미_200211
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
