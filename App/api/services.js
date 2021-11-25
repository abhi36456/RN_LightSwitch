import * as Url from './Url';
import {alert, Alert} from 'react-native';

export const get = async (url, token) => {
  var headers;

  if (token == '' || token == null || token == undefined) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  } else {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token,
    };
  }
  const completeUrl = Url.BASE_URL + url;
  console.log('completeUrl', completeUrl);

  const response = await fetch(completeUrl, {
    method: 'GET',
    headers,
  });
  let res = await response.json();
  return res;

  if (res !== null) {
    if (res !== null && Object.keys(res).length !== 0) {
      if (res.statusCode === 200 || res.statusCode === 303) {
        return res;
      }
    }
    console.log('resvvv', res);
    // Alert.alert('', res.error);
  }
};
export const uploadImageApi = async (url, token, body) => {
  var headers;

  if (token == '' || token == null || token == undefined) {
    headers = {
      //   'Content-Type': 'multipart/form-data',
      //   Accept: 'application/json',
    };
  } else {
    headers = {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      'x-access-token': token,
    };
  }
  //   let data = JSON.stringify(body);
  //   console.log('data', data);
  const completeUrl = Url.BASE_URL + url;
  console.log('completeUrl', completeUrl);
  try {
    const response = await fetch(completeUrl, {
      method: 'POST',
      //   headers,
      body: body,
    });
    console.log('befire', response);
    let res = await response.json();
    console.log('api hit response', res);

    if (res !== null) {
      if (res !== null && Object.keys(res).length !== 0) {
        if (res) {
          console.log('res', res);
          return res;
        }
      }
      console.log('res', res);
      return res;
      // Alert.alert('', res.error);
    }
    return res;
  } catch (err) {
    // Alert.alert('', ' Somthing Went Wrong');
    console.log('err', err.message);
  }
};

export const post = async (url, token, body) => {
  var headers;
  if (token == '' || token == null || token == undefined) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  } else {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Token ' + token,
    };
  }

  let data = JSON.stringify(body);
  const completeUrl = Url.BASE_URL + url;
  console.log('completeUrl', completeUrl);
  const response = await fetch(completeUrl, {
    method: 'POST',
    headers,
    body: data,
  });
  return response;
  // let res = await response.json();
  // console.log('res', res);
  // if (res !== null) {
  //   if (res !== null && Object.keys(res).length !== 0) {
  //     if (res.statusCode === 200 || res.statusCode === 303) {
  //       return res;
  //     }
  //   }
  //   // Alert.alert('error', res.error);
  //   return res;
  //   // throw new Error(res.error)
  // }
};

export const put = async (url, token, body) => {
  var headers;

  if (token == '' || token == null || token == undefined) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  } else {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token,

    };
  }
  const completeUrl = Url.BASE_URL + url;
  console.log('completeUrl', completeUrl);
  let data = JSON.stringify(body);
  try {
    const response = await fetch(completeUrl, {
      method: 'PUT',
      headers,
      body: data,
    });
    let res = await response.json();


    if (res !== null && Object.keys(res).length !== 0) {
      if (res.statusCode === 200 || res.statusCode === 303) {
        console.log('res', res);
        return res;
      } else if (res.statusCode === 400) {
        console.log('else::res', res);
        return res;
      }
    }
    console.log('res', res);
    return res;
    // Alert.alert('', res.error);
  } catch (err) {
    console.log('put::err', err.message);
    return;
  }
};

export const deleteApi = async (url, token) => {
  var headers;

  if (token == '' || token == null || token == undefined) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  } else {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Token ' + token,
    };
  }
  const completeUrl = Url.BASE_URL + url;
  console.log('completeUrl', completeUrl);
  // let data = JSON.stringify(body)
  try {
    const response = await fetch(completeUrl, {
      method: 'DELETE',
      headers,
      // body: data
    });
    console.log('res', response);
    return response;
    // let res = await response.json();

    // if (res !== null) {
    //   if (res !== null && Object.keys(res).length !== 0) {
    //     if (res.statusCode === 200 || res.statusCode === 303) {
    //       console.log('res', res);
    //       return res;
    //     } else if (res.statusCode === 400) {
    //       console.log('else::res', res);
    //       return res;
    //     }
    //   }
    //   console.log('res', res);
    //   // Alert.alert('', res.error);
    // }
  } catch (err) {
    console.log('put::err', err.message);
    return;
  }
};

export const upLoadSingleImage = async (url, token, body) => {
  var headers;

  if (token == '' || token == null || token == undefined) {
    headers = {
      'Content-Type': 'multipart/form-data',

      Accept: 'application/json',
    };
  } else {
    headers = {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      'x-access-token': token,
    };
  }
  // console.log(
  //     `url${url} --- Authtoken ${token} --- body ${(body.email)} `,
  // );
  let data = JSON.stringify(body);

  const completeUrl = Url.BASE_URL + url;
  console.log('completeUrl', completeUrl);
  try {
    const response = await fetch(
      'http://93.188.167.68:4500/api/images/uploadSingle',
      {
        method: 'POST',
        headers,
        body: data,
      },
    );

    let res = await response.json();

    if (res !== null) {
      if (res !== null && Object.keys(res).length !== 0) {
        if (res.statusCode === 200) {
          console.log('res', res);
          return res;
        }
      }
      console.log('res', res);
      // Alert.alert('', res.error);
    }
  } catch (err) {
    // Alert.alert('', ' Somthing Went Wrong');
    console.log('err', err.message);
  }
};

export const FormDataPost = async (url, token, body) => {
  var headers;
  if (token == '' || token == null || token == undefined) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
  } else {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token,
    };
  }

  // let data = JSON.stringify(body);
  const completeUrl = Url.BASE_URL + url;
  console.log('completeUrl', completeUrl);
  const response = await fetch(completeUrl, {
    method: 'PUT',
    headers,
    body: body,
  });
  let res = await response.json();
  console.log('res?????????', res);
  if (res !== null) {
    if (res !== null && Object.keys(res).length !== 0) {
      if (res.statusCode === 200 || res.statusCode === 303) {
        return res;
      }
    }
    return res;
    // throw new Error(res.error)
  }
};

export const forgotPassword = async (url, token, body) => {
  var headers;
  if (token == '' || token == null || token == undefined) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  } else {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token,
    };
  }

  let data = JSON.stringify(body);
  const completeUrl = Url.BASE_URL + url;
  console.log('completeUrl', completeUrl);
  const res = await fetch(completeUrl, {
    method: 'POST',
    headers,
    body: data,
  });
  let response = await res.json();
  if (response !== null) {
    if (response !== null && Object.keys(response).length !== 0) {
      if (response.status === 200 || response.status === 303) {
        return response;
      }
    }
    return response;
  }
  return res;
};

export const postApi = async (url, token, body) => {
  var headers;
  if (token == '' || token == null || token == undefined) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  } else {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token,
    };
  }

  let data = JSON.stringify(body);
  const completeUrl = Url.BASE_URL + url;
  console.log('completeUrl', completeUrl);
  const response = await fetch(completeUrl, {
    method: 'POST',
    headers,
    body: data,
  });
  let res = await response.json();
  // console.log("res",res)
  if (res !== null) {
    if (res !== null && Object.keys(res).length !== 0) {
      if (res.statusCode === 200 || res.statusCode === 303) {
        return res;
      }
    }
    // Alert.alert('error', res.error);
    return res;
    // throw new Error(res.error)
  }
};
