import axios from 'axios'
import { Indicator,MessageBox } from 'mint-ui';
axios.defaults.timeout = 5000;
// http request 拦截器
axios.interceptors.request.use((config)=>{
    // config.headers.token = sessionStorage.getItem("token") //将接口返回的token信息配置到接口请求中
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    return config;
}, (error)=> {
    MessageBox('提示', '数据请求失败,请稍候再试!');
    return Promise.reject(error);
});
// http response 拦截器
axios.interceptors.response.use((response)=> {
    Indicator.close();
    return response
},(error)=> {
    Indicator.close();
    if (error.response.status === 401) {
        router.replace({
            path: '/login',
        });
        // sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
    }
    return Promise.reject(error);
});
export default axios;