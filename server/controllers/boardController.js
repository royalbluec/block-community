const Board = require('../models/boardSchema');
const User = require('../models/userSchema');

const boardController = {
  get: async (req, res) => {
    try {
      await Board.find().then((boardList) => {
        return res.status(200).json({
          success: true,
          data: boardList,
          message: '모든 게시물을 가져오는데 성공했습니다.',
        });
      });
    } catch (e) {
      res.status(400).json({
        success: false,
        data: null,
        message: '모든 게시물을 가져오는데 실패했습니다.',
      });
    }
  },
  post: async (req, res) => {
    const tokenID = req.tokenID;
    const { title, content } = req.body;

    // 입력값 검증
    if (!title || !content) {
      res.status(400).json({
        success: false,
        data: null,
        message: '게시물 정보를 입력하지 않았습니다.',
      });
    }

    try {
      const { id: userID, name: userName } = await User.findOne({
        _id: tokenID,
      });

      await Board.create({ userID, userName, title, content }).then(() => {
        return res.status(200).json({
          success: true,
          data: null,
          message: '새로운 게시물을 생성을 성공했습니다.',
        });
      });
    } catch (e) {
      return res.status(400).json({
        success: true,
        data: null,
        message: '새로운 게시물을 생성을 실패했습니다.',
      });
    }
  },
};

const boardDetailController = {
  get: async (req, res) => {
    const boardID = req.params.id;

    try {
      await Board.findOne({ _id: boardID }).then((boardInfo) => {
        return res.status(200).json({
          success: true,
          data: boardInfo,
          message: '게시물 데이터를 가져오는데 성공했습니다.',
        });
      });
    } catch (e) {
      return res.status(400).json({
        success: true,
        data: null,
        message: '게시물 데이터를 가져오는데 실패했습니다.',
      });
    }
  },
  put: async (req, res) => {
    const tokenID = req.tokenID;
    const boardID = req.params.id;
    const { title, content } = req.body;

    // 입력된 값 검증
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        data: null,
        message: '잘못된 값을 입력했습니다.',
      });
    }

    try {
      const boardInfo = await Board.findOne({ _id: boardID });

      // 권한 검증
      if (boardInfo.userID !== tokenID) {
        return res.status(403).json({
          success: false,
          data: null,
          message: '게시물 데이터를 수정하는데 권한이 없습니다.',
        });
      }

      await Board.findByIdAndUpdate(boardID, { title, content }).then(() => {
        return res.status(200).json({
          success: true,
          data: null,
          message: '게시물 데이터를 수정하는데 성공했습니다.',
        });
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        data: null,
        message: '게시물 데이터를 수정하는데 실패했습니다.',
      });
    }
  },
  delete: async (req, res) => {
    const tokenID = req.tokenID;
    const boardID = req.params.id;

    try {
      const boardInfo = await Board.findOne({ _id: boardID });

      // 권한 검증
      if (boardInfo.userID !== tokenID) {
        return res.status(403).json({
          success: false,
          data: null,
          message: '게시물 데이터를 삭제하는데 권한이 없습니다.',
        });
      }

      await Board.findByIdAndDelete(boardID).then(() => {
        return res.status(200).json({
          success: true,
          data: null,
          message: '게시물 데이터를 삭제하는데 성공했습니다.',
        });
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        data: null,
        message: '게시물 데이터를 삭제하는데 실패했습니다.',
      });
    }
  },
};

module.exports = { boardController, boardDetailController };
