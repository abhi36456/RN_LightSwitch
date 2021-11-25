import {
  USER_INFORMATION,
  COMPANY_LIST,
  CUSTOMER_LIST,
  PRODUCT_LIST,
  EXPENSE_LIST,
  INCOME_LIST,
  INVOICE_LIST,
  SELECTED_COMPANY_DATA,
  INVONTORY_LIST,
} from './Const';
const initialState = {
  USER_INFORMATION: {},
  COMPANY_LIST: [],
  CUSTOMER_LIST: [],
  PRODUCT_LIST: [],
  EXPENSE_LIST: [],
  INCOME_LIST: [],
  INVOICE_LIST: [],
  INVONTORY_LIST: [],
  SELECTED_COMPANY_DATA: {},
};

////========== SET ALL DATA IN STORE BY UNIQUE STATE ========
export default function (state = initialState, {type, payload}) {
  switch (type) {
    case USER_INFORMATION: {
      return {
        ...state,
        USER_INFORMATION: payload,
      };
    }
    case COMPANY_LIST: {
      return {
        ...state,
        COMPANY_LIST: payload,
      };
    }
    case CUSTOMER_LIST: {
      return {
        ...state,
        CUSTOMER_LIST: payload,
      };
    }
    case PRODUCT_LIST: {
      return {
        ...state,
        PRODUCT_LIST: payload,
      };
    }
    case EXPENSE_LIST: {
      return {
        ...state,
        EXPENSE_LIST: payload,
      };
    }
    case INCOME_LIST: {
      return {
        ...state,
        INCOME_LIST: payload,
      };
    }
    case INVOICE_LIST: {
      return {
        ...state,
        INVOICE_LIST: payload,
      };
    }
    case SELECTED_COMPANY_DATA: {
      return {
        ...state,
        SELECTED_COMPANY_DATA: payload,
      };
    }
    case INVONTORY_LIST: {
      return {
        ...state,
        INVONTORY_LIST: payload,
      };
    }
    default:
      return state;
  }
}
