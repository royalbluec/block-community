const User = require('../models/userSchema');

const userController = {
  get: async (req, res) => {
    try {
      await User.find().then((userInfoList) => {
        const userList = userInfoList.map((el) => {
          return { id: el._id.toString(), email: el.email, name: el.name };
        });

        res.status(200).json({
          success: true,
          data: userList,
          message: '모든 유저를 가져오는데 성공했습니다.',
        });
      });
    } catch (e) {
      res.status(400).json({
        success: false,
        data: null,
        message: '모든 유저를 가져오는데 실패했습니다.',
      });
    }
  },
  post: async (req, res) => {
    const { email, password, name } = req.body;

    // 유효한 회원정보인지 검증
    const regEmail = /^[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/;
    if (!regEmail.test(email)) {
      return res.status(400).json({
        success: false,
        data: null,
        message: '이메일을 잘못 입력했습니다.',
      });
    }
    const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/;
    if (!regPassword.test(password)) {
      return res.status(400).json({
        success: false,
        data: null,
        message: '비밀번호를 잘못 입력했습니다.',
      });
    }
    const regName = /^[0-9a-zA-Z]{2,8}/;
    if (!regName.test(name)) {
      return res.status(400).json({
        success: false,
        data: null,
        message: '이름을 잘못 입력했습니다.',
      });
    }

    try {
      // 중복 이메일인지 검증
      const duplicatedEmail = await User.findOne({ email: email });
      if (duplicatedEmail) {
        return res.status(400).json({
          success: false,
          data: null,
          message: '이미 사용중인 이메일입니다.',
        });
      }

      // 중복 이름인지 검증
      const duplicatedName = await User.findOne({ name: name });
      if (duplicatedName) {
        return res.status(400).json({
          success: false,
          data: null,
          message: '이미 사용중인 이름입니다.',
        });
      }

      await User.create({ email, password, name }).then(() => {
        return res.status(200).json({
          success: true,
          data: null,
          message: '회원가입을 성공했습니다.',
        });
      });
    } catch (e) {
      return res.status(400).json({
        success: true,
        data: null,
        message: '회원가입을 실패했습니다.',
      });
    }
  },
};

const userDetailController = {
  get: async (req, res) => {
    const tokenID = req.tokenID;
    const id = req.params.id;

    try {
      // 권한 검증
      if (id !== tokenID) {
        return res.status(403).json({
          success: false,
          data: null,
          message: '유저 데이터를 가져오는 권한이 없습니다.',
        });
      }

      await User.findOne({ _id: id }).then((userInfo) => {
        const { _id, email, name } = userInfo;
        const userData = { id: _id.toString(), email, name };

        return res.status(200).json({
          success: true,
          data: userData,
          message: '유저 데이터를 가져오는데 성공했습니다.',
        });
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
    const tokenID = req.tokenID;
    const id = req.params.id;
    const { password } = req.body;

    // 유효한 비밀번호인지 검증
    const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/;
    if (!regPassword.test(password)) {
      return res.status(400).json({
        success: false,
        data: null,
        message: '비밀번호를 잘못 입력했습니다.',
      });
    }

    try {
      // 권한 검증
      if (id !== tokenID) {
        return res.status(403).json({
          success: false,
          data: null,
          message: '유저 데이터를 수정하는 권한이 없습니다.',
        });
      }

      await User.findByIdAndUpdate(id, { password }).then(() => {
        return res.status(200).json({
          success: true,
          data: null,
          message: '유저 데이터를 수정하는데 성공했습니다.',
        });
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        data: null,
        message: '유저 데이터를 수정하는데 실패했습니다.',
      });
    }
  },
  delete: async (req, res) => {
    const tokenID = req.tokenID;
    const id = req.params.id;

    try {
      // 권한 검증
      if (id !== tokenID) {
        return res.status(403).json({
          success: false,
          data: null,
          message: '유저 데이터를 삭제하는 권한이 없습니다.',
        });
      }

      await User.findByIdAndDelete(id).then(() => {
        return res.status(200).json({
          success: true,
          data: null,
          message: '유저 데이터를 삭제하는데 성공했습니다.',
        });
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
