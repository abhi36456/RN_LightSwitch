import * as Services from '../api/services';
import * as Url from '../api/Url';
import * as Utility from '../Utility/index';
import * as Const from '../Redux/Const';


export const AddIncome=(products,companyId)=>async()=>{
    let body ={
      products: products,
      company: companyId
    }
    console.log("check body ",body)
    let token = await Utility.getFromLocalStorge('token');
    let res = await Services.post(Url.INCOME_MODULE, token, body);
    
    let response = await res.json();
    console.log('check rsponse of add', res);
    console.log('check rsponse of add', response);
    
    return res;
    }
    

export const GetIncomeList = (id) => async dispatch => {
    let response = await Services.get(Url.INCOME_MODULE+'company/'+id);
    let res = await response.json();
  
    console.log('USER_INFO=====>', res);
    dispatch({
      type: Const.INCOME_LIST,
      payload: res,
    });
    return res;
  };
  
  
  
  export const DeleteIncomeApi = id => async () => {
    let token = await Utility.getFromLocalStorge('token');
    console.log('chedk token', token);
    let res = await Services.deleteApi(Url.INCOME_MODULE + id + '/', token);
    console.log('check rsponse of add', res);
    return res;
  };