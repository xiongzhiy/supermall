import axios from "axios";


export function request (config) {
//  1 .创建实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',
    timeout:5000
  })

  // 2.1 发送拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err);
  })


  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    //  3.发送真正的网络请求
    console.log(err);
  })
  return instance(config)
}
