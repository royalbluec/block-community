const boardController = {
  get: (req, res) => {
    res
      .status(200)
      .json({ success: true, message: '모든 게시물을 가져왔습니다.' });
  },
  post: (req, res) => {
    res
      .status(200)
      .json({ success: true, message: '새로운 게시물을 생성했습니다.' });
  },
};

const boardDetailController = {
  get: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ success: true, message: '게시물을 가져왔습니다' });
  },
  put: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ success: true, message: '게시물을 수정했습니다' });
  },
  delete: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ success: true, message: '게시물을 삭제했습니다.' });
  },
};

module.exports = { boardController, boardDetailController };
