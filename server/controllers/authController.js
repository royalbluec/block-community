const authController = {
  post: async (req, res) => {
    return res.status(200).json({
      success: true,
      data: null,
      message: '사용자 인증을 성공했습니다.',
    });
  },
};

module.exports = { authController };
