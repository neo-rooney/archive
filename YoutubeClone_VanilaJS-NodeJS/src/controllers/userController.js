import passport from "passport";
import routes from "../routes";
import User from "../models/User";

//by Rooney, join page rander_200211
export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

//by Rooney, postJoin은 middleware / 회원가입 후 바로 로그인 하기 위함_200211
export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        req.flash("error", "Passwords don't match");
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        try {
            const user = await User({
                name,
                email
            });
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

//by Rooney, login page rander_200211
export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "Login" });
};

//by Rooney, 로그인 성공/실패시 각각 페이지 rander_200211
export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home,
    successFlash: "Welcome",
    failureFlash: "Can't log in. Check email and/or password"
});

//by Rooney, Github Login_200211
export const githubLogin = passport.authenticate("github", {
    successFlash: "Welcome",
    failureFlash: "Can't log in at this time"
});

//by Rooney, Github Login_200211
export const githubLoginCallback = async (_, __, profile, cb) => {
    const {
        _json: { id, avatar_url: avatarUrl, name, email }
    } = profile;

    try {
        const user = await User.findOne({ email });
        if (user) {
            user.githubId = id;
            user.save();
            return cb(null, user);
        } else {
            const newUser = await User.create({
                email,
                name,
                githubId: id,
                avatarUrl
            });
            return cb(null, newUser);
        }
    } catch (error) {
        return cb(error);
    }
};

//by Rooney, Github Login_200211
export const postGithubLogin = (req, res) => {
    res.redirect(routes.home);
};

//by Rooney, facebookLogin_200211
export const facebookLogin = passport.authenticate("facebook", {
    successFlash: "Welcome",
    failureFlash: "Can't log in at this time"
});

//by Rooney, facebookLogin_200211
export const facebookLoginCallback = async (_, __, profile, cb) => {
    const {
        _json: { id, name, email }
    } = profile;
    try {
        const user = await User.findOne({ email });
        if (user) {
            user.facebookId = id;
            user.save();
            return cb(null, user);
        } else {
            const newUser = await User.create({
                email,
                name,
                facebookId: id,
                avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`
            });
            return cb(null, newUser);
        }
    } catch (error) {
        return cb(error);
    }
};

//by Rooney, facebookLogin_200211
export const postFacebookLogin = (req, res) => {
    res.redirect(routes.home);
};

//by Rooney, logout_200211
export const logout = (req, res) => {
    req.flash("info", "Logged out, see you later");
    req.logout();
    res.redirect(routes.home);
};

//by Rooney, 유저 자신이 자기 상세 페이지 들어 가는 경우_200211
export const getMe = (req, res) => {
    res.render("userDetail", { pageTitle: "User Detail", user: req.user });
};

//by Rooney, 자기 자신이 아닌 다른 유저 상세 페이지 들어가는 경우_200211
export const userDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const user = await User.findById(id).populate("videos");
        res.render("userDetail", { pageTitle: "User Detail", user });
    } catch (error) {
        console.log(error);
        req.flash("error", "User not found");
        res.redirect(routes.home);
    }
};

//by Rooney, 유저 정보 변경 페이지 렌더_200211
export const getEditProfile = (req, res) =>
    res.render("editProfile", { pageTitle: "EditvProfile" });

//by Rooney, 유저 정보 변경_200211
export const postEditProfile = async (req, res) => {
    const {
        body: { name, email },
        file
    } = req;
    try {
        await User.findByIdAndUpdate(req.user.id, {
            name,
            email,
            avatarUrl: file ? file.location : req.user.avatarUrl
        });
        req.flash("success", "Profile updated");
        res.redirect(routes.me);
    } catch (error) {
        req.flash("error", "Can't update Profile");
        res.redirect(routes.editProfile);
    }
};

//by Rooney, 유저 비밀번호 변경 페이지 렌더_200211
export const getChangePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "Change Password" });

//by Rooney, 유저 비밀번호 변경 _200211
export const postChangePassword = async (req, res) => {
    const {
        body: { oldPassword, newPassword, newPassword1 }
    } = req;
    try {
        if (newPassword !== newPassword1) {
            req.flash("error", "Password don't match");
            res.status(400);
            res.redirect(`/users${routes.changePassword}`);
            return;
        }
        await req.user.changePassword(oldPassword, newPassword);
        res.redirect(routes.me);
    } catch (error) {
        eq.flash("error", "Can't Change Password");
        res.status(400);
        res.redirect(`/users${routes.changePassword}`);
    }
};
