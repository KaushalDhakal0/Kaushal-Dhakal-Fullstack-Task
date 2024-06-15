import axios from "axios"
import useGlobalStore from "../hooks/globalStore"
import { serviceUrl } from "../constants/application"

export const static_token =
  process.env.REACT_APP_STATIC_TOKEN || localStorage.getItem('token')

const client = axios.create({
  baseURL:serviceUrl.baseUrl,
})

const videoCilent = axios.create({
  baseURL:serviceUrl.videoUrl,
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
    const { globalStore } = useGlobalStore()
    const { token } = globalStore.getState()
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
        Authorization: 'Bearer ' + (token || static_token),
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

    if(singleVideo){
      return videoCilent({
        method,
        url: route,
        data: body,
        headers: {
          'Content-Type' : 'application/vnd.apple.mpegurl'
        },
        onUploadProgress: config.onUploadProgress,
        cancelToken: controller?.token,
      })
        .then(onSuccess)
        .catch(onError)

    }else{
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

  }