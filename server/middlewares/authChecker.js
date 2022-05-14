const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.ACCESS_SECRET || 'access';

module.exports = async (req, res, next) => {
  const {
    headers: { authorization },
  } = req;

  try {
    if (!authorization) {
      // 토큰이 존재하지 않을때
      return res.status(403).json({
        success: false,
        data: null,
        message: '토큰이 존재하지 않습니다',
      });
    } else {
      // 토큰이 존재할 때
      // access token 검증
      const token = authorization.split(' ')[1];
      const data = jwt.verify(token, ACCESS_SECRET);
      const { email, name } = data;

      await User.findOne({ email, name }).then((userInfo) => {
        // 유효한 토큰일때
        req.tokenID = userInfo._id.toString();
        next();
      });
    }
  } catch (e) {
    // 유효하지 않은 토큰일때
    return res.status(403).json({
      success: false,
      data: null,
      message: '유효하지 않은 토큰입니다',
    });
  }
};
