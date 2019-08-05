const express = require("express");
//const prrHeaderController = require("../controllers/mstCompCode");
const mstCompCodeController = require("../controllers/mstCompCodeController");
const appConfig = require("../config/appConfig");

let setRouter = app => {
  let baseUrl = appConfig.apiVersion + "/CompCode";
  

  //PRR Header
  app.get(baseUrl + "/all", mstCompCodeController.getAllCompCode);

  app.get(baseUrl + "/view/:CompCode", mstCompCodeController.viewByCompCode);

  app.post(baseUrl + "/:CompCode/delete", mstCompCodeController.deleteCompCode);

  app.put(baseUrl + "/:CompCode/edit", mstCompCodeController.editCompCode);

  app.post(baseUrl + "/create", mstCompCodeController.createCompCode);


  
}; // end setRouter function


module.exports = {
  setRouter: setRouter
  
};
