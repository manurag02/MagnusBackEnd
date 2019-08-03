const express = require("express");
const rfqHeaderController = require("../controllers/rfqHeaderController");
const appConfig = require("../config/appConfig");

let setRouter = app => {
  let baseUrl = appConfig.apiVersion + "/rfqHeader";

  app.get(baseUrl + "/all", rfqHeaderController.getAllRfqHeader);

  app.get(baseUrl + "/view/:RFQNo", rfqHeaderController.viewByRFQNo);

  app.get(baseUrl + "/view/by/CollNo/:CollNo", rfqHeaderController.viewByCollNo);

  app.post(baseUrl + "/:RFQNo/delete", rfqHeaderController.deleteRfq);

  app.put(baseUrl + "/:RFQNo/edit", rfqHeaderController.editRfq);

  app.post(baseUrl + "/create", rfqHeaderController.createRFQHeader);
}; // end setRouter function


module.exports = {
  setRouter: setRouter
  
};
