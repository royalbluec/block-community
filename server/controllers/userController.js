const User = require('../models/userSchema');

const userController = {
  get: async (req, res) => {
    const rawUserList = await User.find();

    const userList = rawUserList.map((el) => {
      return { id: el._id.toString(), email: el.email, name: el.name };
    });

    res.status(200).json({
      success: true,
      data: userList,
      message: '모든 유저를 성공적으로 가져왔습니다.',
    });
  },
  post: async (req, res) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      res.status(400).json({
        success: false,
        data: null,
        message: '회원정보를 입력하지 않았습니다.',
      });
    } else {
      const isEmailDuplicated = await User.findOne({ email: email });
      const isNameDuplicated = await User.findOne({ name: name });

      if (isEmailDuplicated) {
        return res.status(400).json({
          success: false,
          data: null,
          message: '이미 사용중인 이메일입니다.',
        });
      } else if (isNameDuplicated) {
        return res.status(400).json({
          success: false,
          data: null,
          message: '이미 사용중인 이름입니다.',
        });
      } else {
        await User.create({ email, password, name });
        return res.status(400).json({
          success: true,
          data: null,
          message: '회원가입이 성공적으로 완료했습니다.',
        });
      }
    }
  },
};

const userDetailController = {
  get: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ success: true, message: '유저를 가져왔습니다' });
  },
  put: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ success: true, message: '유저를 수정했습니다' });
  },
  delete: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ success: true, message: '유저를 삭제했습니다.' });
  },
};

module.exports = { userController, userDetailController };
