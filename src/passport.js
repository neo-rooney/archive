import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import {
    githubLoginCallback,
    facebookLoginCallback
} from "./controllers/userController";
import routes from "./routes";

//by Rooney, 로그인 하는 방식이 passpost local에서 제공하는 userName, password 방식을 사용한다는 의미_200211
passport.use(User.createStrategy());

//by Rooney, Github회원가입 & Login_200211
passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GH_ID,
            clientSecret: process.env.GH_SECRET,
            callbackURL: process.env.PRODUCTION
                ? "https://quiet-brook-26955.herokuapp.com/auth/github/callback"
                : `http://localhost:4004${routes.githubCallback}`
        },
        githubLoginCallback
    )
);
//by Rooney, Github회원가입 Flow(facebook도 동일)_200211
// 먼저 사용하는 깃헙 웹사이트로 이동해서 권한 승인을 누른다.
// 깃헙 웹사이트는 사용자의 정보를 서버로 보내준다.(auth/github/callback)
// passport가 githubLoginCallback함수를 호출한다.
// userController의 githubLoginCallback함수에 의해 사용자의 정보를 얻는다.(id, email, name, avatar_url)
// githubLoginCallback함수는 callback(cb)함수를 return 해야하는데, 이 함수에게 error의 유무와 user의 유무를 알려줘야 한다.
// user가 있다면(=null) passport는 이 user를 취해서 ,쿠키를 만들고 쿠키를 저장한다. 그리고 저장된 쿠키를 브라우저로 보내준다.

//by Rooney, facebook 회원가입 & Login_200211
passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FB_ID,
            clientSecret: process.env.FB_SECRET,
            callbackURL: `https://75b8a2ed.ngrok.io${routes.facebookCallback}`,
            profileFields: ["id", "displayName", "photos", "email"],
            scope: ["public_profile", "email"]
        },
        facebookLoginCallback
    )
);

//by Rooney, cookie에 제공하는 정보_200211
passport.serializeUser(User.serializeUser());
//by Rooney, 어느 사용자인지 어떻게 찾아야 하는지_200211
passport.deserializeUser(User.deserializeUser());
//일반적으로 serialization을 통해서 쿠키에 user.id를 담고 그 id를 가지고 deserialization을 통해서 사용자를 식별
