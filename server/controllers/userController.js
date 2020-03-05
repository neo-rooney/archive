import User from "../models/User";

export const getRegister = (req, res) => res.send("Register");

export const postRegister = (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
};
