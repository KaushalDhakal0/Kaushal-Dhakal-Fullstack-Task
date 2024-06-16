import axios from "axios"

const baseUrl = import.meta.env.VITE_REACT_APP_API_ENDPOINT;


console.log("==Base Url==>", baseUrl);
const client = axios.create({
  baseURL:baseUrl,
})


export const ApiCall = function (
    method,
    route,
    body,
    type,
    id,
    callback,
    controller,
    singleVideo = false,
  ) {
    const onSuccess = function (response) {
      return response.data
    }  
    const onError = function (error) {
      console.error('Request Failed:', error.config)
  
      if (error.response) {
        console.error('Status:', error.response.status)
        console.error('Data:', error.response.data)
        console.error('Headers:', error.response.headers)
      } else {
        console.error('Error Message:', error.message)
      }
  
      if (error.response.status === 401) {
        window.location.href = '/logout'
      }
  
      return Promise.reject(error.response || error.message)
    }
  
    const config = {
      headers: {
        // Authorization: 'Bearer ' + (token || static_token),
        'Content-Type': type || 'application/json',
      },
      onUploadProgress: (progressEvent) => {
        var percentCompleted = Math.floor(
          (progressEvent.loaded * 100) / progressEvent.total
        )
  
        if (percentCompleted < 100 && callback) {
          callback({ id, percentCompleted, controller })
        }
      },
    }
      return client({
        method,
        url: route,
        data: body,
        headers:config.headers,
        onUploadProgress: config.onUploadProgress,
        cancelToken: controller?.token,
      })
        .then(onSuccess)
        .catch(onError)
    

  }