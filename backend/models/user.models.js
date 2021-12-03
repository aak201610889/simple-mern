const mongoose = require('mongoose')

const User = mongoose.model(
  "User",
  mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
      },
    },
    {
      timestamps: true,
    }
  )
);
module.exports = User;