import { routerRedux } from 'dva/router'
import { login } from '../services/login'

export default {
    namespace: 'login',
    state: {},
    effects: {
        * login({ payload }, { put, call, select }) {
            const data = yield call(login, payload)
            //const { locationQuery } = yield select(_ => _.app)
            yield put(routerRedux.push('/'))
        }
    }
}