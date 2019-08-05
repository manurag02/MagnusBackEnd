const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");

//Importing the model here
const prrHeaderModel = mongoose.model("prrHeader");
const prrApprLineModel = mongoose.model("prrApprLine");
const prrTotAmtCompModel = mongoose.model("prrTotAmtComp");
const prrItemPriceAnalysisModel = mongoose.model("prrItemPriceAnalysis");

import SapOperationsServices from '../services/SapOperations.service';

var mVar;
mVar = SapOperationsServices.invokeRFCFunction();

//----------START prrHeader------------------

let getAllprrHeader = (req, res) => {
    prrHeaderModel.find()
    .select("-__v -_id")
    .lean()
    .exec((err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else if (result == undefined || result == null || result == "") {
        console.log("No Records Found");
        res.send("No Records Found");
      } else {
        res.send(result);
      }
    });
}; // end get all users


/**
 * function to read single userCode.
 */
let viewByPRRNo = (req, res) => {
    prrHeaderModel.findOne({ PRRNo: req.params.PRRNo }, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else if (result == undefined || result == null || result == "") {
      console.log("No Records Found");
      res.send("No Records Found");
    } else {
      res.send(result);
    }
  });
};



/**
 * function to edit users by admin.
 */
let editPRR = (req, res) => {
  let options = req.body;
  console.log(options);
  prrHeaderModel.update({ PRRNo: req.params.PRRNo }, options, {
    multi: true
  }).exec((err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else if (result == undefined || result == null || result == "") {
      console.log("No Records Found");
      res.send("No Records Found");
    } else {
      res.send(result);
    }
  });
};

/**
 * function to delete the user.
 */
let deletePRR = (req, res) => {
  console.log("delete request" + req.params);
  rfqHeaderModel.remove({ PRRNo: req.params.PRRNo }, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else if (result == undefined || result == null || result == "") {
      console.log("No Records Found");
      res.send("No Records Found");
    } else {
      res.send(result);
    }
  });
};

/**
 * function to create the user.
 */
let createPRRHeader = (req, res) => {
  var today = Date.now();
  let id = shortid.generate();

  let newPRRHeader = new prrHeaderModel({
    PRRNo: req.body.PRRNo,
    PRRDate: req.body.PRRDate,
    Plant: req.body.Plant,
    Contractor: req.body.Contractor,
    Orginator: req.body.Orginator,
    TotalAmount: req.body.TotalAmount,
    DeliveryDate: req.body.DeliveryDate,
    POType: req.body.POType,
    DeliveryTerms: req.body.DeliveryTerms,
    WBSCode: req.body.WBSCode,
    PaymentTerms: req.body.PaymentTerms,
    Subject: req.body.Subject,
    PurOfPur: req.body.PurOfPur,
    VendorSelection: req.body.VendorSelection,
    PriceTC: req.body.PriceTC,
    AnalysisVenPrice: req.body.AnalysisVenPrice,
    Conclusion: req.body.Conclusion,
    Others: req.body.Others,
    CreatedBy: req.body.CreatedBy,
    CreatedDate: req.body.CreatedDate,
    LastModified: req.body.LastModified
  }); // end new blog model

  newPRRHeader.save((err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  }); // end new blog save
};

//----------END prrHeader------------------


//----------START prrApprLine--------------

