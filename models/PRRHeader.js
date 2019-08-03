// importing mongoose module
const mongoose = require("mongoose");
// import schema
const Schema = mongoose.Schema;

let prrHeaderSchema = new Schema({
    
//General Data
    PRRNo: {
    type: Number,
    default: 0000000000,
    unique: true
  },

  PRRDate: {
    type: Date,
    default: Date.now
  },

//End General Data

//General Condition
  Plant: {
    type: String
  },

  Contractor: {
    type: String
  },

  Orginator: {
    type: String
  },

  TotalAmount: {
    type: Number,
    default: 0.00
  },

  PRNo: {
    type: Number,
  },
  
  DeliveryDate: {
    type: Date,
    default: Date.now
  },


  POType: {
    type: String
  },

  DeliveryTerms: {
    type: String
  },

  WBSCode: {
    type: String
  },

  PaymentTerms: {
    type: String
  },


// End General Condition


// Commercial Review
 Subject: {
    type: String
  },

  PurOfPur: {
    type: String
  },

  VendorSelection: {
    type: String
  },

  PriceTC: {
    type: String
  },

  AnalysisVenPrice: {
    type: String
  },

  Conclusion: {
    type: String
  },

  Others: {
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

//End Commercial View

});

// userSchema.index({ uid: 1, userCode: 1 }, { unique: true });
mongoose.model("prrHeader", prrHeaderSchema);
