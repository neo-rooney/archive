import User from "../models/User";

export const getRegister = (req, res) => res.send("Register");

export const postRegister = (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) return res.json({ RegisterSuccess: false, err });
        return res.status(200).json({
            success: true
        });
    });
};

export const postLogin = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다. "
            });
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호가 틀렸습니다."
                });
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("x_auth", user.token)
                    .status(200)
                    .json({ loginSuccess: true, userId: user._id });
            });
        });
    });
};

export const getAuth = (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    });
};

export const logout = (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
};
