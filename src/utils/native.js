import app from '../index'
import { routerRedux } from 'dva/router'
import queryString from 'query-string'
const { _store, _history } = app || {}
const { dispatch } = _store
const win = window
const { ryx, navigator: { userAgent }, webkit } = win
const isAndroid = userAgent.indexOf('Android') > -1
// console.log(win)
function getCity() {
    if (isAndroid) {
        ryx && ryx.getCity()
    } else {
        webkit && webkit.messageHandlers.getCity.postMessage("")
    }
}
function goBack() {
    if (isAndroid) {
        ryx && ryx.goback()
    } else {
        webkit && webkit.messageHandlers.goback.postMessage("")
    }
}
const handleRefresh = newQuery => {
    const { location: { search, pathname } } = _history
    const query = queryString.parse(search)
    dispatch(routerRedux.replace({
        pathname,
        search: queryString.stringify({
            ...query,
            ...newQuery
        })
    }))
}

function getCityBack(code) {
    dispatch({
        type: 'app/setCity',
        payload: {
            district: code
        }
    }).then(handleRefresh)
}
window.getCityBack = getCityBack

const getZhugeioMethod = params => {
    const paramsStr = JSON.stringify(params)
    // console.info(paramsStr)
    // return
    isAndroid
        ?
        ryx.getZhugeioMethod && ryx.getZhugeioMethod(paramsStr)
        :
        webkit.messageHandlers.getZhugeioMethod && webkit.messageHandlers.getZhugeioMethod.postMessage(paramsStr)
}

export {
    getCity,
    getCityBack,
    goBack,
    getZhugeioMethod
} 