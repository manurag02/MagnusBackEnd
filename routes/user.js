const express = require("express");
const userController = require("../controllers/userController");
const appConfig = require("../config/appConfig");

let setRouter = app => {
  let baseUrl = appConfig.apiVersion + "/user";

  app.get(baseUrl + "/all", userController.getAllUser);

  app.get(baseUrl + "/view/:uid", userController.viewByUserCode);

  app.get(baseUrl + "/view/by/department/:dept", userController.viewByDept);

  app.post(baseUrl + "/:uid/delete", userController.deleteUser);

  app.put(baseUrl + "/:uid/edit", userController.editUser);

  app.post(baseUrl + "/create", userController.createUser);
}; // end setRouter function

module.exports = {
  setRouter: setRouter
};
