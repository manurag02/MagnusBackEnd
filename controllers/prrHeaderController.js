const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");

//Importing the model here
const prrHeaderModel = mongoose.model("prrHeader");


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

module.exports = {
  getAllprrHeader: getAllprrHeader,
  viewByPRRNo: viewByPRRNo,
  editPRR: editPRR,
  deletePRR: deletePRR,
  createPRRHeader:createPRRHeader

};
