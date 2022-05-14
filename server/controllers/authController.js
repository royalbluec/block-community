const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.ACCESS_SECRET || 'access';

const authController = {
  post: async (req, res) => {
    const { email, password } = req.body;

    await User.findOne({ email, password }).then((userInfo) => {
      if (!userInfo) {
        return res.status(400).json({
          success: false,
          data: null,
          message: '이메일과 암호가 일치하지 않습니다.',
        });
      } else {
        const { email, name } = userInfo;
        const payload = { email, name };
        const accessToken = jwt.sign(payload, ACCESS_SECRET);

        return res.status(200).json({
          success: true,
          data: accessToken,
          message: '인증을 성공적으로 완료했습니다.',
        });
      }
    });
  },
};

module.exports = { authController };
