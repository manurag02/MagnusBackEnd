// importing mongoose module
const mongoose = require("mongoose");
// import schema
const Schema = mongoose.Schema;

let rfqHeaderSchema = new Schema({
    
    RFQNo: {
    type: Number,
    default: 0000000000,
    unique: true
  },

  RFQDate: {
    type: Date,
    default: Date.now
  },

  CompCode: {
    type: String
  },

  PGrp: {
    type: String
  },

  PurOrg: {
    type: String
  },

  VendorNo: {
    type: Number,
    default: 0000000000,
  },

  VendorName: {
    type: String
  },

  CollNo: {
    type: String
  },

  QuotDeadline: {
    type: Date
  },

  StartDate: {
    type: Date
  },

  EndDate: {
    type: Date
  },

  ContactPer: {
    type: String
  },

  ContactNo: {
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
mongoose.model("rfqHeader", rfqHeaderSchema);
