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
// echo the client NW RFC lib version
 
// and connect
client.open()
.then(()=>{
    console.log("sap connected")
    // invoke remote enabled ABAP function module
    client.call('STFC_CONNECTION',
      { REQUTEXT: 'H€llö SAP!' }).then((res)=>{
        console.log('Result STFC_CONNECTION:', res);
      }).catch((err)=>{
        console.error('Error invoking STFC_CONNECTION:', err);
      })
}).catch((err)=>{
    console.error('could not connect to server', err);
})

/*
const getSAPConnection = async (connParams) => {
    try {
        const client = new rfcClient(connParams);
        await client.open();
        return client;
    } catch (error) {
        throw new Error(`Failed to create a SAP connection: ${error.message}`);
    }
}
ꨀ

const invokeSAPRFC = async (client, funtionModule, params) => {
    try {
        console.log(`Invoking ${funtionModule}`);
        let data = await client.call(funtionModule,params);
        client.close();
        return  JSON.parse(JSON.stringify(data));
    } catch (error) {
        throw new Error(`Failed to invoke RFC call for module ${funtionModule}: ${error.message}`);
    }
}*/