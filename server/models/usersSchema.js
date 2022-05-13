const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    pw: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true },
  { collection: 'users-collection' }
);

module.exports = mongoose.model('Users', usersSchema);
