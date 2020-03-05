import User from "../models/User";

let auth = (req, res, next) => {
    //인증 처리하는곳
    let token = req.cookies.x_auth;
    User.findbyToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true });

        req.token = token;
        req.user = user;
        next();
    });
};

export default auth;
