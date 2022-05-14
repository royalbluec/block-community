const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    userName: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    count: { type: Number, default: 0 },
  },
  { timestamps: true },
  { collection: 'board-collection' }
);

module.exports = mongoose.model('Board', boardSchema);
