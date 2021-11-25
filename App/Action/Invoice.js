import * as Services from '../api/services';
import * as Url from '../api/Url';
import * as Utility from '../Utility/index';
import * as Const from '../Redux/Const';

export const AddInvoice = (products, companyId, customerId) => async () => {
  let body = {
    products: products,
    company: companyId,
    customer: customerId,
  };
  console.log('check body ', body);
  let token = await Utility.getFromLocalStorge('token');
  console.log('check token ', token);

  let res = await Services.post(Url.INVOICE_MODULE, token, body);

  let response = await res.json();
  console.log('check rsponse of add', res);
  console.log('check rsponse of add', response);

  return res;
};

export const GetInvoiceList = (id) => async dispatch => {
  let response = await Services.get(Url.INVOICE_MODULE + 'company/'+id);
  let res = await response.json();

  console.log('USER_INFO=====>', res);
  dispatch({
    type: Const.INVOICE_LIST,
    payload: res,
  });
  return res;
};
export const EmailSendApi= id => async () => {
  let token = await Utility.getFromLocalStorge('token');
  console.log('chedk token', token);
  let res = await Services.get(Url.INVOICE_EMAIL_MODULE +id, token);
  console.log('check rsponse of INVOICE EMAIL', res);
  return res;
}
export const DeleteInvoiceApi = id => async () => {
  let token = await Utility.getFromLocalStorge('token');
  console.log('chedk token', token);
  let res = await Services.deleteApi(Url.INVOICE_MODULE + id + '/', token);
  console.log('check rsponse of add', res);
  return res;
};
