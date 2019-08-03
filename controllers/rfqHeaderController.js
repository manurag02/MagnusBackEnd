const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");

//Importing the model here
const rfqHeaderModel = mongoose.model("rfqHeader");


let getAllRfqHeader = (req, res) => {
    rfqHeaderModel.find()
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
let viewByRFQNo = (req, res) => {
    rfqHeaderModel.findOne({ RFQNo: req.params.RFQNo }, (err, result) => {
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
 * function to read blogs by department.
 */
let viewByCollNo = (req, res) => {
    rfqHeaderModel.find({ CollNo: req.params.CollNo }, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else if (result == undefined || result == null || result == "") {
      console.log("No records Found");
      res.send("No records Found");
    } else {
      res.send(result);
    }
  });
};

/**
 * function to read users by userCode.
 */
// let viewByAuthor = (req, res) => {
//   BlogModel.find({ author: req.params.author }, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     } else if (result == undefined || result == null || result == "") {
//       console.log("No Blog Found");
//       res.send("No Blog Found");
//     } else {
//       res.send(result);
//     }
//   });
// };

/**
 * function to edit users by admin.
 */
let editRfq = (req, res) => {
  let options = req.body;
  console.log(options);
  rfqHeaderModel.update({ RFQNo: req.params.RFQNo }, options, {
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
let deleteRfq = (req, res) => {
  console.log("delete request" + req.params);
  rfqHeaderModel.remove({ RFQNo: req.params.RFQNo }, (err, result) => {
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
let createRFQHeader = (req, res) => {
  var today = Date.now();
  let id = shortid.generate();

  let newRFQHeader = new rfqHeaderModel({
    RFQNo: req.body.RFQNo,
    RFQDate: req.body.RFQDate,
    CompCode: req.body.CompCode,
    PGrp: req.body.PGrp,
    PurOrg: req.body.PurOrg,
    VendorNo: req.body.VendorNo,
    VendorName: req.body.VendorName,
    CollNo: req.body.CollNo,
    QuotDeadline: req.body.QuotDeadline,
    StartDate: req.body.StartDate,
    EndDate: req.body.EndDate,
    ContactPer: req.body.ContactPer,
    ContactNo: req.body.ContactNo,
    CreatedBy: req.body.CreatedBy,
    CreatedDate: today,
    LastModified: today
  }); // end new blog model

  newRFQHeader.save((err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  }); // end new blog save
};

module.exports = {
  getAllRfqHeader: getAllRfqHeader,
  viewByRFQNo: viewByRFQNo,
  viewByCollNo: viewByCollNo,
  editRfq: editRfq,
  deleteRfq: deleteRfq,
  createRFQHeader:createRFQHeader

};
