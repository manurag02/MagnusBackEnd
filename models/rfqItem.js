// importing mongoose module
const mongoose = require("mongoose");
// import schema
const Schema = mongoose.Schema;

let rfqItemSchema = new Schema({
    
    RFQNo: {
    type: Number,
    default: 0000000000
  },

  ItemNo: {
    type: Number,
    default: 00
  },

  ItemCat: {
    type: String
  },

  Material: {
    type: String
  },

  MatDesc: {
    type: String
  },

  RFQQty: {
    type: Number
  },

  OUn: {
    type: String
  },

  DeliveryDate: {
    type: Date,
    default: Date.now
  },

  MatGroup: {
    type: String
  },

  Plant: {
    type: String
  },

  StorLoc: {
    type: String
  },

  DelFlag: {
    type: String
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
mongoose.model("rfqItem", rfqItemSchema);
