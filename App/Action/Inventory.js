import * as Services from '../api/services';
import * as Url from '../api/Url';
import * as Utility from '../Utility/index';
import * as Const from '../Redux/Const';

export const AddInventroy =
  (productId, companyId, supplier, cost, qunatity, stock, selling) =>
  async () => {
    let body = {
      supplier: supplier,
      quantity: parseInt(qunatity),
      cost_price: parseInt(cost),
      selling_price: parseInt(selling),
      restock_level: parseInt(stock),
      product: productId,
      company: companyId,
    };
    console.log('check body ', body);
    let token = await Utility.getFromLocalStorge('token');
    console.log('check token', token);
    let res = await Services.post(Url.INVENTORY_MODULE, token, body);

    let response = await res.json();
    console.log('check rsponse of add', res);
    console.log('check rsponse of add', response);

    return res;
  };

export const GetInvontoryList = (id) => async dispatch => {
  let response = await Services.get(Url.INVENTORY_MODULE+'company/'+id);
  let res = await response.json();

  console.log('USER_INFO=====>', res);
  dispatch({
    type: Const.INVONTORY_LIST,
    payload: res,
  });
  return res;
};


export const DeleteInventoryApi = id => async () => {
  let token = await Utility.getFromLocalStorge('token');
  console.log('chedk token', token);
  let res = await Services.deleteApi(Url.INVENTORY_MODULE + id + '/', token);
  console.log('check rsponse of add', res);
  return res;
};


export const EditInventoryApi =  (productId, companyId, supplier, cost, qunatity, stock, selling,id) => async () => {
  let body = {
    supplier: supplier,
    quantity: parseInt(qunatity),
    cost_price: parseInt(cost),
    selling_price: parseInt(selling),
    restock_level: parseInt(stock),
    product: productId,
    company: companyId,
  };
  console.log('check body?>>>>>', body);
  let token = await Utility.getFromLocalStorge('token');
  console.log('chedk token', token);
  let res = await Services.put(Url.INVENTORY_MODULE + id + '/', token, body);
  let response = await res.json();
  console.log('check rsponse of add', res);
  console.log('check rsponse of add', response);

  return res;
};


export const GetLowStockList = (id) => async dispatch => {
  let token = await Utility.getFromLocalStorge('token');

  let response = await Services.get(Url.LOW_RESTOCK+id+'/inventory/alert/',token);
  let res = await response.json();

  console.log('USER_INFO=====>', res);
  // dispatch({
  //   type: Const.INVONTORY_LIST,
  //   payload: res,
  // });
  return res;
};