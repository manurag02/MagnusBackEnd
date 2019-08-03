const express = require("express");
const rfqItemController = require("../controllers/rfqItemController");
const appConfig = require("../config/appConfig");

let setRouter = app => {
  let baseUrl = appConfig.apiVersion + "/rfqItem";

  app.get(baseUrl + "/all", rfqItemController.getAllRfqItem);

  app.get(baseUrl + "/view/:RFQNo", rfqItemController.viewByRFQNo);

  app.get(baseUrl + "/view/by/LineItem/:RFQNo&:ItemNo", rfqItemController.viewByLineItem);

  app.post(baseUrl + "/:RFQNo&:ItemNo/delete", rfqItemController.deleteRfq);

  app.put(baseUrl + "/:RFQNo/edit", rfqItemController.editRfqItem);

  app.post(baseUrl + "/create", rfqItemController.createRFQItem);
}; // end setRouter function


module.exports = {
  setRouter: setRouter
  
};
