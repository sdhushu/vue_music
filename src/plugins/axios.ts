import axios from "axios";

const Axios = {
    install: (app:any,option:any)=>{
        // axios 基本配置
        const config = {
            baseURL:'',
            timeout:3000,
            headers:[
                'Access-Control-Allow-Origin:*'
            ]
        }
        // 合并传入数据配置
        const instance = axios.create(Object.assign(config,option))
        // 提供GET方法 挂载在vue实例上
        app.config.globalProperties.Get = (url:string,params?:object) => {
           return  instance.get(url,{params:params})
        }
        // 提供POST方法
        app.config.globalProperties.Post = (url:string,data?:object) => {
            return instance.post(url,data)
        }
        // 提供请求并发方法 高并发
        app.config.globalProperties.All = (request:Array<string>) => {
            return Promise.all(request)
        }
        // Put方法
        app.config.globalProperties.Put = (url:string, data?:object) => {
            return instance.put(url,data)
        }
        // Delete方法
        app.config.globalProperties.Delete = (url:string,params?:object) => {
            return instance.delete(url,{params:params})
        }
        // 请求拦截器
        app.config.globalProperties.Interceptor = (token:string) => {
            return instance.interceptors.request.use(config =>{
                // @ts-ignore
                config.headers.Authorization = token
                return config
            })
        }
    }
}


export default Axios
