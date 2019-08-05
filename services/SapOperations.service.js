"use strict";
var rfcClient = require('node-rfc').Client;
var rfc = require('node-rfc');

 
var abapSystem = {
  user: 'Amol',
  passwd: 'welcome123',
  ashost: '45.64.169.40',
  sysnr: '10',
  client: '800',
  //saprouter: '/H/111.22.33.177/S/3299/W/tdkf9d/H/132.139.17.14/H/'
};



  console.log("*********************")
// create new client
const client = new rfcClient(abapSystem);


//Input Parameter for Master Data
var mstparams = {
    IM_VENDOR_CREATION_DATE: '16.05.1995', 
    IM_MATERIAL_CREATION_DATE: '17.07.2018' 
};
const FuncModuleMst = 'ZMASTER_INFO';




//Input Parameter for Quotation List
var quotlistparams = {
  IM_COLLECTIVE_NUMBER: '1234', 
};
const FuncModuleQuotList = 'ZFM_QUOTATION_LIST';



// echo the client NW RFC lib version
 
const invokeRFCFunction = async (client, funtionModule, params) => {
    // try {
    //     console.log(`Invoking ${funtionModule}`);
        
    //     let data = await client.call(funtionModule,params);
    //     client.close();
    //     console.log(data);
    //     return  JSON.parse(JSON.stringify(data));
    // } catch (error) {
    //     throw new Error(`Failed to invoke RFC call for module ${funtionModule}: ${error.message}`);
    // }

    client.open()
.then(()=>{
    console.log("sap connected")
    // invoke remote enabled ABAP function module
    client.call(funtionModule,params)
      .then((res)=>{
        console.log(`Result ${funtionModule}:`, res.T_QUOTATION_LIST);
        client.close();
        return  JSON.parse(JSON.stringify(res.T_QUOTATION_LIST));
      }).catch((err)=>{
        console.error(`Error invoking ${funtionModule}:`, err);
        client.close();
      })
}).catch((err)=>{
    console.error('could not connect to server', err);
}) 
}

////Calling Master Data Function
//console.log(invokeRFCFunction(client,FuncModuleMst,mstparams));

//Calling Quotation List Function
console.log(invokeRFCFunction(client,FuncModuleQuotList,quotlistparams));



module.exports = {
  invokeRFCFunction: invokeRFCFunction
  
};










// and connect
//comment
/*
client.open()
.then(()=>{
    console.log("sap connected")
    // invoke remote enabled ABAP function module
    client.call('STFC_CONNECTION',
      { REQUTEXT: 'H€llö SAP!' }).then((res)=>{
        console.log('Result STFC_CONNECTION:', res.ECHOTEXT);
      }).catch((err)=>{
        console.error('Error invoking STFC_CONNECTION:', err);
      })
}).catch((err)=>{
    console.error('could not connect to server', err);
}) 
*/



/*
//Amol Display SAP Quotation List
client.open()
.then(()=>{
    console.log("sap connected")
    // invoke remote enabled ABAP function module
    client.call('ZMASTER_INFO',
      { IM_VENDOR_CREATION_DATE: '16.05.1995', IM_MATERIAL_CREATION_DATE: '17.07.2018' },
      ).then((res)=>{
        console.log('Result ZMASTER_INFO:', res.T_COMPANYCODE_INFO);
        client.close();
      }).catch((err)=>{
        console.error('Error invoking ZMASTER_INFO:', err);
        client.close();
      })
}).catch((err)=>{
    console.error('could not connect to server', err);
}) 

//End
*/



/*
const getSAPConnection = async (abapSystem) => {
    try {
        const client = new rfcClient(abapSystem);
        await client.open();
        return client;
    } catch (error) {
        throw new Error(`Failed to create a SAP connection: ${error.message}`);
    }
}

*/

