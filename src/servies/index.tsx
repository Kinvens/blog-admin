// import axios from 'axios'
// import type { AxiosInstance } from 'axios'
// import type { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios'

// // 针对AxiosRequestConfig配置进行扩展
// export interface Interceptors<T = AxiosResponse> {
//   requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig<any>
//   requestFailureFn?: (err: any) => any
//   responseSuccessFn?: (res: T) => T
//   responseFailureFn?: (err: any) => any
// }

// export interface RequestConfig extends AxiosRequestConfig {
//   interceptors?: Interceptors
// }

// /**
//  * 两个难点:
//  *  1.拦截器进行精细控制
//  *    > 全局拦截器
//  *    > 实例拦截器
//  *    > 单次请求拦截器
//  *
//  *  2.响应结果的类型处理(泛型)
//  */

// class Request {
//   public instance: AxiosInstance

//   // request实例 => axios的实例
//   constructor(config: RequestConfig) {
//     this.instance = axios.create(config)

//     // 每个instance实例都添加拦截器
//     this.initDefaultGlobalInterceptors()

//     // 针对特定的Request实例添加拦截器
//   }

//   // 初始化全局默认的拦截器
//   private initDefaultGlobalInterceptors() {
//     this.instance.interceptors.request.use(
//       config => {
//         // loading/token
//         return config
//       },
//       err => {
//         return err
//       },
//     )
//     this.instance.interceptors.response.use(
//       res => {
//         return res.data
//       },
//       err => {
//         return err
//       },
//     )
//   }

//   //   初始化自定义全局默认的拦截器
//   private initCustomeGlobalInterceptors(config: RequestConfig) {
//     this.instance.interceptors.request.use(config.interceptors?.requestSuccessFn, config.interceptors?.requestFailureFn)
//     this.instance.interceptors.response.use(
//       config.interceptors?.responseSuccessFn,
//       config.interceptors?.responseFailureFn,
//     )
//   }

//   // 封装网络请求的方法
//   request<T = any>(config: RequestConfig) {
//     // 单次请求的成功拦截处理
//     if (config.interceptors?.requestSuccessFn) {
//       config = config.interceptors.requestSuccessFn(config)
//     }

//     // 返回Promise
//     return new Promise<T>((resolve, reject) => {
//       this.instance
//         .request<any, T>(config)
//         .then(res => {
//           // 单次响应的成功拦截处理
//           if (config.interceptors?.responseSuccessFn) {
//             res = config.interceptors.responseSuccessFn(res)
//           }
//           resolve(res)
//         })
//         .catch(err => {
//           reject(err)
//         })
//     })
//   }

//   get<T = any>(config: RequestConfig<T>) {
//     return this.request({ ...config, method: 'GET' })
//   }
//   post<T = any>(config: RequestConfig<T>) {
//     return this.request({ ...config, method: 'POST' })
//   }
//   delete<T = any>(config: RequestConfig<T>) {
//     return this.request({ ...config, method: 'DELETE' })
//   }
//   patch<T = any>(config: RequestConfig<T>) {
//     return this.request({ ...config, method: 'PATCH' })
//   }
// }

// const BASE_URL = process.env.REACT_APP_BASE_URL
// export const TIME_OUT = 1000
// export { BASE_URL }

// const request = new Request({
//   baseURL: BASE_URL,
//   timeout: TIME_OUT,
// })

// export default request

import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

// interface RequestConfig extends AxiosRequestConfig {}

export class Request {
  private readonly config: AxiosRequestConfig
  private readonly instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.config = config
    this.instance = axios.create(config)
    // this.initDefaultGlobalInterceptors()
  }

  // 初始化全局默认的拦截器
  //   private initDefaultGlobalInterceptors() {
  //     this.instance.interceptors.request.use(
  //       config => {
  //         // loading/token
  //         return config
  //       },
  //       err => {
  //         return err
  //       },
  //     )
  //     this.instance.interceptors.response.use(
  //       res => {
  //         return res.data
  //       },
  //       err => {
  //         return err
  //       },
  //     )
  //   }

  //   get<T = any>(config: AxiosRequestConfig<T>): Promise<any> {
  //     return this.request({ ...config, method: 'GET' })
  //   }
  //   post<T = any>(config: AxiosRequestConfig<T>): Promise<any> {
  //     return this.request({ ...config, method: 'POST' })
  //   }
  //   delete<T = any>(config: AxiosRequestConfig<T>): Promise<any> {
  //     return this.request({ ...config, method: 'DELETE' })
  //   }
  //   patch<T = any>(config: AxiosRequestConfig<T>): Promise<any> {
  //     return this.request({ ...config, method: 'PATCH' })
  //   }

  //   public request<T = any>(config: AxiosRequestConfig) {
  //     return new Promise<T>((resolve, reject) => {
  //       this.instance
  //         .request<any, T>(config)
  //         .then(res => {
  //           resolve(res)
  //         })
  //         .catch(err => {
  //           reject(err)
  //         })
  //     })
  //   }
}
