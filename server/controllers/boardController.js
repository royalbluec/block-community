const Board = require('../models/boardSchema');

const boardController = {
  get: async (req, res) => {
    const boardList = await Board.find();

    return res.status(200).json({
      success: true,
      data: boardList,
      message: '모든 게시물을 가져오는데 성공했습니다.',
    });
  },
  post: async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
      res.status(400).json({
        success: false,
        data: null,
        message: '게시물 정보를 입력하지 않았습니다.',
      });
    } else {
      try {
        const userID = 'temp';
        const userName = 'temp';

        await Board.create({ userID, userName, title, content });
        return res.status(200).json({
          success: true,
          data: null,
          message: '새로운 게시물을 생성을 성공했습니다.',
        });
      } catch (e) {
        console.log(e);
        return res.status(200).json({
          success: true,
          data: null,
          message: '새로운 게시물을 생성을 실패했습니다.',
        });
      }
    }
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
