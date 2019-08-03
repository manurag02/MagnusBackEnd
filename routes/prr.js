const express = require("express");
//const prrHeaderController = require("../controllers/prrHeaderController");
const prrController = require("../controllers/prrController");
const appConfig = require("../config/appConfig");

let setRouter = app => {
  let baseUrl = appConfig.apiVersion + "/prr";
  let baseUrlAppr = appConfig.apiVersion + "/prrApprLine";
  let baseUrlTotAmtComp = appConfig.apiVersion + "/prrTotAmtComp";
  let baseUrlItemizePrice = appConfig.apiVersion + "/prrItemizePrice";


  //PRR Header
  app.get(baseUrl + "/all", prrController.getAllprrHeader);

  app.get(baseUrl + "/view/:PRRNo", prrController.viewByPRRNo);

  app.post(baseUrl + "/:PRRNo/delete", prrController.deletePRR);

  app.put(baseUrl + "/:RFQNo/edit", prrController.editPRR);

  app.post(baseUrl + "/create", prrController.createPRRHeader);


  //PRR Approval Line
  app.get(baseUrlAppr + "/all", prrController.viewByApprLine);

  app.get(baseUrlAppr + "/view/:PRRNo&:ApprSeq", prrController.viewByApprLineSeq);

  app.post(baseUrlAppr + "/:PRRNo&:ApprSeq/delete", prrController.deleteApprLineSeq);

  app.put(baseUrlAppr + "/:PRRNo&:ApprSeq/edit", prrController.editApprLineSeq);

  app.post(baseUrlAppr + "/create", prrController.createApprLine);


  //PRR Tot Amt Comp
  app.get(baseUrlTotAmtComp + "/all", prrController.viewTotAmtCompByAll);

  app.get(baseUrlTotAmtComp + "/view/:PRRNo&:Bidder", prrController.viewTotAmtCompByBidder);

  app.post(baseUrlTotAmtComp + "/:PRRNo&:Bidder/delete", prrController.deleteTotAmtComp);

  app.put(baseUrlTotAmtComp + "/:PRRNo&:Bidder/edit", prrController.editTotAmtComp);

  app.post(baseUrlTotAmtComp + "/create", prrController.createTotAmtComp);


  //PRR Itemize Price Analysis
  app.get(baseUrlItemizePrice + "/all", prrController.viewTotItemizePriceByAll);

  app.get(baseUrlItemizePrice + "/view/:PRRNo&:Item", prrController.viewItemizePriceByLineItem);

  app.post(baseUrlItemizePrice + "/:PRRNo&:Item/delete", prrController.deleteItemizePrice);

  app.put(baseUrlItemizePrice + "/:PRRNo&:Item/edit", prrController.editItemizePrice);

  app.post(baseUrlItemizePrice + "/create", prrController.createItemPriceAnalysis);

}; // end setRouter function


module.exports = {
  setRouter: setRouter
  
};
