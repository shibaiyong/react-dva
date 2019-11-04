import { routerRedux } from 'dva/router'
import { query, login, logout } from '../services/app'
//import * as menusService from '../services/menus'
import queryString from 'query-string'
import modelExtend from 'dva-model-extend'
import {Toast} from 'antd-mobile'
import {cityList} from '../services/app'
import { model } from './common'
import { tokenKey } from '../utils/config'
import {groupBy} from 'lodash'

const formatCity = list => {
    const newList = list.map(item => {
        const {id, name, pinyin} = item
        const acronym = pinyin.charAt(0).toUpperCase()
        return Object.assign({}, {id, name}, {acronym})
    })
    const citylist = groupBy(newList, (item) => item.acronym)
    return citylist
}


export default modelExtend(model, {
    namespace: 'app',
    state: {
        isNavbar: true,
        siderFold: false,
        theme: '',
        resources: [],
        user: {},
        pathMap: {},
        city_id: '',
        cityListData: {},
        city_name: '',
        district: ''
    },
    reducers: {
        setStyle(state, {style}) {
            return ({
                ...state,
                theme: style,
            })
        },
        setData(state, { payload }) {
            return { ...state, ...payload}
        }
    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            const {location:{search}} = history
            const {style} = queryString.parse(search)
            dispatch({
                type: 'setStyle',
                style
            })
            
        }
    },
    effects: {
        *setCity ({payload}, { call, put, select }){
            const {district} = payload
            let tempdistrict = ''
            if (district) {
                tempdistrict = district
                sessionStorage.setItem('district', district)
            } else {
                const sessionDistrict = sessionStorage.getItem('district')
                if (sessionDistrict) {
                    tempdistrict = sessionDistrict
                } else {
                    tempdistrict = ''
                }
            }
            Toast.loading('loading', 10)
            const {position, hotList, list, success} = yield call(cityList, {district: tempdistrict})
            if (success) {
                const {id, name} = position || {}
                if (!id) {
                    return Toast.info('暂无数据')
                }
                const city_list = formatCity(list)
                const cityListData = Object.assign({}, {pos: [position], hot: hotList, ...city_list})
                yield put({
                    type: 'setData',
                    payload: {
                        city_id: id,
                        city_name: name,
                        position,
                        hotList,
                        city_list:list,
                        cityListData
                    }
                })
                Toast.hide() 
            }
        }
    }
})