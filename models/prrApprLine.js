// importing mongoose module
const mongoose = require("mongoose");
// import schema
const Schema = mongoose.Schema;

let prrApprLineSchema = new Schema({
    
//General Data
  PRRNo: {
    type: Number
  },

  ApprSeq: {
    type: Number,
    default: 1
  },

  ApprBy: {
    type: String
  },

  ApprDate: {
    type: Date,
    default: Date.now
  },

  ApprStatus: {
    type: String,
    default: 'Not Approved'
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
mongoose.model("prrApprLine", prrApprLineSchema);
