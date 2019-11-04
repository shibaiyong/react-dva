import { request, config } from '../utils'

const { api: {marketUrl, cityListUrl, isShowView} } = config


export const market  = params => request.post(marketUrl, params)

export const cityList = data => request.post(cityListUrl, data)

export const testCORSS = params => request.post(isShowView, params)