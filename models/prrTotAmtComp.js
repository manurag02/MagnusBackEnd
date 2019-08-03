// importing mongoose module
const mongoose = require("mongoose");
// import schema
const Schema = mongoose.Schema;

let prrTotAmtCompSchema = new Schema({
    
//General Data
    PRRNo: {
    type: Number,
    default: 0000000000
  },

  Bidder: {
    type: Number,
    default: 0000000000
  },

  TBE: {
    type: String
  },

  InitialPrice: {
    type: Number,
    default: 0000000000
  },

  FinalPrice: {
    type: Number,
    default: 0000000000
  },

  NegoRate: {
    type: Number,
    default: 0000000000
  },

  Remark: {
    type: String
  },

  CreatedBy: {
    type: String
    
  },

  CreatedDate: {
    type: Date,
    default: Date.now
  },

  LastModified: {
    type: Date,
    default: Date.now
  }

 
});

// userSchema.index({ uid: 1, userCode: 1 }, { unique: true });
mongoose.model("prrTotAmtComp", prrTotAmtCompSchema);
