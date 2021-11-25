import {Alert} from 'react-native';
import * as Services from '../api/services';
import * as Url from '../api/Url';
import * as Utility from '../Utility/index';
import * as Const from './Const';

export const Create = body => async () => {
  let response = await Services.post(Url.REGISTER, '', body);

  let res = await response.json();
  console.log("check response of register",res)
  return res;
};
export const User_Login = body => async () => {
  console.log('body===>', body);
  let response = await Services.post(Url.LOGIN, '', body);
  let res = await response.json();
  console.log("check body >>>>>>>>>", res)
  let token = await Utility.getFromLocalStorge('token');
  console.log('token===>', token);

  let expryTime = await Utility.getFromLocalStorge('expryTime');
  return res;
};



export const ForgotPwd_Api = email => async () => {
  let response = await Services.get(Url.FORGOT+email);
  console.log('response_forgot_api===>', response);
  return response;
};



export const Get_User=(id)=>async()=>{
  let response = await Services.get(Url.GET_USER_BY_ID+id);
console.log("check reponse",response)
return response
}


export const Reset_Password=(body)=>async()=>{
  let userId=await Utility.getFromLocalStorge('userId')
  let token=await Utility.getFromLocalStorge('token')
console.log("check user id",userId)
console.log("check user id",token)
let response = await Services.put(Url.RESET_PASSWORD+userId,token,body);
return response
}