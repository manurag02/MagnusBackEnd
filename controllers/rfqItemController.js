const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");

//Importing the model here
const rfqItemModel = mongoose.model("rfqItem");


let getAllRfqItem = (req, res) => {
    rfqItemModel.find()
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
    rfqItemModel.findOne({ RFQNo: req.params.RFQNo }, (err, result) => {
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


let viewByLineItem = (req, res) => {
    rfqItemModel.findOne({ RFQNo: req.params.RFQNo, ItemNo: req.params.ItemNo  }, (err, result) => {
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
let editRfqItem = (req, res) => {
  let options = req.body;
  console.log(options);
  rfqItemModel.update({ RFQNo: req.params.RFQNo , ItemNo: req.params.ItemNo }, options, {
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
  rfqItemModel.remove({ RFQNo: req.params.RFQNo, ItemNo: req.params.ItemNo }, (err, result) => {
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
let createRFQItem = (req, res) => {
  var today = Date.now();
  let id = shortid.generate();

  let newRFQItem = new rfqItemModel({
    RFQNo: req.body.RFQNo,
    ItemNo: req.body.ItemNo,
    ItemCat: req.body.ItemCat,
    Material: req.body.Material,
    MatDesc: req.body.MatDesc,
    RFQQty: req.body.RFQQty,
    OUn: req.body.OUn,
    DeliveryDate: req.body.DeliveryDate,
    MatGroup: req.body.MatGroup,
    Plant: req.body.Plant,
    StorLoc: req.body.StorLoc,
    DelFlag: req.body.DelFlag,
    Remark: req.body.Remark,
    CreatedBy: req.body.CreatedBy,
    CreatedDate: today,
    LastModified: today
  }); // end new blog model

  newRFQItem.save((err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  }); // end new blog save
};

module.exports = {
  getAllRfqItem: getAllRfqItem,
  viewByRFQNo: viewByRFQNo,
  viewByLineItem: viewByLineItem,
  editRfqItem: editRfqItem,
  deleteRfq: deleteRfq,
  createRFQItem:createRFQItem

};
