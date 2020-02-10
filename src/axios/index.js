import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.post['content-Type'] = 'application/json;charset=UTF-8';
//axios.defaults.headers.post['content-Type'] = 'application/x-www-form-urlencoded';
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}


function setHeaders(headers){

}


function apiAxios (method, url,headers, params, success, failure) {
  if (headers){
    setHeaders(headers)
  }

  axios({
    method: method,
    url: url,
    data:  method === 'PUT' ? params : null,
    params:method === 'POST' || method === 'GET' || method === 'DELETE' ? params : null,
    withCredentials: false
  })
    .then(function (res) {
      if (res.data.status === "success") {
        if (success) {
          success(res.data)
        }
      } else {
        failure(res.data)
      }
    })
    .catch(function (err) {
      let res = err.response
      if (err) {
        console.log('api error, HTTP CODE: ' + res.status)
      }
    })
}

export default {
  get: function (url,headers, params, success, failure) {
    return apiAxios('GET', url,headers, params, success, failure)
  },
  post: function (url,headers, params, success, failure) {
    return apiAxios('POST', url,headers, params, success, failure)
  },
  put: function (url,headers, params, success, failure) {
    return apiAxios('PUT', url,headers, params, success, failure)
  },
  delete: function (url,headers, params, success, failure) {
    return apiAxios('DELETE', url,headers, params, success, failure)
  }
}
