import modelExtend from 'dva-model-extend'
import queryString from 'query-string'
import { pageModel } from './common'
import { listThemeExt} from '../services/theme'

import update from 'immutability-helper'

export default {
    namespace: 'themes',
    state: {
        themeExts: [],
        theme: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/theme') {
                    const {theme_id} = queryString.parse(location.search)
                    dispatch({
                        type: 'fetchListThemeExt',
                        payload:{
                            theme_id
                        }
                    })
                }
            })
        },
    },
    effects: {
        * fetchListThemeExt({ payload }, { call, put, select }) {
            const {city_id} = yield select(state => state.app)
            const _payload = {
                ...payload,
                city_id
            }
            const {success, themeExts, theme} = yield call(listThemeExt, _payload)
            if (success) {
                yield put({
                    type: 'getSuccess',
                    payload:{
                        themeExts,
                        theme
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