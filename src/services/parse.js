import Parse from 'parse';


let config = {
    back4app_appId:"zRGylBSuB6QrHBDTWgEMafNsydz1cOqSZwSu5jlV", //import.meta.env.VITE_Back4App_AppId,
    back4app_jsKey:"8SvsEjt8KWhHeEmx41BnEaZ791G4SivswF0kF3Mt" //import.meta.env.VIET_Back4App_JSKey
  };

Parse.initialize(config.back4app_appId,config.back4app_jsKey);
Parse.serverURL = 'https://parseapi.back4app.com/';

export default {}
