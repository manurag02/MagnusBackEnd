// importing mongoose module
const mongoose = require("mongoose");
// import schema
const Schema = mongoose.Schema;

let userSchema = new Schema({
  uid: {
    type: String,
    unique: true
  },
  userCode: {
    type: String
  },
  userFullName: {
    type: String,
    default: " "
  },
  department: {
    type: String,
    default: ""
  },
  mobile: {
    type: Number,
    default: 0000000000
  },
  email: {
    type: String,
    default: ""
  },
  userID: {
    type: Number,
    default: 00000
  },
  password: {
    type: String,
    default: ""
  },
  created: {
    type: Date,
    default: Date.now
  },

  lastModified: {
    type: Date,
    default: Date.now
  }
});

// userSchema.index({ uid: 1, userCode: 1 }, { unique: true });
mongoose.model("User", userSchema);
