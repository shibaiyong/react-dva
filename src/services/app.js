import { request, config } from '../utils'

const { api: { cityListUrl } } = config

export const cityList = data => request.post(cityListUrl, data)