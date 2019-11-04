import modelExtend from 'dva-model-extend'
import queryString from 'query-string'
import { pageModel } from './common'
import { market, testCORSS } from '../services/market'
import { Toast } from 'antd-mobile'
import { getCity, getCityBack, goBack } from '../utils/native'
import update from 'immutability-helper'
import { getZhugeioMethod } from '../utils/native'


export default modelExtend(pageModel, {
    namespace: 'market',
    state: {
        adverts: [],
        banks: [],
        recomends: [],
        unfold: false,
        themes: [],
        hotcards:[],
        city_id: '',
        city_list: [],
        city_name: '',
        district: '',
        isAlert:true
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/marketIndex') {
                    dispatch({
                        type: 'fetchMarket'
                    })

                    testCORSS().then( res => {
                        if(res.isShow == 'true'){
                            dispatch({
                                type: 'getStatus',
                                isAlert: true
                            })
                        }else{
                            dispatch({
                                type: 'getStatus',
                                isAlert: false
                            })
                        }
                    }).catch(err=>{
                        console.log(err)
                    })
                }
            })
        },
    },
    effects: {
        *getStatus({ isAlert }, { call, put, select }){
            yield put({
                type: 'getStatusSuccess',
                isAlert
            })
        },
        *fetchMarket({ payload }, { call, put, select }) {
            const { city_id } = yield select(state => state.app)
            const { ryx, navigator: { userAgent }, webkit } = window
            const isAndroid = userAgent.indexOf('Android') > -1
            const isPhone = userAgent.indexOf('Phone') > -1
            if(!city_id && isAndroid ){
                ryx && ryx.getCity()
            }else if( !city_id && isPhone ){
                webkit && webkit.messageHandlers.getCity.postMessage("")
            }else{
                Toast.loading('loading', 10)
                const data = yield call(market, { city_id })
                if (data.success) {
                    try{
                        getZhugeioMethod({
                            zhugeNo: 382
                        })
                    }catch( error ){
                        console.log(error)
                    }
                    yield put({
                        type: 'getSuccess',
                        payload: {
                            ...data
                        }
                    })
                    Toast.hide()
                }
            }
            // if (!city_id) {
            //     getCity()
            // } else {
            //     Toast.loading('loading', 10)
            //     const data = yield call(market, { city_id })
            //     if (data.success) {
            //         try{
            //             getZhugeioMethod({
            //                 zhugeNo: 382
            //             })
            //         }catch( error ){
            //             console.log(error)
            //         }
            //         yield put({
            //             type: 'getSuccess',
            //             payload: {
            //                 ...data
            //             }
            //         })
            //         Toast.hide()
            //     }
            // }
            
            window.scroll(0, 0)
        }

    },
    reducers: {
        getSuccess(state, { payload }) {
            return { ...state, ...payload }
        },
        getCity(state, { payload }) {
            return { ...state, ...payload }
        },
        onChangeFilter(state, { key, value }) {
            return update(state, {
                [key]: { $set: value }
            })
        },
        getStatusSuccess(state, { isAlert }){
            return { ...state, isAlert }
        }
    }
})