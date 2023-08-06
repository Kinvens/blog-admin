import axios, { type AxiosResponse, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios'

interface RequestConfig<T = any> extends InternalAxiosRequestConfig<T> {
  interceptors?: Interceptors<T>
}

interface Interceptors<T = any> {
  requestSuccessFn?: (config: RequestConfig<T>) => RequestConfig<T>
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: AxiosResponse<T>) => AxiosResponse<T>
  responseFailureFn?: (err: any) => any
}

export class Request {
  private readonly config: RequestConfig
  private readonly instance: AxiosInstance

  constructor(config: RequestConfig) {
    this.config = config
    this.instance = axios.create(config)
    this.initDefaultGlobalInterceptors()
    this.initCustomGlobalInterceptors()
  }

  //   初始化全局默认的拦截器
  private initDefaultGlobalInterceptors(): void {
    this.instance.interceptors.request.use(
      config => {
        // loading/token
        return config
      },
      err => {
        return err
      },
    )
    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        return err
      },
    )
  }

  private initCustomGlobalInterceptors(): void {
    this.instance.interceptors.request.use(
      this.config.interceptors?.requestSuccessFn,
      this.config.interceptors?.requestFailureFn,
    )
    this.instance.interceptors.response.use(
      this.config.interceptors?.responseSuccessFn,
      this.config.interceptors?.responseFailureFn,
    )
  }

  async get<T = any>(config: RequestConfig<T>): Promise<any> {
    return await this.request({ ...config, method: 'GET' })
  }

  async post<T = any>(config: RequestConfig<T>): Promise<any> {
    return await this.request({ ...config, method: 'POST' })
  }

  async delete<T = any>(config: RequestConfig<T>): Promise<any> {
    return await this.request({ ...config, method: 'DELETE' })
  }

  async patch<T = any>(config: RequestConfig<T>): Promise<any> {
    return await this.request({ ...config, method: 'PATCH' })
  }

  public async request<T extends AxiosResponse<any, any>>(config: RequestConfig): Promise<T> {
    // 单次请求的成功拦截处理
    this.config?.interceptors?.requestSuccessFn?.(config)
    return await new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then(res => {
          // 单次响应的成功拦截处理
          this.config.interceptors?.responseSuccessFn?.(res)
          resolve(res)
        })
        .catch(err => {
          // 单词响应失败拦截处理
          this.config.interceptors?.responseFailureFn?.(err)
          reject(err)
        })
    })
  }
}
