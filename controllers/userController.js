const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");

//Importing the model here
const UserModel = mongoose.model("User");

let getAllUser = (req, res) => {
  UserModel.find()
    .select("-__v -_id")
    .lean()
    .exec((err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else if (result == undefined || result == null || result == "") {
        console.log("No Users Found");
        res.send("No Users Found");
      } else {
        res.send(result);
      }
    });
}; // end get all users

/**
 * function to read single userCode.
 */
let viewByUserCode = (req, res) => {
  UserModel.findOne({ uid: req.params.uid }, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else if (result == undefined || result == null || result == "") {
      console.log("No User Found");
      res.send("No User Found");
    } else {
      res.send(result);
    }
  });
};

/**
 * function to read blogs by department.
 */
let viewByDept = (req, res) => {
  UserModel.find({ department: req.params.department }, (err, result) => {
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
let editUser = (req, res) => {
  let options = req.body;
  console.log(options);
  UserModel.update({ uid: req.params.uid }, options, {
    multi: true
  }).exec((err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else if (result == undefined || result == null || result == "") {
      console.log("No User Found");
      res.send("No User Found");
    } else {
      res.send(result);
    }
  });
};

/**
 * function to delete the user.
 */
let deleteUser = (req, res) => {
  console.log("delete request" + req.params);
  UserModel.remove({ uid: req.params.uid }, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else if (result == undefined || result == null || result == "") {
      console.log("No User Found");
      res.send("No User Found");
    } else {
      res.send(result);
    }
  });
};

/**
 * function to create the user.
 */
let createUser = (req, res) => {
  var today = Date.now();
  let id = shortid.generate();

  let newUser = new UserModel({
    uid: id,
    userCode: req.body.userCode,
    userFullName: req.body.userFullName,
    department: req.body.department,
    mobile: req.body.mobile,
    email: req.body.email,
    userID: req.body.userID,
    password: req.body.password,
    created: today,
    lastModified: today
  }); // end new blog model

  newUser.save((err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  }); // end new blog save
};

module.exports = {
  getAllUser: getAllUser,
  createUser: createUser,
  viewByUserCode: viewByUserCode,
  viewByDept: viewByDept,
  editUser: editUser,
  deleteUser: deleteUser
};
