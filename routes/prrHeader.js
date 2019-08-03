const express = require("express");
const prrHeaderController = require("../controllers/prrHeaderController");
const appConfig = require("../config/appConfig");

let setRouter = app => {
  let baseUrl = appConfig.apiVersion + "/prrHeader";

  app.get(baseUrl + "/all", prrHeaderController.getAllprrHeader);

  app.get(baseUrl + "/view/:PRRNo", prrHeaderController.viewByPRRNo);

  app.post(baseUrl + "/:PRRNo/delete", prrHeaderController.deletePRR);

  app.put(baseUrl + "/:RFQNo/edit", prrHeaderController.editPRR);

  app.post(baseUrl + "/create", prrHeaderController.createPRRHeader);
}; // end setRouter function


module.exports = {
  setRouter: setRouter
  
};
