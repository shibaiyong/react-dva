import axios from 'axios'
import { notification } from 'antd'
import { tokenKey } from './config'

// axios.interceptors.request.use(config => {
//     config.headers.Authorization = sessionStorage.getItem(tokenKey)
//     return config
// })

axios.interceptors.response.use(response => {
    const { data } = response
    return data
}, error => {
    const { response: { status } } = error
    let description = '未知异常！'
    switch (status) {
        case 401:
            // dispatch({
            //     type: 'app/logout'
            // })
            window.location = '/#/login'
            return
        case 404:
            description = '没找到api！'
            break
        case 403:
            break
        default:

    }

    // notification['error']({
    //     message: '错误',
    //     placement: 'bottomRight',
    //     description
    // });

    //throw error
})

const { get, delete: axiosDelete } = axios

axios.get = (url, params) => get(url, { params })
axios.delete = (url, data) => axiosDelete(url, { data })

export default axios