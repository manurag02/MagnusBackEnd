const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");

//Importing the model here
const mstCompCode = mongoose.model("mstCompCode");


let getAllCompCode = (req, res) => {
    mstCompCode.find()
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
let viewByCompCode = (req, res) => {
    mstCompCode.findOne({ CompCode: req.params.CompCode }, (err, result) => {
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
let editCompCode = (req, res) => {
  let options = req.body;
  console.log(options);
  mstCompCode.update({ CompCode: req.params.CompCode }, options, {
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
let deleteCompCode = (req, res) => {
  console.log("delete request" + req.params);
  mstCompCode.remove({ CompCode: req.params.CompCode }, (err, result) => {
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
let createCompCode = (req, res) => {
  var today = Date.now();
  let id = shortid.generate();

  let newCompCode = new mstCompCode({
    CompCode: req.body.CompCode,
    CompName: req.body.CompName,
    City: req.body.City,
    CountryKey: req.body.CountryKey,
    Currency: req.body.Currency,
    CreatedBy: req.body.CreatedBy,
    CreatedDate: req.body.CreatedDate,
    LastModified: req.body.LastModified
  }); // end new blog model

  newCompCode.save((err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  }); // end new blog save
};

module.exports = {
  getAllCompCode: getAllCompCode,
  viewByCompCode: viewByCompCode,
  editCompCode: editCompCode,
  deleteCompCode: deleteCompCode,
  createCompCode:createCompCode

};
