import modelExtend from 'dva-model-extend'
import queryString from 'query-string'
import { pageModel } from './common'
import { listProcessBank} from '../services/apply'

import update from 'immutability-helper'
import { getZhugeioMethod } from '../utils/native';

export default {
    namespace: 'apply',
    state: {
        applyList: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/apply') {
                    dispatch({
                        type: 'fetchListProcessBank'
                    })
                }
            })
        },
    },
    effects: {
        * fetchListProcessBank({ payload }, { call, put, select }) {
            const {city_id} = yield select(state => state.app)
            const _payload = {
                city_id
            }
            const {success, banks} = yield call(listProcessBank, _payload)
            if (success) {
                // getZhugeioMethod({
                //     zhugeNo: 396
                // })

                yield put({
                    type: 'getSuccess',
                    payload: {
                        applyList: banks
                    }
                })
            }
            
        }
    },
    reducers: {
        getSuccess(state, { payload }) {
            return { ...state, ...payload}
        },
        getCity (state, { payload }) {
            return { ...state, ...payload}
        },
        onChangeFilter(state, {key, value}){
            return update(state, {
                [key]: {$set: value}
            })
        }
    }
}