import * as Services from '../api/services';
import * as Url from '../api/Url';
import * as Utility from '../Utility/index';
import * as Const from '../Redux/Const';

export const AddExpenseApi = (des, amount, companyId) => async () => {
    let body = {
      amount: amount,
      description: des,
  
      company: companyId,
    };
    console.log('check body?>>>>>', body);
    let token = await Utility.getFromLocalStorge('token');
    console.log('chedk token', token);
    let res = await Services.post(Url.EXPENSE_MODULE, token, body);
    let response = await res.json();
    console.log('check rsponse of add', res);
    console.log('check rsponse of add', response);
  
    return res;
  };
  
  export const GetExpenseList = (id) => async dispatch => {
    let response = await Services.get(Url.EXPENSE_MODULE+'company/'+id);
    let res = await response.json();
  
    console.log('USER_INFO=====>', res);
    dispatch({
      type: Const.EXPENSE_LIST,
      payload: res,
    });
    return res;
  };
  
  export const DeleteExpenseApi = id => async () => {
    let token = await Utility.getFromLocalStorge('token');
    console.log('chedk token', token);
    let res = await Services.deleteApi(Url.EXPENSE_MODULE + id + '/', token);
    console.log('check rsponse of add', res);
    return res;
  };
  
  export const EditExpenseApi = (des, amount, companyId, id) => async () => {
    let body = {
      amount: amount,
      description: des,
  
      company: companyId,
    };
    console.log('check body?>>>>>', body);
    let token = await Utility.getFromLocalStorge('token');
    console.log('chedk token', token);
    let res = await Services.put(Url.EXPENSE_MODULE + id + '/', token, body);
    let response = await res.json();
    console.log('check rsponse of add', res);
    console.log('check rsponse of add', response);
  
    return res;
  };
  
  