/**
* function to read single parameter.
*/
let viewByApprLine = (req, res) => {
  prrApprLineModel.findOne({ PRRNo: req.params.PRRNo }, (err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};


let viewByApprLineSeq = (req, res) => {
  prrApprLineModel.findOne({ PRRNo: req.params.PRRNo, ApprSeq: req.params.ApprSeq }, (err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};



/**
* function to edit users by admin.
*/
let editApprLineSeq = (req, res) => {
let options = req.body;
console.log(options);
prrApprLineModel.update({ PRRNo: req.params.PRRNo, ApprSeq: req.params.ApprSeq }, options, {
  multi: true
}).exec((err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};

/**
* function to delete the user.
*/
let deleteApprLineSeq = (req, res) => {
console.log("delete request" + req.params);
prrApprLineModel.remove({ PRRNo: req.params.PRRNo, ApprSeq: req.params.ApprSeq }, (err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};

/**
* function to create the user.
*/
let createApprLine = (req, res) => {
var today = Date.now();
let id = shortid.generate();

let newApprLine = new prrApprLineModel({
  PRRNo: req.body.PRRNo,
  ApprSeq: req.body.ApprSeq,
  ApprBy: req.body.ApprBy,
  ApprDate: req.body.ApprDate,
  ApprStatus: req.body.ApprStatus,
  CreatedBy: req.body.CreatedBy,
  CreatedDate: req.body.CreatedDate,
  LastModified: req.body.LastModified
}); // end new blog model

newApprLine.save((err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else {
    res.send(result);
  }
}); // end new blog save
};

//----------END prrApprLine--------------



//----------START prrTotAmtComp--------------

/**
* function to read single parameter.
*/
let viewTotAmtCompByAll = (req, res) => {
  prrTotAmtCompModel.findOne({ PRRNo: req.params.PRRNo }, (err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};


let viewTotAmtCompByBidder = (req, res) => {
  prrTotAmtCompModel.findOne({ PRRNo: req.params.PRRNo, Bidder: req.params.Bidder }, (err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};



/**
* function to edit users by admin.
*/
let editTotAmtComp = (req, res) => {
let options = req.body;
console.log(options);
prrTotAmtCompModel.update({ PRRNo: req.params.PRRNo, Bidder: req.params.Bidder }, options, {
  multi: true
}).exec((err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};

/**
* function to delete the user.
*/
let deleteTotAmtComp = (req, res) => {
console.log("delete request" + req.params);
prrTotAmtCompModel.remove({ PRRNo: req.params.PRRNo, Bidder: req.params.Bidder }, (err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};

/**
* function to create the user.
*/
let createTotAmtComp = (req, res) => {
var today = Date.now();
let id = shortid.generate();

let newTotAmtComp = new prrTotAmtCompModel({
  PRRNo: req.body.PRRNo,
  Bidder: req.body.Bidder,
  TBE: req.body.TBE,
  InitialPrice: req.body.InitialPrice,
  FinalPrice: req.body.FinalPrice,
  NegoRate: req.body.NegoRate,
  Remark: req.body.Remark,
  CreatedBy: req.body.CreatedBy,
  CreatedDate: req.body.CreatedDate,
  LastModified: req.body.LastModified
}); // end new blog model

newTotAmtComp.save((err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else {
    res.send(result);
  }
}); // end new blog save
};

//----------END TotAmtComp--------------




//----------START Itemize Price Analysis--------------

/**
* function to read single parameter.
*/
let viewTotItemizePriceByAll = (req, res) => {
  prrItemPriceAnalysisModel.findOne({ PRRNo: req.params.PRRNo }, (err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};


let viewItemizePriceByLineItem = (req, res) => {
  prrItemPriceAnalysisModel.findOne({ PRRNo: req.params.PRRNo, Item: req.params.Item }, (err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};



/**
* function to edit users by admin.
*/
let editItemizePrice = (req, res) => {
let options = req.body;
console.log(options);
prrItemPriceAnalysisModel.update({ PRRNo: req.params.PRRNo, Item: req.params.Item }, options, {
  multi: true
}).exec((err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};

/**
* function to delete the user.
*/
let deleteItemizePrice = (req, res) => {
console.log("delete request" + req.params);
prrItemPriceAnalysisModel.remove({ PRRNo: req.params.PRRNo, Item: req.params.Item }, (err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else if (result == undefined || result == null || result == "") {
    console.log("No Records Found");
    res.send("No Records Found");
  } else {
    res.send(result);
  }
});
};

/**
* function to create the user.
*/
let createItemPriceAnalysis = (req, res) => {
var today = Date.now();
let id = shortid.generate();

let newItemPriceAnalysis = new prrItemPriceAnalysisModel({
  PRRNo: req.body.PRRNo,
  Item: req.body.Item,
  MaterialCode: req.body.MaterialCode,
  MaterialDesc: req.body.MaterialDesc,
  Qty: req.body.Qty,
  OUn: req.body.OUn,
  Bidder: req.body.Bidder,
  UnitPrice: req.body.UnitPrice,
  PrevPOPrice: req.body.PrevPOPrice,
  PrevPONo: req.body.PrevPONo,
  PrevPODate: req.body.PrevPODate,
  PrevPOCurr: req.body.PrevPOCurr,
  CreatedBy: req.body.CreatedBy,
  CreatedDate: req.body.CreatedDate,
  LastModified: req.body.LastModified
}); // end new blog model

newItemPriceAnalysis.save((err, result) => {
  if (err) {
    console.log(err);
    res.send(err);
  } else {
    res.send(result);
  }
}); // end new blog save
};

//----------START Itemize Price Analysis--------------



module.exports = {
  //PRR Header
  getAllprrHeader: getAllprrHeader,
  viewByPRRNo: viewByPRRNo,
  editPRR: editPRR,
  deletePRR: deletePRR,
  createPRRHeader:createPRRHeader,

  //Approval Line
  viewByApprLine: viewByApprLine,
  viewByApprLineSeq: viewByApprLineSeq,
  editApprLineSeq: editApprLineSeq,
  deleteApprLineSeq: deleteApprLineSeq,
  createApprLine: createApprLine,

  //Tot Amt Comp
  viewTotAmtCompByAll: viewTotAmtCompByAll,
  viewTotAmtCompByBidder: viewTotAmtCompByBidder,
  editTotAmtComp: editTotAmtComp,
  deleteTotAmtComp: deleteTotAmtComp,
  createTotAmtComp: createTotAmtComp,

  //Itemize Price Analysis
  viewTotItemizePriceByAll: viewTotItemizePriceByAll,
  viewItemizePriceByLineItem: viewItemizePriceByLineItem,
  editItemizePrice: editItemizePrice,
  deleteItemizePrice: deleteItemizePrice,
  createItemPriceAnalysis: createItemPriceAnalysis

};
