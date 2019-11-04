import modelExtend from 'dva-model-extend'
import queryString from 'query-string'
import {Toast} from 'antd-mobile'
import { pageModel } from './common'
import { cardList, cardFilters} from '../services/card'

import update from 'immutability-helper'

export default {
    namespace: 'cardModel',
    state: {
        cardList: [],
        bank_id: '',
        grade_id: '',
        purpose_id: '',
        isPurposes: false,
        isGrades:false,
        isBanks: false,
        type: '',
        purposes: [],
        grades: [],
        banks: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/card') {
                    dispatch({
                        type: 'fetchCardList'
                    })
                    dispatch({
                        type: 'fetchCardFilters'
                    })
                }
            })
        },
    },
    effects: {
        * fetchCardList({ payload }, { call, put, select }) {
            const {bank_id, grade_id, purpose_id} = yield select(state => state.cardModel)
            const _payload = {
                bank_id,
                grade_id,
                purpose_id
            }
            Toast.loading('loading', 10)
            const {success, cards} = yield call(cardList, _payload)
            
            if (success) {
                yield put({
                    type: 'getSuccess',
                    payload: {
                        cardList: cards
                    }
                })
                Toast.hide() 
            }
            
        },
        * fetchCardFilters({ payload }, { call, put, select }) {
            const {city_id} = yield select(state => state.app)
            const _payload = {
                city_id
            }
            const {success, purposes, grades, banks} = yield call(cardFilters, _payload)
            if (success) {
                yield put({
                    type: 'getSuccess',
                    payload: {
                        purposes,
                        grades,
                        banks
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
        onChangeFilter(state, { payload }) {
            return { ...state, ...payload}
        },
    }
}