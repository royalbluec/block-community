const userController = {
  get: (req, res) => {
    res
      .status(200)
      .json({ success: true, message: '모든 유저를 가져왔습니다.' });
  },
  post: (req, res) => {
    res
      .status(200)
      .json({ success: true, message: '새로운 유저를 생성했습니다.' });
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
