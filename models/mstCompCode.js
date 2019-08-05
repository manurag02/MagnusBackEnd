// importing mongoose module
const mongoose = require("mongoose");
// import schema
const Schema = mongoose.Schema;

let mstCompCodeSchema = new Schema({
    
//General Data
  CompCode: {
    type: String
  },

  CompName: {
    type: String
  },

  City: {
    type: String
  },

  CountryKey: {
    type: String
  },

  Currency: {
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
mongoose.model("mstCompCode", mstCompCodeSchema);
