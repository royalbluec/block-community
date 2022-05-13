const mongoose = require('mongoose');

const boardsSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    count: { type: Number, default: 0 },
  },
  { timestamps: true },
  { collection: 'boards-collection' }
);

module.exports = mongoose.model('Boards', boardsSchema);
