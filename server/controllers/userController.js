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
      message: '모든 유저를 가져오는데 성공했습니다.',
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
      // 중복 이메일 체크
      // 중복 이름 체크
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
          message: '회원가입을 성공했습니다.',
        });
      }
    }
  },
};

const userDetailController = {
  get: async (req, res) => {
    const id = req.params.id;

    try {
      const { _id, email, name } = await User.findOne({ _id: id });
      const userData = { id: _id.toString(), email, name };

      return res.status(200).json({
        success: true,
        data: userData,
        message: '유저 데이터를 가져오는데 성공했습니다.',
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        data: null,
        message: '유저 데이터를 가져오는데 실패했습니다.',
      });
    }
  },
  put: async (req, res) => {
    const id = req.params.id;
    const { name, password } = req.body;

    try {
      if (name && !password) {
        // 중복 이름 체크
        const isNameDuplicated = await User.findOne({ name: name });

        if (isNameDuplicated) {
          return res.status(200).json({
            success: false,
            data: null,
            message: '이미 사용중인 이름입니다.',
          });
        } else {
          await User.findByIdAndUpdate(id, { name });
          return res.status(200).json({
            success: true,
            data: null,
            message: '유저 이름을 수정하는데 성공했습니다.',
          });
        }
      } else if (!name && password) {
        await User.findByIdAndUpdate(id, { password });
        return res.status(200).json({
          success: true,
          data: null,
          message: '유저 비밀번호를 수정하는데 성공했습니다.',
        });
      } else {
        return res.status(400).json({
          success: false,
          data: null,
          message: '잘못된 값을 입력했습니다.',
        });
      }
    } catch (e) {
      return res.status(400).json({
        success: false,
        data: null,
        message: '유저 데이터를 수정하는데 실패했습니다.',
      });
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;

    try {
      await User.findByIdAndDelete(id);

      return res.status(200).json({
        success: true,
        data: null,
        message: '유저 데이터를 삭제하는데 성공했습니다.',
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        data: null,
        message: '유저 데이터를 삭제하는데 실패했습니다.',
      });
    }
  },
};

module.exports = { userController, userDetailController };
