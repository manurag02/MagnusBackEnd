// importing mongoose module
const mongoose = require("mongoose");
// import schema
const Schema = mongoose.Schema;

let prrItemPriceAnalysisSchema = new Schema({
    
//General Data
    PRRNo: {
    type: Number,
    default: 0000000000
  },

  Item: {
    type: Number,
    default: 0000000000
  },

  MaterialCode: {
    type: String
  },

  MaterialDesc: {
    type: String
  },

  Qty: {
    type: Number,
    default: 0000000000
  },

  OUn: {
    type: String
  },

  Bidder: {
    type: Number,
    default: 0000000000
  },

  UnitPrice: {
    type: Number,
    default: 0000000000
  },

  PrevPOPrice: {
    type: Number,
    default: 0000000000
  },

  PrevPONo: {
    type: Number,
    default: 0000000000
  },

  PrevPODate: {
    type: Date
  },

  PrevPOCurr: {
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
mongoose.model("prrItemPriceAnalysis", prrItemPriceAnalysisSchema);
